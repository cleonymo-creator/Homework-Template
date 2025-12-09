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
    const { submissions } = JSON.parse(event.body || '{}');

    if (!Array.isArray(submissions) || submissions.length === 0) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'No submissions provided for analysis' })
      };
    }

    // Prepare a summary of submissions for the AI
    const submissionSummaries = submissions.map(sub => ({
      studentName: sub.studentName,
      score: sub.score,
      answers: sub.answers,
      questionStates: sub.questionStates,
      timestamp: sub.submittedAt || sub.serverTimestamp
    }));

    const client = new Anthropic({ apiKey });

    const summaryPrompt = `You are an experienced teacher analyzing student homework submissions to identify patterns and provide actionable insights.

You have ${submissions.length} student submission(s) to analyze. Here is the data:

${JSON.stringify(submissionSummaries, null, 2).slice(0, 12000)}

Please analyze these submissions and provide insights that will help the teacher:

1. Identify COMMON STRENGTHS - What concepts do students generally understand well?
2. Identify COMMON MISCONCEPTIONS - What concepts are students struggling with? What errors appear repeatedly?
3. Find a REPRESENTATIVE GOOD EXAMPLE - Quote or describe a particularly good student response
4. Find a REPRESENTATIVE MISCONCEPTION - Describe a typical error pattern you observed
5. Provide TEACHING SUGGESTIONS - Specific, actionable recommendations for what to cover in the next lesson

Be specific and constructive. Focus on patterns that appear across multiple students when possible.

Respond in this exact JSON format (no markdown, just valid JSON):
{
  "summary": "<1-2 paragraph overview of class performance and key observations>",
  "commonStrengths": ["<strength 1>", "<strength 2>", "<strength 3>"],
  "commonMisconceptions": ["<misconception 1>", "<misconception 2>"],
  "representativeGoodExample": "<quote or description of a good student response>",
  "representativeMisconceptionExample": "<description of a typical error pattern>",
  "teachingSuggestions": ["<specific suggestion 1>", "<specific suggestion 2>", "<specific suggestion 3>"]
}`;

    console.log(`Analyzing ${submissions.length} submissions...`);

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [{ role: "user", content: summaryPrompt }]
    });

    const responseText = response.content[0].text;
    
    // Extract JSON from response
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Could not parse AI analysis response');
    }

    const result = JSON.parse(jsonMatch[0]);

    // Ensure all required fields exist with defaults
    const analysis = {
      summary: result.summary || "Analysis complete. See details below.",
      commonStrengths: result.commonStrengths || [],
      commonMisconceptions: result.commonMisconceptions || [],
      representativeGoodExample: result.representativeGoodExample || null,
      representativeMisconceptionExample: result.representativeMisconceptionExample || null,
      teachingSuggestions: result.teachingSuggestions || [],
      analyzedCount: submissions.length,
      analyzedAt: new Date().toISOString()
    };

    console.log('AI analysis complete:', {
      studentsAnalyzed: submissions.length,
      strengthsFound: analysis.commonStrengths.length,
      misconceptionsFound: analysis.commonMisconceptions.length
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(analysis)
    };

  } catch (error) {
    console.error('AI analysis error:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ 
        error: 'AI analysis failed',
        message: error.message
      })
    };
  }
};
