
        var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
        'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
         
     // Variables for tracking our wins and losses, beginning at 0
    var wins = 0;
    var losses = 0;
    var guessesLeft = 6;
         
    // userGuess is what the user picks by pressing a key
    var userGuess = null;

    // guessesSoFar is an array that will hold all the user's guesses in each round
    var guessesSoFar = [];

// Have computer pick a letter and store it in computerChoice
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + computerChoice);

     
    //listen for event--keypress in this case    
     document.onkeypress = function(event) {
         var userGuess = event.key;

     // When user presses a key, it records it and saves to userGuess
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    //append userGuess to guessSoFar-------------need help here!!
    for (var j = 6; j < guessesLeft[6]; j--) {
        if(j>0){
    guessesSoFar.push(userGuess[j]);
        }
    }

         // the user guess is part of the alphabet and wasnt already picked by user then add it to array
            if (guessesSoFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
                guessesSoFar[guessesSoFar.length]=userGuess;

                // if it is a new letter then decrease remaining guesses by 1
             guessesLeft--;
         }

             //a correct guess increases your win count    
             if(userGuess === computerChoice){
                wins++;
                console.log("You won!");
                alert("You won!");
                console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + computerChoice);
               guessesLeft=6;
               guessesSoFar=[];
               computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
               }
   
     //if you have 0 guess left, then your losses count increases
         if(guessesLeft === 0){
             losses++;
             console.log("sorry, you lost!  Try again.");
             alert("Sorry, you lost.  Try again.");
             console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + computerChoice);
             guessesLeft=6;
             guessesSoFar=[];
             computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
            }
     
         
     // Displaying progress to HTML
    var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guess what letter I'm thinking of:</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";

    // place html into the game ID
    document.querySelector("#game").innerHTML = html;


     } 
