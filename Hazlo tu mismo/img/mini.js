let arr = ["img/moto01.jpg", "img/moto02.jpg", "img/moto03.jpg"];
let arrWord = ["mot001", "moto02", "moto03"];
let counter = 0;
let i = selectRandomImage();
let score = 0;
let highScore = 0;
document.body.classList.add('backGroundBody');
let btnPlayAgain = document.querySelector('.playAgain');

function selectRandomImage() {
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
document.querySelector(".play").addEventListener('click', play);

const showbtnPlayAgain = function () {
        btnPlayAgain.classList.remove('hidden');
};
const hiddenbtnPlayAgain = function () {
        btnPlayAgain.classList.add('hidden');
};

function gameOver() {
        if (score > highScore) {
                highScore = score;
                document.querySelector(".highscore").textContent = "🍭 high score " + score;
        }
        document.body.classList.remove('backGroundBody');
        showbtnPlayAgain();
}

document.querySelector(".playAgain").addEventListener('click', reset);
function reset() {
        document.body.classList.add('backGroundBody');
        counter = 0;
        i = selectRandomImage(); // get new random picture
        score = 0;
        document.querySelector(".score").textContent = 0;
        document.getElementById("input").value = "";
        hiddenbtnPlayAgain();
}





