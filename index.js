
var DrumBtnsNum = document.querySelectorAll(".set > .drum").length;

for (var i = 0; i < DrumBtnsNum; i++) {
    document.querySelectorAll(".set > .drum")[i].addEventListener('click', function () {
        // var htmlinn = this.innerHTML;
        // playSound(htmlinn);
        // animateBtn(htmlinn);
        var classy = this.classList[0];
        playSound(classy);
        animateBtn(classy);
    }
    );
}
document.addEventListener("keydown", function (event) {
    playSound(event.key);
    animateBtn(event.key);
})

function playSound(keyLetter) {
    var filename = "";
    switch (keyLetter) {
        case "a":
            filename = 'a';
            break;
        case "b":
            filename = 'b';
            break;
        case "c":
            filename = 'c';
            break;
        case "d":
            filename = 'd';
            break;
        case "e":
            filename = 'e';
            break;
        case "f":
            filename = 'f';
            break;
        case "g":
            filename = 'g';
            break;
        default:
            filename = "g";
    }
    var audio = new Audio("sounds/" + filename + ".mp3");
    audio.play();
}

function animateBtn(key) {
    var activebtn = document.querySelector("." + key);
    // if (activebtn != null)
    activebtn.classList.add("pressed");
    setTimeout(function () {
        activebtn.classList.remove("pressed")
    }
        , 100)
}

// شرح مثال لانشاء ايفينت ليسنر:
// function anotherEventListener(eventType, callback) {
//     var eventHappened = {
//         type: "keydown",
//         duration: 2,
//         key: "p"
//     }
//     if (eventHappened.type === eventType)
//         callback(eventHappened);
// }

// anotherEventListener("keydown", function (event) {
//     console.log(event);
// })


// var houseKeeper = {
//     name: "mai";
//     age: 38;
//     yearsOfExp: 3;
//     prof: "cleaning";
// }

// function HouseKeeper(name, age, yearsOfExp, prof) {
//     this.name = name;
//     this.age = age;
//     this.yearsOfExp = yearsOfExp;
//     this.prof = prof;
//     this.clean = function () {
//         console.log("cleaning in progress....");
//         alert("cleaning in progress....");
//     }
// }

// function calc(n1, n2, op) {
//     console.log(op(n1, n2));
// }

// function mul(n1, n2) {
//     return n1 * n2;
// }

// function div(n1, n2) {
//     if (n2 != 0)
//         return n1 / n2;
//     else
//         return "undefined";
// }

// function sub(n1, n2) {
//     return n1 - n2;
// }

// function add(n1, n2) {
//     return n1 + n2;
// }


