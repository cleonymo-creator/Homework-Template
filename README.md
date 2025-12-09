# 📚 Interactive Homework Template v5.0

A complete, ready-to-deploy homework application with:

- ✅ **AI-Powered Grading** - Free-text answers graded by Claude AI
- ✅ **Supplementary Questions** - Follow-up questions when students get answers wrong
- ✅ **Teacher Dashboard** - View all submissions with AI analysis
- ✅ **Real-Time Progress** - See students currently working
- ✅ **Anti-Cheating** - Paste protection on free-text answers
- ✅ **Persistent Storage** - Submissions saved to Netlify Blobs

## 🚀 Quick Start

### Option 1: Git-Based Deployment (Recommended)

1. **Fork or clone this repository**

2. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select your repository

3. **Add Environment Variables**
   - Go to Site settings → Environment variables
   - Add: `ANTHROPIC_API_KEY` = your API key from [Anthropic Console](https://console.anthropic.com)

4. **Deploy!**
   - Netlify will automatically build and deploy
   - Blobs storage works automatically with Git deploys

### Option 2: Drag-and-Drop Deployment

1. **Download/zip this folder**

2. **Deploy to Netlify**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag and drop the zip file

3. **Add ALL Environment Variables**
   - `ANTHROPIC_API_KEY` - Your Anthropic API key
   - `NETLIFY_SITE_ID` - Found in Site settings → General → Site ID
   - `NETLIFY_BLOBS_TOKEN` - Create at User settings → Applications → Personal access tokens

4. **Redeploy** after adding environment variables

## 📝 Customizing Your Homework

You only need to edit **two files**:

### 1. `config/homework.js` - Your Questions

```javascript
window.HOMEWORK_CONFIG = {
  title: "Your Homework Title",
  subject: "Subject Name",
  yearGroup: "Year 9",
  instructions: "Instructions for students...",
  passThreshold: 70,
  teacherPassword: "your-secure-password",
  
  questions: [
    {
      id: 1,
      type: "multiple-choice", // or "true-false" or "free-text"
      question: "Your question here?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: 0, // Index of correct option
      explanation: "Explanation shown after answering",
      points: 10,
      
      // REQUIRED: Follow-up question if they get it wrong
      supplementary: {
        type: "true-false",
        question: "Follow-up question?",
        correctAnswer: true,
        explanation: "Explanation for follow-up"
      }
    }
    // ... more questions
  ]
};
```

### 2. `config/theme.js` - Visual Style (Optional)

```javascript
window.THEME_CONFIG = {
  colors: {
    primary: "#2563eb",
    secondary: "#3b82f6",
    accent: "#f59e0b",
    background: "#f8fafc"
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Source Sans 3', sans-serif"
  },
  heroImage: "assets/images/hero.png" // Optional
};
```

## 🎯 Question Types

### Multiple Choice
```javascript
{
  type: "multiple-choice",
  question: "What is 2 + 2?",
  options: ["3", "4", "5", "6"],
  correctAnswer: 1, // Index (0-based), so "4"
  points: 10
}
```

### True/False
```javascript
{
  type: "true-false",
  question: "The sky is blue.",
  correctAnswer: true,
  points: 5
}
```

### Free Text (AI Graded)
```javascript
{
  type: "free-text",
  question: "Explain photosynthesis.",
  correctAnswer: "Plants convert sunlight, water, and CO2 into glucose and oxygen...",
  points: 20
}
```

## 👩‍🏫 Teacher Dashboard

Access the dashboard at: `your-site.netlify.app/#teacher`

**Default password:** `teacher123` (change in `config/homework.js`)

Features:
- View all completed submissions
- See real-time student progress
- Per-submission AI grading details
- **AI Overview** - Select multiple submissions for class-wide analysis

## 🔧 Environment Variables Reference

| Variable | Required | Purpose |
|----------|----------|---------|
| `ANTHROPIC_API_KEY` | ✅ Yes | AI grading and analysis |
| `NETLIFY_SITE_ID` | Drag-drop only | Blobs storage |
| `NETLIFY_BLOBS_TOKEN` | Drag-drop only | Blobs storage |
| `TEACHER_PASSWORD` | Optional | Override default password |

## 📁 Project Structure

```
homework-template/
├── index.html              # Main application (don't edit)
├── config/
│   ├── homework.js         # ← EDIT THIS: Your questions
│   └── theme.js            # ← EDIT THIS: Visual theme
├── assets/
│   └── images/             # Your images (optional)
├── netlify/
│   └── functions/          # Backend (don't edit)
│       ├── grade-text-answer.js
│       ├── submit-homework.js
│       ├── get-submissions.js
│       ├── save-progress.js
│       └── analyze-student-responses.js
├── package.json
├── netlify.toml
└── README.md
```

## 🤖 Using AI to Generate Content

Ask Claude or another AI:

> "Generate a homework.js config file for a Year 8 Science homework about the water cycle. Include 5 questions mixing multiple-choice, true/false, and one free-text question. Each question needs a supplementary follow-up question."

The AI will generate just the configuration - no complex code needed!

## ❓ Troubleshooting

### "MissingBlobsEnvironmentError"
- **Cause:** Using drag-and-drop deploy without Blobs config
- **Fix:** Add `NETLIFY_SITE_ID` and `NETLIFY_BLOBS_TOKEN` environment variables, then redeploy

### Teacher dashboard shows no submissions
1. Check browser console for errors
2. Verify environment variables are set
3. Check Netlify function logs

### AI grading not working
1. Verify `ANTHROPIC_API_KEY` is set correctly
2. Check the API key has credits
3. Look at Netlify function logs for errors

### Questions showing wrong options after refresh
- This is handled automatically by the template
- If issues persist, clear browser cache

## 📄 License

MIT License - Use freely for educational purposes.

---

**Need help?** Check Netlify's documentation or raise an issue in the repository.
