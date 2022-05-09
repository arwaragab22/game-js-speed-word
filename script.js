let select = document.querySelector("select");
let option = document.querySelectorAll("select option");
let lvl = document.querySelector(".lvl");
let seconds = document.querySelector(".seconds");
let start = document.querySelector(".start");
let theword = document.querySelector(".the-word");
let input = document.querySelector("input");

let upcomingwords = document.querySelector(".upcoming-words");
let time = document.querySelector(".time span");
let score = document.querySelector(".score");
let got = document.querySelector(".got");
let total = document.querySelector(".total");
let finish = document.querySelector(".finish");

///////////////words/////////
//array of word

let easy = ["band", "bank", "batch", "battery"];
let mid = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
let hard = [
    "blockidjdj",
    "bunchuiue",
    "clotauihf",
    "clumpings",
    " parcelopo",
    "passeling",
    "setidoid",
    "suiteable",
];

let levelsname = [easy, mid, hard];
var timeinterval;

//////////////////////////////////

//select level

let second;
let index;

/////////// functiongenerate random word
function selectlevel() {
    finish.innerHTML = "";
    start.style.display = "none";
    for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].selected == true) {
 second = option[i].getAttribute("index");


            index = select.options[i].index;
            lvl.innerHTML = i + 1;

            seconds.innerHTML = second;


            total.innerHTML = levelsname[index].length;

        }
       
    }
    generate();
}
function generate() {
    time.innerHTML = second;
    input.value = "";
    upcomingwords.innerHTML = "";
    for (let j = 0; j < levelsname.length; j++) {

        if (j == index) {
            if (levelsname[j].length > 0) {

                
                let randomid = levelsname[j][Math.floor(Math.random() * levelsname[j].length)];
                let randomword = levelsname[j].splice(randomid, 1);
                theword.innerHTML = randomword;
                input.focus();

                for (let k = 0; k < levelsname[j].length; k++) {
              
                    let newdiv = document.createElement("div");
                    newdiv.innerHTML = levelsname[j][k];
                    upcomingwords.appendChild(newdiv);

                
                }
                timeinterval = setInterval(function () {

                    time.innerHTML--;
                    if (+time.innerHTML == 0) {
                        clearInterval(timeinterval);
                    }
                    check();
                }, 1000);

            }
            else {
                if (+got.innerHTML < +total.innerHTML) {
                    finish.innerHTML = "you dont pass";
                    theword.innerHTML = "";
                    
              
                time.innerHTML = "0";
                got.innerHTML = "0";
                    total.innerHTML = "0";
                    lvl.innerHTML = "";
               
                    seconds.innerHTML = "";
                }

                start.style.display = "block";
       
            }
        }
    
    }
}


///////// function check word
function check() {

    if (input.value.toLowerCase() == theword.innerHTML.toLowerCase()) {
        clearInterval(timeinterval);
        finish.innerHTML = "right";
        +got.innerHTML++;
        input.value = "";
        if (+got.innerHTML == +total.innerHTML) {
            finish.innerHTML = `congratilation you pass ${select.value}`;
        }
        
        generate();

    }
    else {
        if (time.innerHTML == 0) {
            clearInterval(timeinterval);
            finish.innerHTML = "wrong";

            generate();
        }

    }

}