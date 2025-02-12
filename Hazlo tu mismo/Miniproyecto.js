let arr = ["img/moto01.jpg", "img/moto02.jpg", "img/moto03.jpg"];
let arrWord = ["mot001", "moto02", "moto03"];
let counter = 0;
let i = selectRandomImage();
let score = 0;
let highScore = 0;
document.body.classList.add('backGroundBody');
let btnPlayAgain = document.querySelector('.playAgain');

const selectRandomImage =()=> {
        document .querySelector (".countQuestion" ).textContent = "Question number " + counter;
        let index = Math.floor(Math.random() * 3);
        console.log(index);
        document.getElementById("imgToGuess").src = arr[index];
        return index;
}

function play() {
        counter++;
        if (counter <= 3) {
                const word = arrWord[i];
                const messageElement = document.querySelector(".message");
                const letter = document.getElementById("input").value;
                if (!letter) {
                        messageElement.textContent = "No Letter 🥵";
                        score -= 2;
                }
                else if (letter === word[0]) {
                        messageElement.textContent = "correct Answer 🤙";
                        score += 5;
                }
                else if (letter != word[0]) {
                        messageElement.textContent = "wrong Answer 👎";
                        score -= 2;
                }
                document.getElementById("input").value = "";
                document.querySelector(".score").textContent = "score : " + score;
                if (counter < 3) {
                        i = selectRandomImage();
                }
        }
}