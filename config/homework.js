// ============================================
// HOMEWORK CONFIGURATION
// ============================================
// This is the ONLY file you need to edit to create your homework!
// The AI will generate this file based on your topic and requirements.
// ============================================

window.HOMEWORK_CONFIG = {
  // Basic Information
  title: "Sample Literature Homework",
  subject: "English Literature",
  yearGroup: "Year 9",
  
  // Instructions shown to students
  instructions: "Read each question carefully and provide thoughtful answers. For written responses, aim for at least 2-3 sentences that demonstrate your understanding.",
  
  // Pass threshold (percentage)
  passThreshold: 70,
  
  // Teacher dashboard password
  teacherPassword: "teacher123",
  
  // ============================================
  // QUESTIONS
  // ============================================
  // Each question MUST have a supplementary follow-up question
  // Question types: "multiple-choice", "true-false", "free-text"
  // ============================================
  
  questions: [
    {
      id: 1,
      type: "multiple-choice",
      question: "In Shakespeare's 'Romeo and Juliet', which two families are feuding?",
      options: [
        "The Montagues and the Capulets",
        "The Tudors and the Stuarts",
        "The Yorks and the Lancasters",
        "The Hatfields and the McCoys"
      ],
      correctAnswer: 0, // Index of correct option (0 = first option)
      explanation: "The Montagues and Capulets are the two noble families of Verona whose ancient grudge sets the tragic events of the play in motion.",
      points: 10,
      
      // Supplementary question (shown if main answer is wrong)
      supplementary: {
        type: "true-false",
        question: "Romeo is a member of the Capulet family.",
        correctAnswer: false,
        explanation: "Romeo is a Montague. Juliet is the one who belongs to the Capulet family. Their love is forbidden because of their families' feud."
      }
    },
    
    {
      id: 2,
      type: "true-false",
      question: "In 'To Kill a Mockingbird', Atticus Finch is a lawyer who defends Tom Robinson.",
      correctAnswer: true,
      explanation: "Atticus Finch, a white lawyer in the racially divided American South, takes on the case of Tom Robinson, a Black man falsely accused of assaulting a white woman.",
      points: 10,
      
      supplementary: {
        type: "multiple-choice",
        question: "Who is the narrator of 'To Kill a Mockingbird'?",
        options: [
          "Atticus Finch",
          "Tom Robinson",
          "Scout Finch",
          "Boo Radley"
        ],
        correctAnswer: 2,
        explanation: "The story is narrated by Scout Finch, Atticus's young daughter, who recounts events from her childhood perspective."
      }
    },
    
    {
      id: 3,
      type: "free-text",
      question: "Explain why the character of Atticus Finch in 'To Kill a Mockingbird' is considered a moral hero. What qualities does he demonstrate?",
      correctAnswer: "Atticus Finch demonstrates moral courage, integrity, empathy, and a commitment to justice. He defends Tom Robinson despite social pressure, teaches his children about equality and understanding others' perspectives, and maintains his principles even when facing hostility from the community.",
      explanation: "Atticus represents moral integrity in a prejudiced society. His famous advice to 'climb into someone's skin and walk around in it' shows his emphasis on empathy and understanding.",
      points: 20,
      
      supplementary: {
        type: "multiple-choice",
        question: "What lesson does Atticus teach Scout about understanding other people?",
        options: [
          "Never trust strangers",
          "Always agree with the majority",
          "Walk in someone else's shoes before judging them",
          "Avoid people who are different from you"
        ],
        correctAnswer: 2,
        explanation: "Atticus teaches Scout that you can never truly understand someone until you 'climb into their skin and walk around in it' - meaning you should try to see things from their perspective."
      }
    },
    
    {
      id: 4,
      type: "multiple-choice",
      question: "What is the primary theme explored in George Orwell's '1984'?",
      options: [
        "The beauty of nature",
        "Totalitarianism and surveillance",
        "Romantic love conquering all",
        "The importance of family"
      ],
      correctAnswer: 1,
      explanation: "'1984' is a dystopian novel that explores themes of totalitarian government control, mass surveillance, propaganda, and the manipulation of truth.",
      points: 10,
      
      supplementary: {
        type: "true-false",
        question: "In '1984', Big Brother is a friendly leader who helps citizens.",
        correctAnswer: false,
        explanation: "Big Brother is the mysterious leader of the totalitarian Party who represents oppressive government surveillance and control. The phrase 'Big Brother is watching you' has become synonymous with invasive surveillance."
      }
    },
    
    {
      id: 5,
      type: "free-text",
      question: "How does the setting of the moors in 'Wuthering Heights' reflect the emotions and relationships of the characters? Provide specific examples.",
      correctAnswer: "The wild, untamed Yorkshire moors mirror the passionate, turbulent nature of characters like Heathcliff and Catherine. The harsh landscape reflects their intense, sometimes destructive emotions. The isolation of the moors represents the characters' emotional isolation, while the storms often coincide with dramatic moments in the plot.",
      explanation: "Emily Brontë uses the landscape as pathetic fallacy - the external environment reflects internal emotional states of the characters.",
      points: 20,
      
      supplementary: {
        type: "multiple-choice",
        question: "What literary technique is used when the environment reflects characters' emotions?",
        options: [
          "Metaphor",
          "Pathetic fallacy",
          "Onomatopoeia",
          "Alliteration"
        ],
        correctAnswer: 1,
        explanation: "Pathetic fallacy is when nature or the environment is portrayed as reflecting human emotions. The stormy moors in Wuthering Heights are a classic example of this technique."
      }
    }
  ]
};
