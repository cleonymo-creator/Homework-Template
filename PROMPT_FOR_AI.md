# HOMEWORK CONTENT GENERATOR PROMPT v6.0

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
    // See QUESTION TYPES section below for all available types
  ]
};
```

---

## QUESTION TYPES

### 1. MULTIPLE CHOICE
Select one correct answer from options.

```javascript
{
  id: 1,
  type: "multiple-choice",
  question: "What is the capital of France?",
  options: ["London", "Paris", "Berlin", "Madrid"],
  correctAnswer: 1,  // Index (0-based)
  explanation: "Paris is the capital of France.",
  points: 5,
  supplementary: { /* see supplementary section */ }
}
```

### 2. TRUE/FALSE
Simple true or false question.

```javascript
{
  id: 2,
  type: "true-false",
  question: "The Earth is flat.",
  correctAnswer: false,
  explanation: "The Earth is roughly spherical.",
  points: 5,
  supplementary: { /* ... */ }
}
```

### 3. FREE TEXT (AI Graded)
Written answer graded by AI. Student must score 50%+ or retry.

```javascript
{
  id: 3,
  type: "free-text",
  question: "Explain why recycling is important.",
  correctAnswer: "Key points the AI should look for: reduces landfill waste, conserves resources, saves energy, reduces pollution.",
  explanation: "Recycling helps protect our environment.",
  points: 15,
  supplementary: { /* ... */ }
}
```

### 4. ORDERING
Arrange items in the correct sequence.

```javascript
{
  id: 4,
  type: "ordering",
  question: "Arrange these events in chronological order:",
  items: [
    "World War II ends",      // index 0
    "Moon landing",           // index 1
    "World War I begins",     // index 2
    "Berlin Wall falls"       // index 3
  ],
  correctOrder: [2, 0, 1, 3],  // WWI, WWII, Moon, Berlin Wall
  explanation: "WWI (1914), WWII ended (1945), Moon landing (1969), Berlin Wall (1989).",
  points: 10,
  supplementary: { /* ... */ }
}
```

### 5. MATCHING
Connect items from two columns.

```javascript
{
  id: 5,
  type: "matching",
  question: "Match each country to its capital:",
  leftItems: ["France", "Japan", "Egypt", "Brazil"],
  rightItems: ["Tokyo", "Paris", "Brasília", "Cairo"],
  correctPairs: {
    0: 1,  // France -> Paris
    1: 0,  // Japan -> Tokyo
    2: 3,  // Egypt -> Cairo
    3: 2   // Brazil -> Brasília
  },
  explanation: "Capital cities explanation.",
  points: 10,
  supplementary: { /* ... */ }
}
```

### 6. FILL IN THE BLANKS (Word Bank)
Complete passage using words from a bank.

```javascript
{
  id: 6,
  type: "fill-blanks",
  question: "Complete the passage about photosynthesis:",
  template: "Plants absorb {{blank1}} and {{blank2}} to produce {{blank3}}.",
  blanks: {
    blank1: { 
      answer: "sunlight", 
      acceptAlternatives: ["light", "solar energy"] 
    },
    blank2: { 
      answer: "carbon dioxide", 
      acceptAlternatives: ["CO2"] 
    },
    blank3: { 
      answer: "glucose", 
      acceptAlternatives: ["sugar", "food"] 
    }
  },
  explanation: "Photosynthesis converts light energy into chemical energy.",
  points: 10,
  supplementary: { /* ... */ }
}
```

### 7. CATEGORISATION
Sort items into categories (drag and drop).

```javascript
{
  id: 7,
  type: "categorise",
  question: "Sort these animals into categories:",
  categories: ["Mammals", "Birds", "Reptiles"],
  items: [
    { text: "Eagle", correctCategory: 1 },
    { text: "Snake", correctCategory: 2 },
    { text: "Whale", correctCategory: 0 },
    { text: "Penguin", correctCategory: 1 },
    { text: "Crocodile", correctCategory: 2 },
    { text: "Dolphin", correctCategory: 0 }
  ],
  explanation: "Mammals are warm-blooded, birds have feathers, reptiles are cold-blooded.",
  points: 12,
  supplementary: { /* ... */ }
}
```

### 8. MULTIPLE RESPONSE (Select ALL)
Select all correct answers (multiple can be correct).

```javascript
{
  id: 8,
  type: "multiple-response",
  question: "Which are prime numbers? Select ALL that apply.",
  options: ["2", "4", "7", "9", "11", "15"],
  correctAnswers: [0, 2, 4],  // Indices: 2, 7, 11
  partialCredit: true,
  explanation: "Prime numbers are only divisible by 1 and themselves.",
  points: 10,
  supplementary: { /* ... */ }
}
```

### 9. CLOZE DROPDOWN
Select answers from dropdown menus in a passage.

```javascript
{
  id: 9,
  type: "cloze-dropdown",
  question: "Complete the sentence:",
  template: "Water freezes at {{blank1}} degrees {{blank2}}.",
  blanks: {
    blank1: {
      options: ["0", "32", "100", "212"],
      correctIndex: 0
    },
    blank2: {
      options: ["Celsius", "Fahrenheit", "Kelvin"],
      correctIndex: 0
    }
  },
  explanation: "Water freezes at 0°C or 32°F.",
  points: 5,
  supplementary: { /* ... */ }
}
```

---

## SUPPLEMENTARY QUESTIONS

Every question MUST have a supplementary follow-up. It appears when the main answer is wrong/insufficient.

**Rules:**
- Use only `multiple-choice` or `true-false` types (not free-text)
- Should test simpler/related concept
- Students get maximum 2 attempts

```javascript
supplementary: {
  type: "true-false",  // or "multiple-choice"
  question: "The follow-up question text",
  correctAnswer: true,  // boolean for T/F, index for MCQ
  options: ["A", "B", "C", "D"],  // Only for multiple-choice
  explanation: "Explanation for the follow-up answer"
}
```

---

## 2. config/theme.js (OPTIONAL)

Only generate if custom styling is requested.

```javascript
window.THEME_CONFIG = {
  colors: {
    primary: "#1e3a5f",     // Main brand color
    secondary: "#3d7ea6",   // Secondary accent
    accent: "#c9a227",      // Highlights (gold works well)
    background: "#faf8f5",  // Page background
    surface: "#ffffff",     // Card backgrounds
    text: "#2c2416"         // Main text color
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Source Sans 3', sans-serif"
  },
  style: "modern"  // modern, playful, academic, minimal
};
```

### Theme Presets

**Playful** (younger students): bright purples/pinks/yellows, Nunito font
**Academic** (formal): navy/gold/cream, Crimson Pro font  
**Nature** (science): greens/earth tones, Merriweather font
**Modern** (default): blue/slate, clean contemporary

---

## Question Guidelines

1. **Include 5-10 questions** for typical homework
2. **Mix question types** for engagement - use at least 3 different types
3. **Every question MUST have a supplementary follow-up**
4. **Difficulty progression** - start easier, get harder
5. **Educational explanations** - help students learn
6. **Points reflect difficulty** - 5pts easy, 10pts medium, 15-20pts hard

---

## Example Request

> Create a Year 7 Science homework about the Solar System with 6 questions. Include ordering, matching, and categorisation questions. Use a space theme with dark colours.

---

## User Request

[User describes: topic, year group, number of questions, preferred question types, visual theme]
