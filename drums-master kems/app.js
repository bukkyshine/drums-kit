console.log("connected");
/**
 * This is the drum kit project
 * You are provided with an images folder which contains drum images. 
 * You are required to attache each drum image to each alphabet in the html file (Watch the video to know which button has which image).
 * 
 * You are also provided with a sounds folder.
 * 
 * You are to attach each sound to the images and button in the html.
 * 
 * When you click on each button it should play the curresponding drum sound. 
 * 
 * Also When the curresponding key is pressed on the key board, the drum sound should be made. 
 * 
 * Key to each drum
 * button w = tom-1.mp3
 * button a = tom-2.mp3
 * button s = tom-3.mp3
 * button d = tom-4.mp3
 * button j = kick-bass.mp3
 * button k = snare.mp3
 * button l = crash.mp3
 * 
 * NOTE
 * Codes must be properly commented. 
 * Use of ES6 Syntax is important. 
 */


//select the buttons
const main = document.querySelector(".set");
const drums = main.querySelectorAll(".drum");

//loop through buttons, and Add images to each of them 

for(let i=0; i < drums.length; i++){
drums[0].style.backgroundImage = "url('images/tom1.png')";
drums[1].style.backgroundImage = "url('images/tom2.png')";
drums[2].style.backgroundImage = "url('images/tom3.png')";
drums[3].style.backgroundImage = "url('images/tom4.png')";
drums[4].style.backgroundImage = "url('images/kick.png')";
drums[5].style.backgroundImage = "url('images/snare.png')";
drums[6].style.backgroundImage = "url('images/crash.png')";

//add sounds with eventListeners for each button to listen for a click event
drums[0].addEventListener("click",  function (){
     new Audio  ("sounds/tom-1.mp3").play()
    })
    drums[1].addEventListener("click", function(){
        new Audio ("sounds/tom-2.mp3").play()
    })
    drums[2].addEventListener("click", function(){
        new Audio ("sounds/tom-3.mp3").play()
    })
    drums[3].addEventListener("click", function(){
        new Audio ("sounds/tom-4.mp3").play()
    })
    drums[4].addEventListener("click", function(){
        new Audio ("sounds/kick-bass.mp3").play()
    })
    drums[5].addEventListener("click", function(){
        new Audio ("sounds/snare.mp3").play()
    })
    drums[6].addEventListener("click", function(){
        new Audio ("sounds/crash.mp3").play()
    })
}

//add eventlistener to listen for onkeypress event while giving conditions on the key to output a particular sound

document.addEventListener("keypress", function (e){
if(e.key == 'w' || e.key == 'W'){
    new Audio  ("sounds/tom-1.mp3").play()
}else if(e.key == 'a' || e.key == 'A'){
    new Audio ("sounds/tom-2.mp3").play()
}else if(e.key == 's' || e.key == 'S'){
    new Audio ("sounds/tom-3.mp3").play()
}else if(e.key == 'd' || e.key == 'D'){
    new Audio ("sounds/tom-4.mp3").play()
}else if(e.key == 'j' || e.key == 'J'){
    new Audio ("sounds/kick-bass.mp3").play() 
}else if(e.key == 'k' || e.key == 'K'){
    new Audio ("sounds/snare.mp3").play()
}else if(e.key == 'l' || e.key == 'L'){
    new Audio ("sounds/crash.mp3").play()
}else{
    new Audio ("").play()
}
});