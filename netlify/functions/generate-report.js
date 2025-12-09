// Generate AI Performance Report for Student
// POST: { studentName, score, questionResults, questions }

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };
  
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }
  
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }
  
  try {
    const { studentName, score, questionResults, questions, subject, title } = JSON.parse(event.body);
    
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'API key not configured' })
      };
    }
    
    // Build detailed summary for AI
    const questionSummaries = questionResults.map((result, idx) => {
      const q = questions[idx];
      let summary = `Question ${idx + 1} (${q.type}): "${q.question}"`;
      summary += `\n  - Status: ${result.isCorrect ? 'CORRECT' : 'INCORRECT'}`;
      summary += `\n  - Points: ${result.isCorrect ? q.points : 0}/${q.points}`;
      
      if (result.aiGrading) {
        summary += `\n  - AI Score: ${result.aiGrading.score}%`;
        summary += `\n  - AI Feedback: ${result.aiGrading.feedback}`;
        if (result.aiGrading.missedPoints?.length > 0) {
          summary += `\n  - Missed concepts: ${result.aiGrading.missedPoints.join(', ')}`;
        }
      }
      
      if (result.answer) {
        if (typeof result.answer === 'string') {
          summary += `\n  - Student's answer: "${result.answer.substring(0, 200)}${result.answer.length > 200 ? '...' : ''}"`;
        } else if (result.answer.text) {
          summary += `\n  - Student's answer: "${result.answer.text.substring(0, 200)}${result.answer.text.length > 200 ? '...' : ''}"`;
        }
      }
      
      return summary;
    }).join('\n\n');
    
    const prompt = `You are an encouraging and constructive educational assistant. A student named ${studentName} has just completed a homework assignment.

Assignment: "${title || 'Homework'}"
Subject: ${subject || 'General'}
Overall Score: ${score}%

Here are their results for each question:

${questionSummaries}

Please generate a personalized performance report with the following sections. Be encouraging but honest, and provide actionable advice. Write in second person ("You did well on...").

Return your response as a JSON object with these exact fields:
{
  "overallGrade": "Excellent" | "Good" | "Satisfactory" | "Needs Improvement",
  "summary": "A 2-3 sentence overall summary of performance",
  "strengths": ["Array of 2-4 specific things the student did well"],
  "areasForImprovement": ["Array of 2-4 specific areas where improvement is needed"],
  "studyTips": ["Array of 3-4 concrete study tips or next steps tailored to their performance"],
  "encouragement": "A brief encouraging message for the student"
}

Ensure your response is ONLY the JSON object, no markdown or other text.`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Anthropic API error:', errorText);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'AI service error' })
      };
    }
    
    const result = await response.json();
    const content = result.content[0].text;
    
    // Parse the JSON response
    let report;
    try {
      // Handle potential markdown code blocks
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        report = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('No JSON found in response');
      }
    } catch (parseError) {
      console.error('Failed to parse AI response:', content);
      // Return a default report if parsing fails
      report = {
        overallGrade: score >= 85 ? 'Excellent' : score >= 70 ? 'Good' : score >= 50 ? 'Satisfactory' : 'Needs Improvement',
        summary: `You scored ${score}% on this assignment. ${score >= 70 ? 'Well done!' : 'Keep practicing to improve.'}`,
        strengths: ['Completed all questions', 'Showed effort throughout'],
        areasForImprovement: ['Review incorrect answers', 'Study the explanations provided'],
        studyTips: ['Review the feedback for each question', 'Practice similar questions', 'Ask your teacher about concepts you found difficult'],
        encouragement: 'Every attempt helps you learn. Keep up the good work!'
      };
    }
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ report })
    };
    
  } catch (error) {
    console.error('Error generating report:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to generate report' })
    };
  }
};
