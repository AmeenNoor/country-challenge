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

    let icons = document.getElementsByClassName('icon');
    for (let icon of icons) {
        icon.addEventListener("click", function () {
            if (icon.id === "settings") {
                navigateToSettingsWindow();
            } else if (icon.id === "info") {
                navigateToInfoWindow();
            } else {
                navigateToStatisticWindow();
            }
        });
    }

    let closeCircles = document.getElementsByClassName('fa-circle-xmark');
    for (let closeCircle of closeCircles) {
        closeCircle.addEventListener("click", function () {
            if (closeCircle.id === "close-setting-window") {
                closeSettingsWindow();
            } else if (closeCircle.id === "close-info-window") {
                closeInfoWindow();
            } else {
                closeStatisticWindow();
            }
        });
    }

    let switchCheckbox = document.getElementById("switchCheckbox");
    switchCheckbox.addEventListener("change", changeToDarkMode);

    let playAgainWonButton = document.getElementById('play-again-win-button');
    playAgainWonButton.addEventListener("click", function () {
        resetGame();
        hideCongratsMessage();
    });

    let playAgainLoseButton = document.getElementById('play-again-lose-button');
    playAgainLoseButton.addEventListener("click", function () {
        resetGame();
        hideOopsMessage();
    });


});

let currentRow = 0;
let currentSpot = 0;
let rows = document.getElementsByClassName('row');
let spots = rows[currentRow].children;
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

