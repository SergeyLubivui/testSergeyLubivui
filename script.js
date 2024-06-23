let score = 0;
let highScore = 0;

document.getElementById('doodle').addEventListener('click', () => {
    score++;
    document.getElementById('score').innerText = score;
    if (score > highScore) {
        highScore = score;
        document.getElementById('high-score').innerText = highScore;
    }
});

const doodle = document.getElementById('doodle');
let jumpHeight = 100;
let isJumping = false;

function jump() {
    if (!isJumping) {
        isJumping = true;
        let jumpInterval = setInterval(() => {
            if (doodle.style.bottom === `${jumpHeight}px`) {
                clearInterval(jumpInterval);
                isJumping = false;
                doodle.style.bottom = '0px';
            } else {
                doodle.style.bottom = `${parseInt(doodle.style.bottom) + 10}px`;
            }
        }, 50);
    }
}

setInterval(jump, 1000);