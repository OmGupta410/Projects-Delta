let gameSeq = [];
let userSeq = [];
let btns = ["green", "red", "black", "blue"];

let level = 0;
let started = false;
let h3 = document.querySelector("h3");
let highestScore = 0;

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100);
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let ranidx = Math.ceil(Math.random() * 4);
    let randColour = btns[ranidx];
    let randBtn = document.querySelector(`.${randColour}`);
    gameSeq.push(randColour);
    console.log(gameSeq);
    btnFlash(randBtn);  
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 500);
        }
    } else {
        h3.innerHTML = `Game Over! Your score was ${level}, highest score: ${highestScore}. Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 300);
        reset();
        hScore();
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);
    let userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

function hScore() {
    if (level > highestScore) {
        highestScore = level;
    }
    h3.innerHTML += `<br>Highest Score: ${highestScore}`;
}