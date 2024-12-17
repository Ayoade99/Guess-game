"use strict"

 let number = Math.trunc(Math.random() * 20 + 1);

 let score = 20;
 let highscore = 0;
 const revealNum = document.querySelector(".number");

function displayMessage(content) {
    document.querySelector(".message").textContent = content;

}

document.querySelector(".number");
document.querySelector(".check").addEventListener("click", function() {   

    const guess = Number(document.querySelector(".guess").value);
    if(!guess) {
        displayMessage("⚠️ No Input");
    }else if (guess === number) {
       revealNum.textContent = number;      
        displayMessage("👏 Correct Number");
        document.querySelector("header").style.backgroundColor = "green";

        if(score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }

    }else if (guess !== number) {
        if (score > 1) {
            displayMessage(guess > number ? "⬆️ Too high!" : "⬇️ Too low!");
            score--;
            document.querySelector(".score").textContent = score;
        }else {
            displayMessage("🚫 Game Over");
            document.querySelector(".score").textContent = 0;
          
        }
    }
});

document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    number = Math.trunc(Math.random() * 20 + 1);
    displayMessage("start guessing...");
    document.querySelector(".guess").value = "";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector("header").style.backgroundColor = "#1b3f66";
});