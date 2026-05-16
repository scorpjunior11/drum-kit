document.getElementById("w").onclick= function(){
    let sound= new Audio("sounds/tom-1.mp3")
    sound.play();
}

document.getElementById("a").onclick= function(){
    let sound= new Audio("sounds/tom-2.mp3")
    sound.play();
}

document.getElementById("s").onclick= function(){
    let sound= new Audio("sounds/tom-3.mp3")
    sound.play();
}

document.getElementById("d").onclick= function(){
    let sound= new Audio("sounds/tom-4.mp3")
    sound.play();
}

document.getElementById("j").onclick= function(){
    let sound= new Audio("sounds/snare.mp3")
    sound.play();
}

document.getElementById("k").onclick= function(){
    let sound= new Audio("sounds/kick-bass.mp3")
    sound.play();
}

document.getElementById("l").onclick= function(){
    let sound= new Audio("sounds/crash.mp3")
    sound.play();
}

document.addEventListener("keypress", function(event){
    let key= event.key;
    switch(key){
        case "w":
            let sound1= new Audio("sounds/tom-1.mp3")
            sound1.play();
            break;
        case "a":
            let sound2= new Audio("sounds/tom-2.mp3")
            sound2.play();
            break;
        case "s":
            let sound3= new Audio("sounds/tom-3.mp3")
            sound3.play();
            break;
        case "d":
            let sound4= new Audio("sounds/tom-4.mp3")
            sound4.play();
            break;
        case "j":
            let sound5= new Audio("sounds/snare.mp3")
            sound5.play();
            break; 
        case "k":
            let sound6= new Audio("sounds/kick-bass.mp3")
            sound6.play();
            break;
        case "l":
            let sound7= new Audio("sounds/crash.mp3")
            sound7.play();
            break;
        default:
            console.log(key);
    }
})  