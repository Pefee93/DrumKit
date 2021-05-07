
for (var i = 0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        


    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/Snap.wav');
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio('sounds/Tabla.wav');
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio('sounds/Shaker.wav');
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio('sounds/Knocker.wav');
            tom4.play();
        break;

        case "j":
            var snare = new Audio('sounds/ClapSnare.wav');
            snare.play();
        break;

        case "k":
            var kickBass = new Audio('sounds/Kick.wav');
            kickBass.play();
        break;

        case "l":
            var crash = new Audio('sounds/HiHat.wav');
            crash.play();
        break;
    
        default: console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(currentKey) {


    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);

}



    