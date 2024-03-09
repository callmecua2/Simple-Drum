var numberButton = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  });
}

// var drumButtons = document.querySelectorAll('.drum')
// drumButtons.forEach((button) => {
//     button.addEventListener('click', function() {
//       var audio = new Audio('sounds/tom-1.mp3');
//       audio.play()

var drumButtons = document.querySelectorAll(".drum");
drumButtons.forEach((button) => {
  button.addEventListener("click", () => {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  });
});

let previousButton = null;
var numberButton = document.querySelectorAll(".drum");
numberButton.forEach((button) => {
  button.addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
        var w = new Audio("sounds/tom-1.mp3");
        w.play();
        break;
      case "a":
        var a = new Audio("sounds/tom-2.mp3");
        a.play();
        break;
      case "s":
        var s = new Audio("sounds/tom-3.mp3");
        s.play();
        break;
      case "d":
        var d = new Audio("sounds/tom-4.mp3");
        d.play();
        break;
      case "j":
        var j = new Audio("sounds/snare.mp3");
        j.play();
        break;
      case "k":
        var k = new Audio("sounds/crash.mp3");
        k.play();
        break;
      case "l":
        var l = new Audio("sounds/kick-bass.mp3");
        l.play();
        break;
      default:
        console.log(buttonInnerHTML);
        break;
    }
  });
});

document.addEventListener("keypress", (event) => {
  switch (event.key) {
    case "w":
      var w = new Audio("sounds/tom-1.mp3");
      w.play();
      break;
    case "a":
      var a = new Audio("sounds/tom-2.mp3");
      a.play();
      break;
    case "s":
      var s = new Audio("sounds/tom-3.mp3");
      s.play();
      break;
    case "d":
      var d = new Audio("sounds/tom-4.mp3");
      d.play();
      break;
    case "j":
      var j = new Audio("sounds/snare.mp3");
      j.play();
      break;
    case "k":
      var k = new Audio("sounds/crash.mp3");
      k.play();
      break;
    case "l":
      var l = new Audio("sounds/kick-bass.mp3");
      l.play();
      break;
    default:
      console.log("wrong button");
      break;
  }
});


var numberButton = document.querySelectorAll(".drum");
numberButton.forEach((button) => {
  button.addEventListener("click", function () {
    button.style.color = "white";
  });
});




// document.addEventListener('keypress', function(){
//     alert('keyboard got press')
// })*/

/*
var numberButton = document.querySelectorAll('.drum')
numberButton.forEach(button =>{
    button.addEventListener('click', function(){

        var buttonInnerHTML = this.buttonInnerHTML

        switch (buttonInnerHTML) {
            case "w":
                var w = new Audio('sounds/tom-1.mp3')
                w.play()                      
                break;
            case "a":
                var a = new Audio('sounds/tom-2.mp3')
                a.play()
                break;
            case "s":
                var s = new Audio('sounds/tom-3.mp3')
                s.play()
                break;
            case "d":
                var d = new Audio('sounds/tom-4.mp3')
                d.play()
                break;
            case "j":
                var j = new Audio('sounds/snare.mp3')
                j.play()
                break;
            case "k":
                var k = new Audio('sounds/crash.mp3')
                k.play()
                break;
            case "l":
                var l = new Audio('sounds/kick-bass.mp3')
                l.play()   
                break;                 
            default: console.log(buttonInnerHTML)
                break;
        }

    })
})
*/

/*

document.addEventListener('keypress', function(event){

    switch (event.key) {
        case "w":
            var w = new Audio('sounds/tom-1.mp3')
            w.play()                     
            break;
        case "a":
            var a = new Audio('sounds/tom-2.mp3')
            a.play()
            break;
        case "s":
            var s = new Audio('sounds/tom-3.mp3')
            s.play()
            break;
        case "d":
            var d = new Audio('sounds/tom-4.mp3')
            d.play()
            break;
        case "j":
            var j = new Audio('sounds/snare.mp3')
            j.play()
            break;
        case "k":
            var k = new Audio('sounds/crash.mp3')
            k.play()
            break;
        case "l":
            var l = new Audio('sounds/kick-bass.mp3')
            l.play()   
            break;                 
        default: console.log("hit")
            break;
    }
})*/

// function animation(currentKey){
//     var activeButton =document.querySelector('.'+currentKey)
//     activeButton.classList.add(".pressed")
// }
