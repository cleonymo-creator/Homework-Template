# HOMEWORK CONTENT GENERATOR PROMPT v5.0

## Your Task

Generate ONLY the configuration files (`homework.js` and optionally `theme.js`) for the pre-built homework template. Do NOT generate any HTML, React code, or Netlify functions - those are already provided in the template.

## Output Files Required

### 1. config/homework.js (REQUIRED)

Generate a JavaScript file with this EXACT structure:

```javascript
window.HOMEWORK_CONFIG = {
  // Basic Information
  title: "string - Homework title",
  subject: "string - Subject name",
  yearGroup: "string - e.g., Year 9, Grade 8",
  instructions: "string - Instructions shown to students",
  
  // Settings
  passThreshold: 70,  // Percentage needed to pass
  teacherPassword: "teacher123",  // Dashboard access
  
  // Questions Array (5-10 questions recommended)
  questions: [
    {
      id: 1,  // Unique number, sequential
      type: "multiple-choice",  // OR "true-false" OR "free-text"
      question: "The question text",
      
      // For multiple-choice only:
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: 0,  // Index of correct option (0-based)
      
      // For true-false only:
      // correctAnswer: true,  // or false
      
      // For free-text only:
      // correctAnswer: "Expected answer content for AI grading",
      
      explanation: "Explanation shown after answering",
      points: 10,  // Points for this question
      
      // REQUIRED: Supplementary follow-up question
      supplementary: {
        type: "multiple-choice",  // or "true-false"
        question: "Follow-up question if main answer was wrong",
        options: ["A", "B", "C", "D"],  // For MCQ only
        correctAnswer: 0,  // Index or boolean
        explanation: "Explanation for follow-up"
      }
    }
    // ... more questions
  ]
};
```

### 2. config/theme.js (OPTIONAL - only if custom styling requested)

```javascript
window.THEME_CONFIG = {
  colors: {
    primary: "#hex",      // Main brand color
    secondary: "#hex",    // Secondary accent
    accent: "#hex",       // Highlights
    background: "#hex",   // Page background
    surface: "#ffffff",   // Card backgrounds
    text: "#hex"          // Main text
  },
  fonts: {
    heading: "'Font Name', serif",
    body: "'Font Name', sans-serif"
  },
  heroImage: null,  // or "assets/images/filename.png"
  style: "modern"   // modern, playful, academic, minimal
};
```

## Question Guidelines

1. **Include 5-10 questions** for a typical homework
2. **Mix question types** - at least one of each type recommended
3. **Every question MUST have a supplementary follow-up**
4. **Free-text correctAnswer** should describe key points the AI will look for
5. **Explanations should be educational** - help students learn, not just say "correct/wrong"
6. **Points should reflect difficulty** - typically 5-20 points per question

## Supplementary Question Rules

- Supplementary questions appear when the main answer is wrong
- They should test related but simpler concepts
- Use multiple-choice or true-false only (not free-text)
- Maximum 2 attempts allowed automatically

## Theme Presets (for theme.js)

**Playful** (younger students):
- Colors: purples, pinks, yellows
- Font: Nunito
- Bright, engaging

**Academic** (formal):
- Colors: navy, gold, cream
- Font: Crimson Pro, Source Sans
- Professional, scholarly

**Nature** (science topics):
- Colors: greens, earth tones
- Font: Merriweather
- Calming, organic

**Modern** (default):
- Colors: blue, slate
- Font: Playfair Display, Source Sans
- Clean, contemporary

---

## Example Request & Response

**User Request:**
> Create a Year 7 History homework about Ancient Rome with 5 questions. Use a classical/academic theme.

**AI Response:**

```javascript
// config/homework.js
window.HOMEWORK_CONFIG = {
  title: "Ancient Rome: Rise of an Empire",
  subject: "History",
  yearGroup: "Year 7",
  instructions: "Answer all questions about Ancient Rome. For written answers, explain your thinking clearly with at least 2-3 sentences.",
  passThreshold: 70,
  teacherPassword: "teacher123",
  
  questions: [
    {
      id: 1,
      type: "multiple-choice",
      question: "According to legend, who founded the city of Rome?",
      options: [
        "Julius Caesar",
        "Romulus and Remus",
        "Augustus",
        "Nero"
      ],
      correctAnswer: 1,
      explanation: "According to Roman legend, twin brothers Romulus and Remus founded Rome in 753 BCE. Romulus killed Remus in a dispute and became the first king of Rome.",
      points: 10,
      supplementary: {
        type: "true-false",
        question: "Romulus and Remus were said to have been raised by a wolf.",
        correctAnswer: true,
        explanation: "The legend says the twins were abandoned as babies and nursed by a she-wolf before being found by a shepherd."
      }
    },
    // ... 4 more questions
  ]
};
```

```javascript
// config/theme.js
window.THEME_CONFIG = {
  colors: {
    primary: "#722F37",
    secondary: "#8B4513",
    accent: "#DAA520",
    background: "#FDF5E6",
    surface: "#FFFAF0",
    text: "#2F1810"
  },
  fonts: {
    heading: "'Cinzel', serif",
    body: "'Crimson Pro', serif"
  },
  style: "academic"
};
```

---

## User Request

[User describes: topic, year group/grade level, number of questions, and optional visual theme]
