//Variables

var guessWords = ['run dmc', 'nas', 'turntable', 'outkast', 'freestyle', 'graffiti', 
				'poetry', 'the breaks', 'no limit', 'j cole', 'nwa', "mic check", 'jay z', 
				'rick rubin', 'queen latifah', 'disc jockey', 'beatbox', 'gold chains', 'adidas', 'mixtape', 'the source' ];

var randomWords; 
var underScore = []; 
var userGuess = []; 
var wins= 0; 
var loss= 0; 
var guessesLeft= 10;
var wrongLetter =[];  




//Function

function startGame() {
//Generate randomWords 
	randomWords = guessWords[Math.floor(Math.random() * guessWords.length)]; 
		console.log('random word:' + randomWords);
	for(var i =0; i < randomWords.length; i++) {
//Generate underScores based on length of randomWords 
		underScore.push('_'); 
	} 
	document.getElementById('blanks').innerHTML= underScore.join(" "); 

//variables to reset at start of game
	wrongLetter = []; 
	guessesLeft =10; 

	document.getElementById("guessesLeft").innerHTML += guessesLeft;
}

//Get user input

 userGuess= document.getElementById("user-text");


 document.onkeyup = function(event) {
        
         userGuess= event.key; 
         	//Check if letters match random word
      		if(randomWords.indexOf(userGuess) > -1) {
      			
      		 
      		} else {
      			wrongLetter.push(userGuess); 
      			document.getElementById("wrong").innerHTML += wrongLetter; 
      			
      		}


}




startGame(); 