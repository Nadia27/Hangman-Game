//User Input

var playerName= prompt("Yo, let's play Hip-Hop Hangman. Enter your name: "); 
	

function gamer() {
	document.getElementById("user").innerHTML = 'Welcome :' + playerName; 
}


 //Arrays
//*Choose words randomly
var guessWords = ['run dmc', 'nas', 'turntable', 'outkast', 'freestyle', 'graffiti', 
				'poetry', 'the breaks', 'no limit', 'j cole', 'nwa', "mic check", 'jay z', 
				'rick rubin', 'queen latifah', 'disc jockey', 'beatbox', 'gold chains', 'adidas', 'mixtape', 'the source' ];

var randomWord = guessWords[Math.floor(Math.random() * guessWords.length)];
let choosenWord = guessWords[randomWord];
console.log(randomWord); 


//create underscore based on length of word

/*var underScore = []; 

var createUnderscore = () => {

	for(var i = 0; i < choosenWord.length; i ++) {
		underScore.push('_'); 
	}
	
} 

console.log(createUnderscore()); */




//get player input

var userGuess= document.getElementById("user-text");


 document.onkeyup = function(event) {
         userGuess.textContent = event.key;
        console.log(event); 
      }; 
//check if guess is right
//if right put in right array
//if wrong push to gu