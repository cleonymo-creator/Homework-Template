// ============================================
// HOMEWORK CONFIGURATION
// ============================================
// This is the ONLY file you need to edit to create your homework!
// The AI will generate this file based on your topic and requirements.
// ============================================

window.HOMEWORK_CONFIG = {
  // Basic Information
  title: "Sample Homework - All Question Types",
  subject: "General Knowledge",
  yearGroup: "Year 8",
  
  // Instructions shown to students
  instructions: "This sample homework demonstrates all available question types. Read each question carefully and provide thoughtful answers.",
  
  // Pass threshold (percentage)
  passThreshold: 70,
  
  // Teacher dashboard password
  teacherPassword: "teacher123",
  
  // ============================================
  // QUESTIONS
  // ============================================
  // Available question types:
  // - "multiple-choice"     : Select one correct answer
  // - "true-false"          : True or False
  // - "free-text"           : Written answer (AI graded)
  // - "ordering"            : Arrange items in correct order
  // - "matching"            : Match items from two columns
  // - "fill-blanks"         : Fill in missing words from word bank
  // - "categorise"          : Sort items into categories
  // - "multiple-response"   : Select ALL correct answers
  // - "cloze-dropdown"      : Select from dropdowns in passage
  // ============================================
  
  questions: [
    // ==========================================
    // 1. MULTIPLE CHOICE
    // ==========================================
    {
      id: 1,
      type: "multiple-choice",
      question: "What is the capital city of France?",
      options: [
        "London",
        "Paris",
        "Berlin",
        "Madrid"
      ],
      correctAnswer: 1,
      explanation: "Paris is the capital and largest city of France, known for the Eiffel Tower and its rich cultural history.",
      points: 5,
      
      supplementary: {
        type: "true-false",
        question: "The Eiffel Tower is located in Paris.",
        correctAnswer: true,
        explanation: "The Eiffel Tower was built in 1889 and is one of the most recognisable landmarks in Paris."
      }
    },
    
    // ==========================================
    // 2. TRUE/FALSE
    // ==========================================
    {
      id: 2,
      type: "true-false",
      question: "Water boils at 100 degrees Celsius at sea level.",
      correctAnswer: true,
      explanation: "At standard atmospheric pressure (sea level), pure water boils at exactly 100°C (212°F).",
      points: 5,
      
      supplementary: {
        type: "multiple-choice",
        question: "At what temperature does water freeze?",
        options: ["0°C", "10°C", "-10°C", "32°C"],
        correctAnswer: 0,
        explanation: "Water freezes at 0°C (32°F) at standard atmospheric pressure."
      }
    },
    
    // ==========================================
    // 3. ORDERING
    // ==========================================
    {
      id: 3,
      type: "ordering",
      question: "Arrange these planets in order from closest to furthest from the Sun:",
      items: [
        "Earth",
        "Mars",
        "Mercury",
        "Venus"
      ],
      correctOrder: [2, 3, 0, 1],
      explanation: "The order from the Sun is: Mercury, Venus, Earth, Mars. These are the four inner rocky planets.",
      points: 10,
      
      supplementary: {
        type: "true-false",
        question: "Jupiter is closer to the Sun than Mars.",
        correctAnswer: false,
        explanation: "Mars is the 4th planet from the Sun, while Jupiter is the 5th. The asteroid belt lies between them."
      }
    },
    
    // ==========================================
    // 4. MATCHING
    // ==========================================
    {
      id: 4,
      type: "matching",
      question: "Match each country to its capital city:",
      leftItems: ["Japan", "Australia", "Brazil", "Egypt"],
      rightItems: ["Canberra", "Tokyo", "Cairo", "Brasília"],
      correctPairs: { 
        0: 1,
        1: 0,
        2: 3,
        3: 2
      },
      explanation: "Capital cities are often different from the largest or most famous cities in a country.",
      points: 10,
      
      supplementary: {
        type: "multiple-choice",
        question: "Which is the largest city in Australia (not the capital)?",
        options: ["Melbourne", "Sydney", "Brisbane", "Perth"],
        correctAnswer: 1,
        explanation: "Sydney is Australia's largest city by population, but Canberra is the capital."
      }
    },
    
    // ==========================================
    // 5. FILL IN THE BLANKS (with word bank)
    // ==========================================
    {
      id: 5,
      type: "fill-blanks",
      question: "Complete this passage about the water cycle:",
      template: "Water from oceans and lakes {{blank1}} to form clouds. When clouds become heavy, {{blank2}} falls as rain or snow. Water then flows through {{blank3}} back to the ocean, completing the {{blank4}}.",
      blanks: {
        blank1: { answer: "evaporates", acceptAlternatives: ["evaporate"] },
        blank2: { answer: "precipitation", acceptAlternatives: ["water", "rain"] },
        blank3: { answer: "rivers", acceptAlternatives: ["streams", "waterways"] },
        blank4: { answer: "cycle", acceptAlternatives: ["water cycle", "process"] }
      },
      explanation: "The water cycle (evaporation, condensation, precipitation, collection) is essential for distributing water around our planet.",
      points: 10,
      
      supplementary: {
        type: "true-false",
        question: "Evaporation only happens from oceans.",
        correctAnswer: false,
        explanation: "Evaporation occurs from any body of water including lakes, rivers, puddles, and even wet surfaces."
      }
    },
    
    // ==========================================
    // 6. CATEGORISATION
    // ==========================================
    {
      id: 6,
      type: "categorise",
      question: "Sort these animals into the correct categories:",
      categories: ["Mammals", "Reptiles", "Birds"],
      items: [
        { text: "Eagle", correctCategory: 2 },
        { text: "Crocodile", correctCategory: 1 },
        { text: "Dolphin", correctCategory: 0 },
        { text: "Snake", correctCategory: 1 },
        { text: "Penguin", correctCategory: 2 },
        { text: "Whale", correctCategory: 0 }
      ],
      explanation: "Mammals are warm-blooded and nurse their young. Reptiles are cold-blooded with scales. Birds have feathers and most can fly.",
      points: 15,
      
      supplementary: {
        type: "multiple-choice",
        question: "What makes dolphins mammals rather than fish?",
        options: [
          "They live in water",
          "They breathe air and nurse their young",
          "They have fins",
          "They eat fish"
        ],
        correctAnswer: 1,
        explanation: "Dolphins breathe air through a blowhole, give live birth, and nurse their young with milk - all mammal characteristics."
      }
    },
    
    // ==========================================
    // 7. MULTIPLE RESPONSE (Select ALL that apply)
    // ==========================================
    {
      id: 7,
      type: "multiple-response",
      question: "Which of these are primary colours? (Select ALL that apply)",
      options: [
        "Red",
        "Green",
        "Blue",
        "Yellow",
        "Orange",
        "Purple"
      ],
      correctAnswers: [0, 2, 3],
      partialCredit: true,
      explanation: "In traditional colour theory (paints/pigments), the primary colours are red, blue, and yellow. They cannot be made by mixing other colours.",
      points: 10,
      
      supplementary: {
        type: "true-false",
        question: "Orange is made by mixing red and yellow.",
        correctAnswer: true,
        explanation: "Orange is a secondary colour created by mixing the primary colours red and yellow."
      }
    },
    
    // ==========================================
    // 8. CLOZE DROPDOWN
    // ==========================================
    {
      id: 8,
      type: "cloze-dropdown",
      question: "Complete this sentence about photosynthesis:",
      template: "Plants use {{blank1}} from the sun and {{blank2}} from the air to make {{blank3}} through a process called photosynthesis.",
      blanks: {
        blank1: { 
          options: ["water", "light", "soil", "wind"], 
          correctIndex: 1 
        },
        blank2: { 
          options: ["oxygen", "nitrogen", "carbon dioxide", "hydrogen"], 
          correctIndex: 2 
        },
        blank3: { 
          options: ["oxygen", "glucose", "protein", "water"], 
          correctIndex: 1 
        }
      },
      explanation: "Photosynthesis: Light + Carbon Dioxide + Water = Glucose + Oxygen. Plants use this process to make their own food.",
      points: 10,
      
      supplementary: {
        type: "true-false",
        question: "Photosynthesis releases oxygen into the air.",
        correctAnswer: true,
        explanation: "Oxygen is a by-product of photosynthesis, which is why plants are essential for maintaining breathable air."
      }
    },
    
    // ==========================================
    // 9. FREE TEXT (AI Graded)
    // ==========================================
    {
      id: 9,
      type: "free-text",
      question: "Explain why recycling is important for the environment. Give at least two reasons.",
      correctAnswer: "Recycling is important because it reduces the amount of waste sent to landfills, conserves natural resources like trees and minerals, saves energy compared to making new products, reduces pollution from manufacturing, and helps protect wildlife habitats from destruction.",
      explanation: "Recycling is a key part of the reduce, reuse, recycle approach to environmental sustainability.",
      points: 15,
      
      supplementary: {
        type: "multiple-choice",
        question: "Which of these materials can typically be recycled?",
        options: [
          "Plastic bottles only",
          "Paper, glass, and metal",
          "Only cardboard",
          "Nothing can be recycled"
        ],
        correctAnswer: 1,
        explanation: "Many materials including paper, cardboard, glass bottles, metal cans, and certain plastics can be recycled."
      }
    }
  ]
};
