//Arrays

// user input
var alphabet = ["A" , "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
				"M" , "N", "O", "P" , "Q", "R", "S", "T", "U", "V", "Y" ,"Z"];


//*Choose words randomly
var guessWords = ['run dmc', 'nas', 'turntable', 'outkast', 'freestyle', 'graffiti', 
				'poetry', 'the breaks', 'no limit', 'j cole', 'nwa', "mic check", 'jay z', 
				'rick rubin', 'queen latifah', 'disc jockey', 'beatbox', 'gold chains', 'adidas', 'mixtape' ];

var randomWord = guessWords[Math.floor(Math.random() * guessWords.length)];
let choosenWord = guessWords[randomWord];
console.log(randomWord); 


//create underscore based on length of word
//get player input
//check if guess is right
//if right put in right array
//if wrong push to gu