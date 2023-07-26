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

/**
 * ensures the player enters a 5-letter word in each row. It then verifies whether 
 * the guessed word matches the correct word. If not, the player will be granted 
 * 6 lives to make further attempts at guessing the correct word. If the player 
 * fails to guess the word within these attempts, they will be prompted to play again.
 */
function checkGuess() {
    let guessed = guessedWord();
    if (guessed.length !== spots.length) {
        alert('please enter a 5 letter word!');
    } else {
        addColorToSpot();
        addColorToKeyboard();
        if (guessed === secret) {
            displayCongratsMessage();
            incrementGamesPlayedScore();
            incrementGamesWonScore();
        } else if (currentRow >= rows.length - 1) {
            displayOopsMessage();
            incrementGamesPlayedScore();
            incrementGamesLostScore();
        } else {
            currentRow++;
            currentSpot = 0;
            spots = rows[currentRow].children;
        }
    }

}

/**
 *  Function to remove letter from spots
 */
function removeLetter() {
    if (currentSpot > 0) {
        currentSpot--;
        spots[currentSpot].textContent = '';
    }
}

/**
 *  Function to add letter from keyboard to spots
 */
function addLetterToSpot(letter) {
    if (currentRow < rows.length && currentSpot < spots.length) {
        spots[currentSpot].textContent = letter;
        currentSpot++;
    }
}

/** 
 * Function to assign guessed country by user to guessWord variable.
*/
function guessedWord() {
    let guessWord = '';
    for (let i = 0; i < spots.length; i++) {
        guessWord += spots[i].textContent;
    }
    return guessWord;
}

/**
 * Function to add color to spots  If the guessed letter is correct and in the 
 * right position, it's marked green; if correct but in the wrong position, 
 * it's marked orange. Otherwise, it's marked gray to indicate an incorrect letter.
 */
function addColorToSpot() {
    let guessed = guessedWord();
    for (let i = 0; i < spots.length; i++) {
        if (guessed[i] === secret[i] && secret.includes(spots[i].textContent)) {
            spots[i].style.backgroundColor = "#7FFFD4";
        } else if (guessed[i] !== secret[i] && secret.includes(spots[i].textContent)) {
            spots[i].style.backgroundColor = "#FBCEB1";
        } else {
            spots[i].style.backgroundColor = "#E7E6E9";
        }
    }
}

/**
 * Function to add color to keyboard If the guessed letter is correct and in 
 * the right position, it's marked green; if correct but in the wrong position,
 *  it's marked orange. Otherwise, it's marked gray to indicate an incorrect letter.
 */
function addColorToKeyboard() {
    let guessed = guessedWord();
    let keyboardRows = document.getElementsByClassName('keyboard_row');

    for (let i = 0; i < keyboardRows.length; i++) {
        let keyboardKeys = keyboardRows[i].getElementsByClassName('letter');
        for (let j = 0; j < keyboardKeys.length; j++) {
            let color;
            if (guessed.includes(keyboardKeys[j].textContent)) {
                let secretLetterIndex = secret.indexOf(keyboardKeys[j].textContent);
                let guessedLetterIndex = guessed.indexOf(keyboardKeys[j].textContent);

                if (secretLetterIndex === guessedLetterIndex) {
                    color = "#7FFFD4";
                } else if (secret.includes(keyboardKeys[j].textContent)) {
                    color = "#FBCEB1";
                } else {
                    color = "#E7E6E9";
                }
            }

            keyboardKeys[j].style.backgroundColor = color;
        }
    }
}

/**
 * Function to reset the game after player win or lose
 */
function resetGame() {
    for (let i = 0; i < document.getElementsByClassName('spot').length; i++) {
        document.getElementsByClassName('spot')[i].textContent = '';
        document.getElementsByClassName('spot')[i].style.backgroundColor = "white";
    }
    for (let i = 0; i < document.getElementsByClassName('key').length; i++) {
        document.getElementsByClassName('key')[i].style.backgroundColor = "#f2f2f2";
    }

    currentSpot = 0;
    currentRow = 0;
    spots = rows[currentRow].children;
    guessed = guessedWord();
    secret = secretWord();
}