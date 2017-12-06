//Variables

var guessWords = ['run dmc', 'nas', 'turntable', 'outkast', 'freestyle', 'graffiti', 
				'poetry', 'the breaks', 'no limit', 'j cole', 'nwa', "mic check", 'jay z', 
				'rick rubin', 'queen latifah', 'disc jockey', 'beatbox', 'gold chains', 'adidas', 'mixtape', 'the source' ];

var randomWords; 
var underScore = []; 
var userGuess = []; 




//Function

function startGame() {
//Generate randomWords 
	randomWords = guessWords[Math.floor(Math.random() * guessWords.length)]; 
	
	for(var i =0; i < randomWords.length; i++) {
//Generate underScores based on length of randomWords 
		underScore.push('_'); 
	} 
	document.getElementById('blanks').innerHTML= "testing"; 
//
}


startGame(); 