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

let currentRow = 0;
let currentSpot = 0;
let rows = document.getElementsByClassName('row');
let spots = rows[currentRow].children;
let secret = secretWord();
// list of countries 
let wordList = [
    "ALAND",
    "ARUBA",
    "BENIN",
    "CEUTA",
    "CHILE",
    "CHINA",
    "EGYPT",
    "GABON",
    "GHANA",
    "HAITI",
    "INDIA",
    "ITALY",
    "JAPAN",
    "KENYA",
    "LIBYA",
    "MACAU",
    "MALTA",
    "NAURU",
    "NEPAL",
    "NIGER",
    "PALAU",
    "PAPUA",
    "QATAR",
    "SAMOA",
    "SPAIN",
    "SUDAN",
    "SYRIA",
    "TONGA",
    "YEMEN"
];

/** Function to select country from the list randomly */
function secretWord() {
    let randomNumber = Math.floor(Math.random() * wordList.length);
    return wordList[randomNumber];
}

function checkGuess() {

}

function removeLetter() {

}

function addLetterToSpot(letter) {
    if (currentRow < rows.length && currentSpot < spots.length) {
        spots[currentSpot].textContent = letter;
        currentSpot++;
    }
}