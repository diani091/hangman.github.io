//Creat an array of words
var words = ["Rick", "Birdperson","Summer","Morty", "Microverse", "Unity","Nanoverse", "Mr.Meeseeks"];
// Choose random words
var randomNum = Math.floor(Math.random()* words.length);
var chosenWord = words[randomNum];
var rightAnswer = [];
var wrongAnswer = [];
var underScore = [];
var guessesLeft = 10;
var docUnderScore = document.getElementsByClassName("underScores");
var docWrongAnswer = document.getElementsByClassName("wrong");

//Create "_" based on lenght of words
var generateUnderscore = () => {
    for(var i= 0; i < chosenWord.length; i++)
    { 
    }
    return underScore;
}


 //Get users guesses
 document.addEventListener("keypress", (event)=> {
     var keycode = event.keyCode;
     var keyword = String.fromCharCode(keycode);
//if users guess is right 

     if (chosenWord.indexOf(keyword) > -1) {
     // add to right words array
     rightAnswer.push(keyword);
     underScore[chosenWord.indexOf(keyword)]= keyword;
     docUnderScore[0].innerHTML = underScore.join(" ");
    

     if(underScore.join(" ")== chosenWord){
         alert ("Wubba Lubba Dub Dub");
       }
     }

     else {
         wrongAnswer.push(keyword);
         docWrongAnswer[0].innerHTML = wrongAnswer;

     }
     
     generateUnderscore[0].innerHTML = generateUnderscore().join(" ");
 });


 

