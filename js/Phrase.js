/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        //creates ul for phrase
        const phraseUl = document.querySelector('#phrase ul');
        phraseUl.innerHTML = '';
        const lettersToDisplay = this.phrase.split('');
        //creates li element for each letter of the phrase
        lettersToDisplay.forEach(letter => {
            const letterLi = document.createElement('li');
            letterLi.innerHTML = letter;
            phraseUl.appendChild(letterLi);

            if (letter === ' ') {
                letterLi.className = 'space';
            } else {
                letterLi.className = 'hide letter'
            }
        });
    }

    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */
    checkLetter(letter) {
        if (this.phrase.includes(letter)) { //checks for matching letter within phrase
            return true;
        } else {
            return false;
        }
    }

    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */
    showMatchedLetter(letter) {
        //gives class show to each letter in the phrase
        const allLi = document.querySelectorAll('.letter');
        allLi.forEach(li => {
            if (li.textContent === letter) {
                li.className = 'show';
            }
        });
    }
}
