/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            { phrase: "life is like a box of chocloates" },
            { phrase: "there is no trying" },
            { phrase: "may the force be with you" },
            { phrase: "you have to see the matrix for yourself" },
            { phrase: "you talking to me" }
        ];
        this.activePhrase = 'null';
    }

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        const randomPhrase = game.getRandomPhrase();
        const phrase = new Phrase(randomPhrase.phrase);
        phrase.addPhraseToDisplay();
        this.activePhrase = phrase;
        document.querySelector('#overlay').style.display = 'none';
    }

    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
     */
    handleInteraction(button) {
        button.disabled = true;

        //CHECK IF WON
        if (this.checkForWin() == true) {
            this.gameOver('win');
        }

        //IF WRONG/CORRECT LETTER SELECTED
        if (this.activePhrase.checkLetter(button.textContent) == false) {
            button.className = 'wrong';
            this.removeLife();
        } else {
            button.className = "chosen";
            this.activePhrase.showMatchedLetter(button.textContent);
            this.checkForWin();
        }

    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const showing = document.querySelectorAll('.show').length;
        const wholePhrase = document.querySelectorAll('#phrase li').length;
        const spaces = document.querySelectorAll('.space').length;
        const phraseLength = wholePhrase - spaces;
        if (phraseLength === showing) { //compares length of phrase and displayed letters of the phrase
            this.gameOver(true);
            return true;
        } else {
            return false;
        }
    }

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {
        this.missed += 1;
        const lifeIcon = document.querySelector('img[src="images/liveHeart.png"]');
        lifeIcon.src = "images/lostHeart.png";

        //USER GETS 5 LIVES
        if (this.missed === 5) {
            this.gameOver(false);
        }
    }

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {
        const overlayDiv = document.querySelector('#overlay');
        const letterChosen = document.querySelectorAll('.chosen');
        const letterWrong = document.querySelectorAll('.wrong');
        const lives = document.querySelectorAll('#scoreboard img');
        const wholePhrase = document.querySelectorAll('#phrase li');
        const gameOverMessage = document.querySelector('#game-over-message');

        if (gameWon === true) {
            gameOverMessage.textContent = "CONGRATULATIONS, YOU WIN!!!";
            overlayDiv.className = 'win';

        } else if (gameWon === false) {
            gameOverMessage.textContent = "SORRY, BETTER LUCK NEXT TIME:(";
            overlayDiv.className = 'lose';

        }

        //RESETS AFTER WIN OR LOSE
        overlayDiv.style.display = '';
        this.missed = 0
        lives.forEach(life => life.src = 'images/liveHeart.png');
        wholePhrase.forEach(li => li.remove());
        letterWrong.forEach(letter => letter.disabled = false);
        letterWrong.forEach(letter => letter.className = 'key');
        letterChosen.forEach(letter => letter.disabled = false);
        letterChosen.forEach(letter => letter.className = 'key');
    }

}
