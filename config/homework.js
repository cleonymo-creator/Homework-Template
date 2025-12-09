window.HOMEWORK_CONFIG = {
  // Basic Information
  title: "The World of William Shakespeare",
  subject: "English Literature",
  yearGroup: "Year 9 / Grade 8",
  instructions: "Complete this homework to test your knowledge of the Bard's life, plays, and poetic style. You need 70% to pass.",
  
  // Settings
  passThreshold: 70,
  teacherPassword: "bard1616",
  
  // Questions Array
  questions: [
    {
      id: 1,
      type: "multiple-choice",
      question: "In which English town was William Shakespeare born and buried?",
      options: ["London", "Stratford-upon-Avon", "Oxford", "Canterbury"],
      correctAnswer: 1,
      explanation: "Shakespeare was born in Stratford-upon-Avon in 1564 and returned there later in life.",
      points: 5,
      supplementary: {
        type: "true-false",
        question: "Shakespeare was born in the 16th Century.",
        correctAnswer: true,
        explanation: "He was born in 1564, which is in the 16th century."
      }
    },
    {
      id: 2,
      type: "fill-blanks",
      question: "Complete the description of Shakespeare's theatre:",
      template: "Shakespeare's most famous plays were performed at the {{blank1}} Theatre. The poorer audience members, known as {{blank2}}, stood in the pit to watch the plays for a penny.",
      blanks: {
        blank1: { 
          answer: "Globe", 
          acceptAlternatives: ["The Globe"] 
        },
        blank2: { 
          answer: "groundlings", 
          acceptAlternatives: ["peasant", "commoners"] 
        }
      },
      explanation: "The Globe Theatre was a circular, open-air venue. 'Groundlings' stood on the ground to watch.",
      points: 10,
      supplementary: {
        type: "true-false",
        question: "The original Globe Theatre had a roof over the entire structure.",
        correctAnswer: false,
        explanation: "It was an open-air amphitheatre; only the seating galleries and stage were covered."
      }
    },
    {
      id: 3,
      type: "categorise",
      question: "Sort these famous plays into their correct genres:",
      categories: ["Tragedy", "Comedy", "History"],
      items: [
        { text: "Romeo and Juliet", correctCategory: 0 },
        { text: "A Midsummer Night's Dream", correctCategory: 1 },
        { text: "Henry V", correctCategory: 2 },
        { text: "Macbeth", correctCategory: 0 },
        { text: "Twelfth Night", correctCategory: 1 },
        { text: "Richard III", correctCategory: 2 }
      ],
      explanation: "Tragedies end in death/sorrow, Comedies usually end in marriage, and Histories depict English kings.",
      points: 15,
      supplementary: {
        type: "multiple-choice",
        question: "Which of these is a key feature of a Shakespearean Comedy?",
        options: ["Death of the main character", "Marriage and mistaken identities", "War and politics", "Ghosts and witches"],
        correctAnswer: 1,
        explanation: "Comedies often feature confusion, disguise, and end with a wedding."
      }
    },
    {
      id: 4,
      type: "matching",
      question: "Match the famous villain to the play they appear in:",
      leftItems: ["Iago", "Shylock", "Lady Macbeth", "Claudius"],
      rightItems: ["Othello", "The Merchant of Venice", "Macbeth", "Hamlet"],
      correctPairs: {
        0: 0,
        1: 1,
        2: 2,
        3: 3
      },
      explanation: "Iago manipulates Othello, Shylock demands a pound of flesh, Lady Macbeth urges her husband to kill, and Claudius kills Hamlet's father.",
      points: 10,
      supplementary: {
        type: "multiple-choice",
        question: "Who is the primary villain in 'Romeo and Juliet'?",
        options: ["Tybalt", "There is no single villain", "The Prince", "Friar Laurence"],
        correctAnswer: 1,
        explanation: "While Tybalt is an antagonist, the play is driven by fate and the ancient feud, rather than a single villain."
      }
    },
    {
      id: 5,
      type: "cloze-dropdown",
      question: "Select the correct missing words from these famous quotes:",
      template: "'To be, or not to be: that is the {{blank1}}.' (Hamlet) \n 'All the world's a {{blank2}}.' (As You Like It)",
      blanks: {
        blank1: {
          options: ["answer", "question", "problem", "reason"],
          correctIndex: 1
        },
        blank2: {
          options: ["stage", "cage", "dream", "game"],
          correctIndex: 0
        }
      },
      explanation: "These are two of Shakespeare's most quoted metaphors concerning existence and life.",
      points: 10,
      supplementary: {
        type: "true-false",
        question: "The line 'Wherefore art thou Romeo?' means 'Where are you Romeo?'",
        correctAnswer: false,
        explanation: "'Wherefore' actually means 'Why'. She is asking 'Why are you a Montague?'"
      }
    },
    {
      id: 6,
      type: "ordering",
      question: "Arrange the 'Seven Ages of Man' (from As You Like It) in the correct chronological order:",
      items: [
        "The Justice (Judge)",
        "The Infant",
        "The Soldier",
        "The Schoolboy"
      ],
      correctOrder: [1, 3, 2, 0], // Infant -> Schoolboy -> Soldier -> Justice
      explanation: "The speech outlines life from birth (Infant) to childhood (Schoolboy), young adulthood (Soldier), and middle age (Justice).",
      points: 10,
      supplementary: {
        type: "multiple-choice",
        question: "What is the very last stage mentioned in the 'Seven Ages of Man' speech?",
        options: ["Second childishness / Oblivion", "The Grandfather", "The King", "The Ghost"],
        correctAnswer: 0,
        explanation: "The speech ends with 'second childishness and mere oblivion, sans teeth, sans eyes, sans taste, sans everything.'"
      }
    },
    {
      id: 7,
      type: "multiple-response",
      question: "Which of the following are characteristics of Iambic Pentameter? (Select ALL that apply)",
      options: [
        "It mimics the rhythm of a heartbeat (da-DUM)",
        "It always rhymes",
        "It has 10 syllables per line",
        "It is only used for insults"
      ],
      correctAnswers: [0, 2],
      partialCredit: true,
      explanation: "Iambic pentameter consists of 5 iambs (10 syllables) and sounds like a heartbeat. It does not always rhyme (blank verse).",
      points: 10,
      supplementary: {
        type: "multiple-choice",
        question: "What is 'Blank Verse'?",
        options: ["Poetry without words", "Unrhymed iambic pentameter", "Rhyming couplets", "Prose"],
        correctAnswer: 1,
        explanation: "Blank verse uses the meter (rhythm) but does not use rhyme at the end of lines."
      }
    },
    {
      id: 8,
      type: "true-false",
      question: "In Shakespeare's time, female roles were played by women.",
      correctAnswer: false,
      explanation: "Acting was not considered a respectable profession for women; young boys played the female roles.",
      points: 5,
      supplementary: {
        type: "true-false",
        question: "Queen Elizabeth I was a patron of the arts and enjoyed the theatre.",
        correctAnswer: true,
        explanation: "The Queen was a major supporter of the theatre, protecting it from critics."
      }
    },
    {
      id: 9,
      type: "multiple-choice",
      question: "What is a 'Soliloquy'?",
      options: [
        "A fight scene between two characters",
        "A character speaking their thoughts aloud while alone on stage",
        "A conversation between a king and a fool",
        "The final scene of a play"
      ],
      correctAnswer: 1,
      explanation: "A soliloquy allows the audience to hear a character's inner thoughts and motivations.",
      points: 5,
      supplementary: {
        type: "true-false",
        question: "Other characters on stage can usually hear a soliloquy.",
        correctAnswer: false,
        explanation: "By definition, a soliloquy is spoken when the character is alone or thinks they are alone."
      }
    },
    {
      id: 10,
      type: "free-text",
      question: "Explain the concept of a 'Tragic Flaw' (Hamartia) and give one example from a Shakespeare play.",
      correctAnswer: "AI Grading Points: Mention that it is a personality trait that leads to the hero's downfall. Examples: Macbeth (Ambition), Othello (Jealousy), Hamlet (Indecision/Inaction), Romeo (Impulsiveness).",
      explanation: "A tragic flaw is a defect in the protagonist's character that ultimately brings about their ruin.",
      points: 15,
      supplementary: {
        type: "multiple-choice",
        question: "What was Macbeth's tragic flaw?",
        options: ["Greed", "Ambition", "Laziness", "Cowardice"],
        correctAnswer: 1,
        explanation: "Macbeth's 'vaulting ambition' led him to murder the King and destroy himself."
      }
    }
  ]
};