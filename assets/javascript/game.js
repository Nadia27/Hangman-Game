//Variables

var guessWords = ['run dmc', 'nas', 'turntable', 'outkast', 'freestyle', 'graffiti', 
				'poetry', 'the breaks', 'no limit', 'j cole', 'nwa', "mic check", 'jay z', 
				'rick rubin', 'queen latifah', 'disc jockey', 'beatbox', 'gold chains', 'adidas', 'mixtape', 'the source' ];

var randomWords =""; 
var underScore = []; 
var userGuess = []; 
var wins= 0; 
var namelength = 0; 
var guessesLeft= 10;
var wrongLetter =[]; 
var rightLetter = [];  
var chosenArtist = "";



//Function

function startGame() {
//Generate randomWords 
	randomWords = guessWords[Math.floor(Math.random() * guessWords.length)]; 
		console.log('random word:' +randomWords);
      chosenArtist = randomWords.split("");
      namelength = chosenArtist.length;

//Generate underScores based on length of randomWords 	
   for(var i =0; i < namelength; i++) {

		underScore.push("_"); 
	} 
	document.getElementById("blanks").innerHTML= underScore.join(" "); 

//variables to reset at start of game
	wrongLetter = []; 
	guessesLeft =10; 

	document.getElementById("guessCounter").innerHTML += guessesLeft;
   
}

//Get user input
//you need to figure this section out!!
//alert win/lose
 
keyguess = false;

 document.onkeyup = function(event) {
        
         //userGuess= event.key; 
       var userGuess =String.fromCharCode(event.keyCode).toLowerCase();

             for (var i = 0; i < underScore.length; i++) {
               
               if (randomWords[i] == userGuess){
                  keyguess = true;
                  underScore[i] = userGuess;
                 
                  document.getElementById("blanks").innerHTML =  underScore.join(" ");
                 // console.log(correct);

             }
            

         };

         	//Check if userGuess match randomWord
      		if(randomWords.indexOf(userGuess) > -1) {
      			
      			for(var i =0; i < randomWords.length; i ++) {

      				if(randomWords[i] === userGuess){
      					
      					underScore[i] =userGuess; 
      					console.log(underScore);
					    }
      			}
      			
      		 
      		}else{// this needs to be figured out too!!

      			wrongLetter.push(userGuess); 
      			document.getElementById("wrong").innerHTML += wrongLetter; 
      			
                  
               //decrementing but cannot get to print to screen
               guessesLeft--; 
      			document.getElementById("guessCounter").innerHTML = guessesLeft;
                  console.log(guessesLeft);
      		}


}




startGame(); 