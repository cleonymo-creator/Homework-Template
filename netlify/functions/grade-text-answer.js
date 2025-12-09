const Anthropic = require("@anthropic-ai/sdk").default;

exports.handler = async (event, context) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('ANTHROPIC_API_KEY not configured');
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ 
        error: 'API key not configured',
        message: 'Please add ANTHROPIC_API_KEY to environment variables'
      })
    };
  }

  try {
    const { studentAnswer, correctAnswer, question, context: questionContext } = JSON.parse(event.body);
    
    if (!studentAnswer || studentAnswer.trim().length < 5) {
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          score: 0,
          isCorrect: false,
          feedback: "Your answer is too short. Please provide a more detailed response.",
          goodPoints: [],
          missedPoints: ["A complete answer with supporting details"],
          improvements: "Try to explain your thinking more fully and include specific examples or evidence."
        })
      };
    }
    
    const client = new Anthropic({ apiKey });
    
    const prompt = `You are a friendly, encouraging teacher grading a student's answer. Be supportive but accurate.

QUESTION: ${question}

EXPECTED ANSWER SHOULD INCLUDE: ${correctAnswer}

STUDENT'S ANSWER: ${studentAnswer}

${questionContext ? `ADDITIONAL CONTEXT: ${questionContext}` : ''}

Grade this response on a scale of 0-100 and provide helpful feedback. Consider:
- Understanding of the concept
- Inclusion of key points from the expected answer
- Use of evidence or examples
- Clarity of expression

Be encouraging even when pointing out areas for improvement. A score of 70+ means the answer demonstrates good understanding.

Respond in this exact JSON format (no markdown, just JSON):
{
  "score": <number 0-100>,
  "isCorrect": <true if score >= 70>,
  "feedback": "<2-3 sentences of encouraging, specific feedback>",
  "goodPoints": ["<point 1>", "<point 2>"],
  "missedPoints": ["<missed point 1>"],
  "improvements": "<specific suggestion for improvement>"
}`;

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 500,
      messages: [{ role: "user", content: prompt }]
    });

    const responseText = response.content[0].text;
    
    // Extract JSON from response
    let result;
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      result = JSON.parse(jsonMatch[0]);
    } else {
      throw new Error('Could not parse AI response');
    }

    // Ensure all required fields exist
    result = {
      score: result.score || 0,
      isCorrect: result.isCorrect || result.score >= 70,
      feedback: result.feedback || "Thank you for your response.",
      goodPoints: result.goodPoints || [],
      missedPoints: result.missedPoints || [],
      improvements: result.improvements || ""
    };

    console.log('Grading complete:', { question: question.substring(0, 50), score: result.score });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(result)
    };

  } catch (error) {
    console.error('Grading error:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ 
        error: 'Grading failed',
        message: error.message,
        // Provide a fallback response so the app doesn't break
        score: 50,
        isCorrect: false,
        feedback: "We couldn't fully grade your response. Please review your answer.",
        goodPoints: [],
        missedPoints: [],
        improvements: "Try again or contact your teacher."
      })
    };
  }
};
