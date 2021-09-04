const p1button = document.querySelector('#p1Button');
const p2button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetBtn = document.querySelector('#reset');

const winningScoreSelect = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;


p1button.addEventListener('click', function () {

    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
    }
    p1Display.textContent = p1Score;

})

p2button.addEventListener('click', function () {

    if (!isGameOver) {
        p2Score += 1;
    }
    if (p2Score === winningScore) {
        isGameOver = true;
        p2Display.classList.add('winner');
        p1Display.classList.add('loser');
    }
    p2Display.textContent = p2Score;

})

winningScoreSelect.addEventListener('change', function () {
    // alert("SOMETHING HAS CHANGED");
    // console.log(typeof (this.value)); //this gives a string
    winningScore = parseInt(this.value);
    reset(); // <--- execute here
})

resetBtn.addEventListener('click', reset) // <--- passing a reference 

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
}