let secret = secretWord();

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
            spots[i].style.backgroundColor = "#FE7F9C";
        } else {
            spots[i].style.backgroundColor = "#7393B3";
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
                    color = "#FE7F9C";
                } else {
                    color = "#7393B3";
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

// ***************************************************************************

/**
 * Function to hide spots and keyboard block
 */
function hideSpotsAndKeyboard() {
    let guessesArea = document.getElementById('guesses');
    let keyboardArea = document.getElementById('keyboard');
    guessesArea.style.display = 'none';
    keyboardArea.style.display = 'none';
}

/**
 * Function to show spots and keyboard block
 */
function showSpotsAndKeyboard() {
    let guessesArea = document.getElementById('guesses');
    let keyboardArea = document.getElementById('keyboard');
    guessesArea.style.display = 'flex';
    keyboardArea.style.display = 'flex';
}

/**
 * Function to hide nav icons 
 */
function hideIcons() {
    let navIcon = document.getElementById('icons');
    navIcon.style.display = 'none';
}

/**
 * Function to show nav icons 
 */
function showIcons() {
    let navIcon = document.getElementById('icons');
    navIcon.style.display = 'flex';
}

/**
 * Function to display settings window and hide other windows
 */
function navigateToSettingsWindow() {
    let setting = document.getElementById('setting-window');
    let info = document.getElementById('info-window');
    let statistic = document.getElementById('statistic-window');
    setting.style.display = 'block';
    info.style.display = 'none';
    statistic.style.display = 'none';
    hideSpotsAndKeyboard();
    hideIcons();
}

/**
 * Function to display info window and hide others window
 */
function navigateToInfoWindow() {
    let info = document.getElementById('info-window');
    let setting = document.getElementById('setting-window');
    let statistic = document.getElementById('statistic-window');
    info.style.display = 'block';
    setting.style.display = 'none';
    statistic.style.display = 'none';
    hideSpotsAndKeyboard();
    hideIcons();
}

/**
 * Function to display statistic window and hide others window
 */
function navigateToStatisticWindow() {
    let statistic = document.getElementById('statistic-window');
    let setting = document.getElementById('setting-window');
    let info = document.getElementById('info-window');
    statistic.style.display = 'block';
    setting.style.display = 'none';
    info.style.display = 'none';
    hideSpotsAndKeyboard();
    hideIcons();
}

// ***************************************************************************
/**
 * Function to close settings window when player press x at the corner 
 */
function closeSettingsWindow() {
    let setting = document.getElementById('setting-window');
    setting.style.display = 'none';
    showSpotsAndKeyboard();
    showIcons();
}

/**
 * Function to close info window
 */
function closeInfoWindow() {
    let info = document.getElementById('info-window');
    info.style.display = 'none';
    showSpotsAndKeyboard();
    showIcons();
}

/**
 * Function to close statistic window
 */
function closeStatisticWindow() {
    let statistic = document.getElementById('statistic-window');
    statistic.style.display = 'none';
    showSpotsAndKeyboard();
    showIcons();
}

// ***************************************************************************
// https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp

function changeToDarkMode(event) {
    let bodyPage = document.body;
    let statistic = document.getElementById('statistic-window');
    let setting = document.getElementById('setting-window');
    let info = document.getElementById('info-window');
    if (event.target.checked) {
        bodyPage.style.backgroundColor = '#303179';
        bodyPage.style.color = '#f5cac2';
        statistic.style.boxShadow = "0 0 60px 0 #f5cac2";
        setting.style.boxShadow = "0 0 60px 0 #f5cac2";
        info.style.boxShadow = "0 0 60px 0 #f5cac2";
    } else {
        bodyPage.style.backgroundColor = '#f5cac2';
        bodyPage.style.color = '#303179';
        statistic.style.boxShadow = "0 0 60px 0 #303179";
        setting.style.boxShadow = "0 0 60px 0 #303179";
        info.style.boxShadow = "0 0 60px 0 #303179";
    }
}

// ***************************************************************************

/**
 * Function to display congratulation message and hide others window
 */
function displayCongratsMessage() {
    let winDiv = document.getElementById('win');
    let statistic = document.getElementById('statistic-window');
    let setting = document.getElementById('setting-window');
    let info = document.getElementById('info-window');
    winDiv.style.display = 'block';
    hideIcons();
    statistic.style.display = 'none';
    setting.style.display = 'none';
    info.style.display = 'none';
    hideSpotsAndKeyboard();
}

/**
 * Function to hide congratulation message and display spots and keyboard block
 */
function hideCongratsMessage() {
    let winDiv = document.getElementById('win');
    let statistic = document.getElementById('statistic-window');
    let setting = document.getElementById('setting-window');
    let info = document.getElementById('info-window');
    winDiv.style.display = 'none';
    statistic.style.display = 'none';
    setting.style.display = 'none';
    info.style.display = 'none';
    showSpotsAndKeyboard();
    showIcons();
}

/**
 * Function to display oops message if player didn't quess the correct country 
 */
function displayOopsMessage() {
    let loseDiv = document.getElementById('lose');
    let statistic = document.getElementById('statistic-window');
    let setting = document.getElementById('setting-window');
    let info = document.getElementById('info-window');
    let secret = secretWord();
    let secretInspan = document.getElementById('correct-country');
    secretInspan.innerText = secret;   // Love Maths project (https://ameennoor.github.io/love-math/)
    loseDiv.style.display = 'block';
    hideIcons();
    statistic.style.display = 'none';
    setting.style.display = 'none';
    info.style.display = 'none';
    hideSpotsAndKeyboard();
}

/**
 * Function to hide oops message
 */
function hideOopsMessage() {
    let loseDiv = document.getElementById('lose');
    let statistic = document.getElementById('statistic-window');
    let setting = document.getElementById('setting-window');
    let info = document.getElementById('info-window');
    loseDiv.style.display = 'none';
    statistic.style.display = 'none';
    setting.style.display = 'none';
    info.style.display = 'none';
    showSpotsAndKeyboard();
    showIcons();
}

// ***************************************************************************
// Love Maths Project(https://ameennoor.github.io/love-math/)

/**
 * Function to increment the games played score
 */
function incrementGamesPlayedScore() {
    let oldScore = parseInt(document.getElementById("gamesPlayed").innerText);
    document.getElementById("gamesPlayed").innerText = ++oldScore;
}

/**
 * Function to increment the games won score
 */
function incrementGamesWonScore() {
    let oldScore = parseInt(document.getElementById("gamesWon").innerText);
    document.getElementById("gamesWon").innerText = ++oldScore;
}

/**
 * Function to increment the games lost score
 */
function incrementGamesLostScore() {
    let oldScore = parseInt(document.getElementById("gamesLost").innerText);
    document.getElementById("gamesLost").innerText = ++oldScore;
}

// ***************************************************************************
