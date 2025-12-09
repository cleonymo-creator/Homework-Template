// config/homework.js
window.HOMEWORK_CONFIG = {
  title: "A Christmas Carol: Stave 3 - The Second of the Three Spirits",
  subject: "English Literature",
  yearGroup: "GCSE (Years 10-11)",
  instructions: "Answer all questions about Stave 3 of A Christmas Carol by Charles Dickens. For written answers, use relevant quotations where possible and explain Dickens' methods and intentions. Consider the social and historical context of Victorian England throughout.",
  passThreshold: 60,
  teacherPassword: "teacher123",
  
  questions: [
    {
      id: 1,
      type: "multiple-choice",
      question: "How does Dickens describe the Ghost of Christmas Present when Scrooge first sees him?",
      options: [
        "A pale, thin figure in grey robes",
        "A jolly Giant in a green robe bordered with white fur",
        "A skeletal figure holding a scythe",
        "A beautiful angel with golden wings"
      ],
      correctAnswer: 1,
      explanation: "The Ghost is described as a 'jolly Giant' wearing 'one simple green robe, or mantle, bordered with white fur.' The green represents nature, abundance, and the traditional colour of Christmas, while his generous appearance embodies the spirit of festive celebration and plenty.",
      points: 5,
      supplementary: {
        type: "true-false",
        question: "The Ghost of Christmas Present is associated with abundance and generosity.",
        correctAnswer: true,
        explanation: "The Ghost sits amongst a feast of food and holds a torch shaped like a cornucopia (horn of plenty), symbolising abundance and generosity."
      }
    },
    {
      id: 2,
      type: "multiple-choice",
      question: "What is piled around the Ghost of Christmas Present when Scrooge enters the transformed room?",
      options: [
        "Gold coins and jewels",
        "Heaps of festive food including turkeys, geese, and fruits",
        "Wrapped Christmas presents",
        "Snow and ice"
      ],
      correctAnswer: 1,
      explanation: "The room is transformed into a bower of 'turkeys, geese, game, poultry, brawn, great joints of meat, sucking-pigs, long wreaths of sausages, mince-pies, plum-puddings, barrels of oysters.' This excessive feast contrasts sharply with the poverty Dickens will later show, highlighting Victorian inequality.",
      points: 5,
      supplementary: {
        type: "true-false",
        question: "The abundance of food around the Ghost is meant to contrast with the poverty of families like the Cratchits.",
        correctAnswer: true,
        explanation: "Dickens deliberately juxtaposes scenes of plenty with scenes of want to highlight social inequality and encourage readers to share their wealth."
      }
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "What does the Ghost of Christmas Present sprinkle from his torch?",
      options: [
        "Gold dust",
        "Snow",
        "Incense from his torch to bless the dinners of the poor",
        "Holy water"
      ],
      correctAnswer: 2,
      explanation: "The Ghost sprinkles 'incense on their dinners from his torch' and particularly favours the poor. This suggests the true Christmas spirit involves blessing and uplifting those less fortunate, a key message of Dickens' social commentary.",
      points: 5,
      supplementary: {
        type: "multiple-choice",
        question: "Why does the Ghost pay special attention to blessing the food of poor families?",
        options: [
          "Because rich people don't celebrate Christmas",
          "Because the poor need the Christmas spirit most",
          "Because he dislikes wealthy people",
          "Because poor food tastes better"
        ],
        correctAnswer: 1,
        explanation: "The Ghost favours the poor because they have the greatest need of the Christmas spirit's blessings and comfort."
      }
    },
    {
      id: 4,
      type: "multiple-choice",
      question: "How many brothers does the Ghost of Christmas Present say he has had?",
      options: [
        "Over eighteen hundred",
        "Three",
        "Twelve",
        "One hundred"
      ],
      correctAnswer: 0,
      explanation: "The Ghost says he has 'more than eighteen hundred' brothers, representing each Christmas since the birth of Christ (the novel was published in 1843). This reminds readers that the Christmas spirit has existed for centuries and must continue to be renewed each year.",
      points: 5,
      supplementary: {
        type: "true-false",
        question: "The number of the Ghost's brothers relates to how many years have passed since Christ's birth.",
        correctAnswer: true,
        explanation: "With the novel set around 1843, over 1800 years had passed since Jesus's birth, meaning there had been over 1800 Christmas celebrations, each with its own 'spirit.'"
      }
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "What is the name of Bob Cratchit's wife?",
      options: [
        "Mary",
        "She is never named, only called 'Mrs Cratchit'",
        "Elizabeth",
        "Martha"
      ],
      correctAnswer: 1,
      explanation: "Mrs Cratchit is never given a first name in the novella. This may reflect Victorian conventions where married women were often identified only through their husband's name, though she is still presented as a strong, loving character who holds the family together.",
      points: 5,
      supplementary: {
        type: "true-false",
        question: "Martha is Bob Cratchit's wife.",
        correctAnswer: false,
        explanation: "Martha is the Cratchits' eldest daughter who works as a milliner's apprentice. Bob's wife is only ever referred to as 'Mrs Cratchit.'"
      }
    },
    {
      id: 6,
      type: "multiple-choice",
      question: "Why is Mrs Cratchit initially worried when the family gathers for Christmas dinner?",
      options: [
        "Because Scrooge hasn't given Bob a Christmas bonus",
        "Because Martha is late arriving home from work",
        "Because the goose is burnt",
        "Because Peter has torn his shirt"
      ],
      correctAnswer: 1,
      explanation: "Mrs Cratchit asks 'What has ever got your precious father then? And your brother, Tiny Tim! And Martha warn't as late last Christmas Day.' Martha then hides and reveals herself, showing the family's playful, loving nature despite their poverty.",
      points: 5,
      supplementary: {
        type: "true-false",
        question: "Martha works away from home as an apprentice.",
        correctAnswer: true,
        explanation: "Martha works as a milliner's apprentice and doesn't live at home, which is why her arrival at Christmas is so anticipated by the family."
      }
    },
    {
      id: 7,
      type: "multiple-choice",
      question: "What job does Martha Cratchit have?",
      options: [
        "Governess",
        "Apprentice at a milliner's",
        "Seamstress",
        "Housemaid"
      ],
      correctAnswer: 1,
      explanation: "Martha works at 'a milliner's' (a hat-maker's shop). Her long working hours ('she had to work late, and had a deal of walking to do') reflect the exploitation of workers in Victorian England, a key concern of Dickens.",
      points: 5,
      supplementary: {
        type: "multiple-choice",
        question: "What does a milliner make or sell?",
        options: [
          "Bread and cakes",
          "Hats",
          "Furniture",
          "Jewellery"
        ],
        correctAnswer: 1,
        explanation: "A milliner makes and sells hats, particularly women's hats. It was common work for young women in Victorian times."
      }
    },
    {
      id: 8,
      type: "multiple-choice",
      question: "What meat do the Cratchits have for Christmas dinner?",
      options: [
        "Turkey",
        "Beef",
        "Goose",
        "Ham"
      ],
      correctAnswer: 2,
      explanation: "The Cratchits have a goose for Christmas, which was a cheaper alternative to turkey and typical for working-class families. Despite its small size ('there never was such a goose'), the family celebrates it enthusiastically, showing their gratitude and love.",
      points: 5,
      supplementary: {
        type: "true-false",
        question: "The Cratchits have a turkey because Scrooge bought it for them.",
        correctAnswer: false,
        explanation: "In Stave 3, the Cratchits have a modest goose. Scrooge only sends them the prize turkey after his transformation in Stave 5."
      }
    },
    {
      id: 9,
      type: "free-text",
      question: "How does Dickens present the Cratchit family's Christmas dinner to highlight both their poverty and their happiness? Use quotations in your answer.",
      correctAnswer: "Strong answers should discuss: the small goose that is made to seem like a feast ('there never was such a goose'); Mrs Cratchit's anxiety about the pudding; the family's genuine joy and gratitude despite having little; the contrast between their meagre portions and the feast around the Ghost; specific quotations showing their love and appreciation; how Dickens uses this to critique Victorian class inequality while celebrating working-class warmth and family values.",
      explanation: "Dickens deliberately shows the Cratchits making the most of very little. Their 'small pudding for a large family' and goose that wouldn't be enough are presented through the lens of their gratitude and love. This serves Dickens' social message: the poor deserve better, yet they often show more Christmas spirit than the wealthy.",
      points: 15,
      supplementary: {
        type: "multiple-choice",
        question: "What is the main purpose of showing the Cratchits' modest but joyful Christmas?",
        options: [
          "To show that poor people are happier than rich people",
          "To highlight inequality while showing the moral worth of the poor",
          "To make readers feel sorry for poor people",
          "To show that food is not important at Christmas"
        ],
        correctAnswer: 1,
        explanation: "Dickens shows that despite poverty, the Cratchits possess more warmth and Christmas spirit than wealthy misers like Scrooge, while also highlighting the injustice of their situation."
      }
    },
    {
      id: 10,
      type: "multiple-choice",
      question: "What does Mrs Cratchit say about Scrooge when Bob proposes a toast to him?",
      options: [
        "She agrees he deserves their thanks",
        "She calls him 'an odious, stingy, hard, unfeeling man'",
        "She says nothing",
        "She wishes him a merry Christmas"
      ],
      correctAnswer: 1,
      explanation: "Mrs Cratchit angrily calls Scrooge 'an odious, stingy, hard, unfeeling man' and says she'll drink to his health 'for [Bob's] sake and the Day's, not for his.' Her honest reaction reveals the resentment the poor feel towards those who exploit them.",
      points: 5,
      supplementary: {
        type: "true-false",
        question: "Mrs Cratchit's criticism of Scrooge shows that the poor genuinely suffer because of his meanness.",
        correctAnswer: true,
        explanation: "Her anger is justified and reveals the real impact Scrooge's miserly behaviour has on working families. Bob's meagre wage ('fifteen bob a week') keeps them in poverty."
      }
    },
    {
      id: 11,
      type: "multiple-choice",
      question: "What physical disability does Tiny Tim have?",
      options: [
        "He is blind",
        "He cannot use his legs properly and needs a crutch",
        "He cannot speak",
        "He has lost an arm"
      ],
      correctAnswer: 1,
      explanation: "Tiny Tim uses a crutch and has 'his limbs supported by an iron frame.' Dickens never specifies his illness, but his condition represents how poverty prevents families from accessing proper medical care. His vulnerability makes him a powerful symbol of innocence at risk.",
      points: 5,
      supplementary: {
        type: "true-false",
        question: "Tiny Tim's illness could likely be cured with proper medical treatment that the family cannot afford.",
        correctAnswer: true,
        explanation: "The Ghost's warning that Tim will die 'if these shadows remain unaltered' implies that better conditions and medical care could save him—care the Cratchits cannot afford on Bob's wages."
      }
    },
    {
      id: 12,
      type: "multiple-choice",
      question: "What does Tiny Tim say he hopes people think when they see him in church?",
      options: [
        "That he is very brave",
        "That it might be pleasant to remember who made lame beggars walk and blind men see",
        "That they should give money to the poor",
        "That Christmas is a time for miracles"
      ],
      correctAnswer: 1,
      explanation: "Tim hopes people will remember 'upon Christmas Day, who made lame beggars walk, and blind men see.' This Biblical reference connects Tim to Christ and positions him as a morally pure figure. His thoughts are not of himself but of inspiring Christian charity in others.",
      points: 5,
      supplementary: {
        type: "multiple-choice",
        question: "Tiny Tim's reference to healing 'lame beggars' and 'blind men' alludes to which figure?",
        options: [
          "Father Christmas",
          "Jesus Christ",
          "The Ghost of Christmas Present",
          "The Queen"
        ],
        correctAnswer: 1,
        explanation: "Tim refers to the miracles of Jesus, who healed the sick and disabled. This positions Tim as a Christ-like innocent and emphasises Christian charity."
      }
    },
    {
      id: 13,
      type: "free-text",
      question: "How does Dickens present Tiny Tim as a symbol to evoke sympathy and promote social change? Consider his characterisation and the reader's response.",
      correctAnswer: "Strong answers should discuss: Tim as an innocent child victim of poverty; his Christ-like patience and goodness despite suffering; his physical vulnerability (crutch, iron frame); his selfless thoughts about inspiring others; his famous phrase 'God bless us, every one'; how his potential death serves as emotional blackmail to wealthy readers; how he represents all poor children suffering due to Victorian inequality; Dickens' use of sentimentality as a tool for social reform.",
      explanation: "Tiny Tim is deliberately created to be as sympathetic as possible: innocent, patient, uncomplaining, and spiritually pure. Dickens uses him to personify the suffering of poor children and make it impossible for readers to ignore. His potential death is designed to shock middle-class readers into charitable action.",
      points: 15,
      supplementary: {
        type: "true-false",
        question: "Dickens creates Tiny Tim primarily to make wealthy readers feel guilty about poverty.",
        correctAnswer: true,
        explanation: "Tim is deliberately constructed to evoke maximum sympathy. His potential death if 'shadows remain unaltered' directly challenges readers to change society through charity and reform."
      }
    },
    {
      id: 14,
      type: "multiple-choice",
      question: "What does the Ghost predict will happen to Tiny Tim if 'these shadows remain unaltered'?",
      options: [
        "He will remain ill forever",
        "He will see an empty chair and a crutch without an owner",
        "He will never walk again",
        "The family will become homeless"
      ],
      correctAnswer: 1,
      explanation: "The Ghost warns Scrooge: 'I see a vacant seat... and a crutch without an owner, carefully preserved.' This powerful image foreshadows Tim's death and directly challenges Scrooge—and the reader—to change the conditions that doom poor children to die.",
      points: 5,
      supplementary: {
        type: "true-false",
        question: "The Ghost's warning suggests that Tiny Tim's fate can be changed.",
        correctAnswer: true,
        explanation: "The phrase 'if these shadows remain unaltered' is crucial—it implies Tim's death is not inevitable. If society changes (through people like Scrooge becoming generous), Tim can be saved."
      }
    },
    {
      id: 15,
      type: "multiple-choice",
      question: "What are Scrooge's own words that the Ghost quotes back to him regarding the poor?",
      options: [
        "'Bah! Humbug!'",
        "'Are there no prisons? Are there no workhouses?'",
        "'I can't afford to make idle people merry'",
        "'Let them die and decrease the surplus population'"
      ],
      correctAnswer: 3,
      explanation: "The Ghost uses Scrooge's callous words from Stave 1 ('decrease the surplus population') against him when discussing Tim's fate. This forces Scrooge to confront the real human cost of his ideology and feel shame at his former attitude.",
      points: 5,
      supplementary: {
        type: "multiple-choice",
        question: "Why does the Ghost quote Scrooge's own words back to him?",
        options: [
          "To remind Scrooge of what he said",
          "To make Scrooge feel the shame and cruelty of his own words",
          "Because ghosts can only speak using others' words",
          "To test Scrooge's memory"
        ],
        correctAnswer: 1,
        explanation: "By quoting Scrooge's dismissive words about 'surplus population' while showing him Tiny Tim, the Ghost forces Scrooge to feel the cruelty and shame of applying such cold economics to an innocent child."
      }
    },
    {
      id: 16,
      type: "multiple-choice",
      question: "Who is Fred in relation to Scrooge?",
      options: [
        "His brother",
        "His nephew",
        "His former business partner",
        "His godson"
      ],
      correctAnswer: 1,
      explanation: "Fred is Scrooge's nephew, the son of Scrooge's beloved sister Fan (shown in Stave 2). Fred represents the family connection Scrooge has rejected and the joy he could have if he embraced human relationships over money.",
      points: 5,
      supplementary: {
        type: "true-false",
        question: "Fred is the son of Scrooge's sister who died.",
        correctAnswer: true,
        explanation: "Fred is the son of Fan, Scrooge's sister who died giving birth to him. Scrooge's coldness towards Fred is particularly cruel given this family connection."
      }
    },
    {
      id: 17,
      type: "multiple-choice",
      question: "How does Fred respond when his guests mock Scrooge at the Christmas party?",
      options: [
        "He joins in the mockery enthusiastically",
        "He becomes angry and asks them to stop",
        "He defends Scrooge while acknowledging his faults, expressing pity rather than anger",
        "He ignores the conversation entirely"
      ],
      correctAnswer: 2,
      explanation: "Fred defends Scrooge, saying 'I am sorry for him; I couldn't be angry with him if I tried.' He expresses pity rather than resentment, showing Christian forgiveness and maintaining his invitation year after year despite rejection.",
      points: 5,
      supplementary: {
        type: "true-false",
        question: "Fred continues to invite Scrooge to Christmas dinner every year despite always being refused.",
        correctAnswer: true,
        explanation: "Fred's persistence in inviting Scrooge shows unconditional family love and embodies the forgiving Christmas spirit Dickens promotes."
      }
    },
    {
      id: 18,
      type: "multiple-choice",
      question: "What game does Fred's party play that Scrooge becomes engaged in watching?",
      options: [
        "Charades",
        "Yes and No (Twenty Questions)",
        "Blind Man's Buff",
        "Musical chairs"
      ],
      correctAnswer: 1,
      explanation: "The party plays 'Yes and No' where Fred thinks of something and guests ask questions. The answer is Scrooge himself—'a savage animal... that growled and grunted sometimes.' Despite being mocked, Scrooge becomes caught up in the fun, showing his dormant capacity for joy.",
      points: 5,
      supplementary: {
        type: "multiple-choice",
        question: "What is the answer to the game that the party guesses?",
        options: [
          "A bear",
          "Scrooge himself",
          "Christmas",
          "Money"
        ],
        correctAnswer: 1,
        explanation: "Fred thinks of 'Uncle Scrooge,' and the guests guess him through clues like 'rather disagreeable' and 'savage animal.' This shows how Scrooge is perceived but also that Fred thinks of him fondly enough to include him in the game."
      }
    },
    {
      id: 19,
      type: "free-text",
      question: "How does Dickens use Fred's Christmas party to contrast with Scrooge's lifestyle and values? What is the significance of this scene?",
      correctAnswer: "Strong answers should discuss: the warmth, laughter and joy at Fred's party versus Scrooge's cold isolation; Fred's modest home but rich happiness versus Scrooge's wealth but emotional poverty; the games, music, and company showing what Scrooge is missing; Fred's generosity in still toasting Scrooge despite rejection; Scrooge beginning to enjoy the party showing his capacity for change; the scene demonstrates that happiness comes from human connection not money; Dickens' message that a loving poor household is richer than a wealthy lonely one.",
      explanation: "Fred's party shows everything Scrooge has sacrificed for money: love, laughter, family, and belonging. Despite being less wealthy than his uncle, Fred is far richer in happiness. Scrooge's growing engagement with the party shows his latent capacity for joy awakening.",
      points: 15,
      supplementary: {
        type: "true-false",
        question: "Fred's party shows that happiness and wealth are not connected.",
        correctAnswer: true,
        explanation: "Fred has less money than Scrooge but far more joy. This reinforces Dickens' message that human connection and generosity, not wealth, create happiness."
      }
    },
    {
      id: 20,
      type: "multiple-choice",
      question: "What toast does Fred make that shows his continued goodwill towards Scrooge?",
      options: [
        "'To absent family!'",
        "'A Merry Christmas to the old man, whatever he is!'",
        "'To my uncle Scrooge!'",
        "'To those who cannot be with us!'"
      ],
      correctAnswer: 2,
      explanation: "Fred toasts 'A Merry Christmas to the old man, whatever he is!' Despite Scrooge's rejection, Fred maintains goodwill and wishes him well. His persistence in offering love regardless of response embodies the unconditional spirit of Christmas that Dickens promotes.",
      points: 5,
      supplementary: {
        type: "true-false",
        question: "Fred's toast to Scrooge shows he has given up on his uncle.",
        correctAnswer: false,
        explanation: "The toast shows the opposite—Fred continues to include Scrooge in his celebrations and wishes him well despite years of rejection."
      }
    },
    {
      id: 21,
      type: "multiple-choice",
      question: "Where does the Ghost take Scrooge to show Christmas being celebrated in harsh conditions?",
      options: [
        "A prison and a workhouse",
        "A moor, a lighthouse, and a ship at sea",
        "A hospital and an orphanage",
        "A coal mine and a factory"
      ],
      correctAnswer: 1,
      explanation: "The Ghost shows Christmas celebrated on 'a bleak and desert moor,' in 'a solitary lighthouse,' and on 'a ship.' Even in the harshest, most isolated places, people celebrate Christmas. This emphasises the universal nature of the Christmas spirit and human need for connection.",
      points: 5,
      supplementary: {
        type: "true-false",
        question: "The lighthouse keepers and sailors still celebrate Christmas despite their difficult circumstances.",
        correctAnswer: true,
        explanation: "Even in extreme isolation and danger, people celebrate Christmas, showing that the Christmas spirit transcends circumstances and that human connection is a universal need."
      }
    },
    {
      id: 22,
      type: "multiple-choice",
      question: "How does the Ghost of Christmas Present change as the night goes on?",
      options: [
        "He grows younger",
        "He becomes invisible",
        "He grows older",
        "He becomes angry"
      ],
      correctAnswer: 2,
      explanation: "The Ghost 'grew older, clearly older' as the night progresses. His life spans only one day—Christmas Day itself. This symbolises how each Christmas is fleeting and precious, and that the opportunity to embrace its spirit must be seized before it passes.",
      points: 5,
      supplementary: {
        type: "multiple-choice",
        question: "What does the Ghost's ageing during the night represent?",
        options: [
          "Ghosts always age quickly",
          "Christmas Day passing and the fleeting nature of opportunity",
          "Scrooge's redemption taking too long",
          "The coming of winter"
        ],
        correctAnswer: 1,
        explanation: "The Ghost lives only for Christmas Day, ageing and dying as the day passes. This emphasises that opportunities for generosity and joy must be seized before they're gone."
      }
    },
    {
      id: 23,
      type: "multiple-choice",
      question: "What are the names of the two children hidden beneath the Ghost's robe?",
      options: [
        "Poverty and Disease",
        "Ignorance and Want",
        "Fear and Despair",
        "Sin and Suffering"
      ],
      correctAnswer: 1,
      explanation: "The children are called Ignorance (the boy) and Want (the girl). They are allegorical figures representing the twin social evils Dickens believed plagued Victorian society: lack of education and poverty. They are 'yellow, meagre, ragged, scowling, wolfish' and belong to Man, not just to one family.",
      points: 5,
      supplementary: {
        type: "true-false",
        question: "Ignorance and Want are children of the Ghost.",
        correctAnswer: false,
        explanation: "The Ghost says they are 'Man's' children—the responsibility of all humanity and society. They represent social problems that belong to everyone to solve."
      }
    },
    {
      id: 24,
      type: "free-text",
      question: "Analyse Dickens' use of the allegorical figures Ignorance and Want. What message is he conveying to his Victorian audience, and why is Ignorance the more dangerous of the two?",
      correctAnswer: "Strong answers should discuss: Ignorance and Want as personifications of social problems (lack of education and poverty); their shocking, horrifying appearance showing neglect ('yellow, meagre, ragged, scowling, wolfish'); they belong to 'Man' showing collective responsibility; the Ghost's warning that Ignorance is more dangerous because without education, people cannot escape poverty or understand their situation; Dickens' advocacy for education reform; the Ragged Schools movement Dickens supported; the warning of 'Doom' written on Ignorance's brow suggesting revolution or social collapse; Dickens' direct challenge to middle-class readers to address these issues.",
      explanation: "Ignorance and Want are Dickens' most direct social commentary in the novella. By making Ignorance 'most of all' dangerous, he argues that education is the key to solving poverty. Without knowledge, the poor cannot better their circumstances and society risks catastrophe ('Doom').",
      points: 15,
      supplementary: {
        type: "multiple-choice",
        question: "Why does the Ghost say 'most of all beware this boy' about Ignorance?",
        options: [
          "Because boys are more dangerous than girls",
          "Because ignorance prevents people from escaping poverty and threatens society",
          "Because the boy is older",
          "Because education was free in Victorian England"
        ],
        correctAnswer: 1,
        explanation: "Dickens believed ignorance perpetuated poverty and could lead to social unrest. The word 'Doom' on the boy's brow suggests that widespread ignorance threatens society with revolution or collapse."
      }
    },
    {
      id: 25,
      type: "multiple-choice",
      question: "When Scrooge asks if Ignorance and Want have 'no refuge or resource,' how does the Ghost respond?",
      options: [
        "He says there is nothing that can be done",
        "He quotes Scrooge's own words: 'Are there no prisons? Are there no workhouses?'",
        "He tells Scrooge to help them himself",
        "He says the government will help them"
      ],
      correctAnswer: 1,
      explanation: "The Ghost bitterly quotes Scrooge's own dismissive words from Stave 1. This forces Scrooge—and the reader—to see how cruel and inadequate such 'solutions' are when applied to suffering children. Prisons and workhouses are exposed as morally bankrupt responses to poverty.",
      points: 5,
      supplementary: {
        type: "true-false",
        question: "The Ghost's response shows that Dickens believed workhouses were adequate solutions to poverty.",
        correctAnswer: false,
        explanation: "The Ghost's bitter, sarcastic use of Scrooge's words shows Dickens' contempt for workhouses as solutions. They addressed symptoms, not causes, and dehumanised the poor."
      }
    },
    {
      id: 26,
      type: "true-false",
      question: "The Ghost of Christmas Present has a lifespan of more than twenty-four hours.",
      correctAnswer: false,
      explanation: "The Ghost lives only for Christmas Day. He tells Scrooge 'My life upon this globe is very brief' and ends 'tonight at midnight.' This emphasises the fleeting nature of Christmas and the urgency of embracing its spirit before it passes.",
      points: 5,
      supplementary: {
        type: "multiple-choice",
        question: "What does the Ghost's short lifespan symbolise?",
        options: [
          "That ghosts cannot live long",
          "That Christmas and its opportunities are fleeting",
          "That Scrooge is running out of time",
          "That there will be no more Christmases"
        ],
        correctAnswer: 1,
        explanation: "The Ghost's brief existence symbolises how each Christmas, and each opportunity for generosity and change, passes quickly and must be seized."
      }
    },
    {
      id: 27,
      type: "multiple-choice",
      question: "What item does the Ghost of Christmas Present NOT carry?",
      options: [
        "A glowing torch",
        "A scabbard with no sword",
        "An extinguisher cap",
        "A horn of plenty (cornucopia)"
      ],
      correctAnswer: 2,
      explanation: "The extinguisher cap belongs to the Ghost of Christmas Past. The Ghost of Christmas Present carries 'a glowing torch, in shape not unlike Plenty's horn' and wears 'an antique scabbard; but no sword was in it, and the ancient sheath was eaten up with rust.'",
      points: 5,
      supplementary: {
        type: "multiple-choice",
        question: "What does the Ghost's empty, rusted scabbard symbolise?",
        options: [
          "That Christmas is a time of war",
          "That peace and goodwill have replaced conflict",
          "That the Ghost has lost his weapon",
          "That swords are old-fashioned"
        ],
        correctAnswer: 1,
        explanation: "The empty, rusted scabbard symbolises that the Christmas spirit brings peace, not conflict. The sword of war has long been abandoned and is no longer needed."
      }
    },
    {
      id: 28,
      type: "multiple-choice",
      question: "What does Mrs Cratchit wear in her hair to look 'brave' for Christmas?",
      options: [
        "A ribbon",
        "Flowers",
        "Ribbons (described as 'cheap' but 'brave')",
        "A Christmas wreath"
      ],
      correctAnswer: 2,
      explanation: "Mrs Cratchit wears 'brave ribbons' in her hair—described as 'cheap' enough. The word 'brave' suggests both courage and an attempt at festive appearance despite poverty. Dickens uses this detail to show how the poor maintain dignity and celebration with very little.",
      points: 5,
      supplementary: {
        type: "true-false",
        question: "The description of Mrs Cratchit's ribbons as 'cheap' is meant to mock her.",
        correctAnswer: false,
        explanation: "Dickens uses 'cheap' sympathetically to show how the poor make the most of what little they have. The ribbons represent dignity and festive effort despite poverty."
      }
    },
    {
      id: 29,
      type: "multiple-choice",
      question: "What drink do the Cratchits share from 'the family display of glass—two tumblers and a custard cup without a handle'?",
      options: [
        "Gin",
        "Hot gin and lemon (a compound in a jug)",
        "Mulled wine",
        "Tea"
      ],
      correctAnswer: 1,
      explanation: "The family shares 'a compound in a jug'—hot gin and lemon. The detail of sharing between 'two tumblers, and a custard-cup without a handle' poignantly shows their poverty while the communal drinking emphasises their loving unity.",
      points: 5,
      supplementary: {
        type: "true-false",
        question: "The Cratchits' limited glassware is a detail showing their poverty.",
        correctAnswer: true,
        explanation: "Having only two tumblers and a broken custard cup for a large family shows material poverty, but sharing the drink shows their emotional richness and unity."
      }
    },
    {
      id: 30,
      type: "free-text",
      question: "Evaluate how Dickens uses Stave 3 to convey his message about the responsibilities of the wealthy towards the poor. Consider his use of contrast, the supernatural, and direct social commentary.",
      correctAnswer: "Strong answers should discuss: contrasts between abundance (Ghost's feast) and want (Cratchits' modest meal); the Ghost blessing poor dinners specifically; Tiny Tim as emotional appeal for charitable action; Mrs Cratchit's justified anger at Scrooge; Fred's joy versus Scrooge's isolation showing money doesn't buy happiness; Ignorance and Want as direct social allegory; the Ghost using Scrooge's own words against him to create shame; Dickens' critique of workhouses and prisons as solutions; the message that the wealthy have moral responsibility to help; how the novella was designed to change readers' behaviour; context of Victorian poverty, child mortality, and class division.",
      explanation: "Stave 3 is Dickens' most powerful social commentary. He uses emotional manipulation (Tiny Tim), direct allegory (Ignorance and Want), shame (quoting Scrooge's words back), and contrast (rich vs poor Christmases) to argue that the wealthy must take responsibility for society's most vulnerable. The novella was explicitly written to change hearts and behaviour.",
      points: 20,
      supplementary: {
        type: "multiple-choice",
        question: "What was Dickens' primary purpose in writing A Christmas Carol?",
        options: [
          "To entertain readers with a ghost story",
          "To change attitudes towards the poor and promote charitable action",
          "To describe Victorian Christmas traditions",
          "To criticise organised religion"
        ],
        correctAnswer: 1,
        explanation: "Dickens wrote A Christmas Carol to change attitudes towards the poor. He called it his 'little Carol' for social reform, hoping to touch hearts in a way that facts and reports could not."
      }
    }
  ]
};