//Creat an array of words
var words = ["Rick", "Birdperson","Summer","Morty", "Microverse", "Unity","Nanoverse", "Mr.Meeseeks"];
// Choose random words
var randomNum = Math.floor(Math.random()* words.length);
var chosenWord = words[randomNum];
var guessesLeft = 10;

//Create "_" based on lenght of words
var generateUnderscore = () => {
    var str = "";
    for(var i= 0; i < chosenWord.length; i++)
    { 
        str += "_";
    }
    return str;
}


window.onload = () => {
    console.log(chosenWord);
    document.getElementById("lettersGuessed").innerHTML = generateUnderscore();
};


 //Get users guesses
 document.addEventListener("keypress", (event)=> {
     var keycode = event.keyCode;
     var keyword = String.fromCharCode(keycode);
//if users guess is right 
    var idx = 0;
    
    var arr =  document.getElementById("lettersGuessed").innerHTML.split("");
    var wrong = document.getElementById("wrong").innerHTML;
    var flag = false;
    chosenWord.split("").forEach((letter) => {        
        if (letter === keyword) {
            arr[idx] = letter;
            flag = true;            
        } 
        idx++;
    });
    document.getElementById("lettersGuessed").innerHTML = arr.join("");
    
    if (!flag) {
        wrong += keyword;
        guessesLeft--;
    }
    
    
    document.getElementById("wrong").innerHTML = wrong;

    document.getElementById("left").innerHTML = guessesLeft;
    
    setTimeout(() => {
        if (arr.join("") === chosenWord) {
            alert ("Wubba Lubba Dub Dub");
            location.reload();
        }
    }, 100);

    setTimeout(() => {
        if (guessesLeft === 0) {
            alert ("Wrong, Morty");
            location.reload();
        }
    }, 100);
    
     /*if (chosenWord.indexOf(keyword) > -1) {
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
     
     generateUnderscore[0].innerHTML = generateUnderscore().join(" ");*/
 });


 
