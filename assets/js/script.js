// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {
    let keys = document.getElementsByClassName('key');
    for (let key of keys) {
        key.addEventListener("click", function () {
            if (this.textContent === "Enter") {
                checkGuess();
            } else if (this.textContent === "Backspace") {
                removeLetter();
            } else {
                addLetterToSpot(this.textContent);
            }
        });
    }

});

function checkGuess() {

}

function removeLetter() {

}

function addLetterToSpot(letter) {

}