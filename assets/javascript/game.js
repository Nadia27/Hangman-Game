//Arrays

// user input
var alphabet = ["A" , "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
				"M" , "N", "O", "P" , "Q", "R", "S", "T", "U", "V", "Y" ,"Z"];


//*Choose words randomly
var guessWords = ["Run DMC", "Nas", "turntable", "Outkast", "freestyle", "graffiti", 
				"poetry", "The Breaks", "No Limit", "J Cole", "NWA", "mic check"];

var randomWord = Math.floor(Math.random() * guessWords.length);
let choosenWord = guessWords[randomWord];
console.log(randomWord); 
//create underscore based on length of word
//get player input
//check if guess is right
//if right put in right array
//if wrong push to gu