/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startGameButton = document.querySelector('#btn__reset');
const letterButtons = document.querySelectorAll('.key');
let game;

//START GAME BUTTON EVENT LISTENER
startGameButton.addEventListener("click", (e) => {
    game = new Game();
    game.startGame();
});

//BUTTON EVENT LISTENERS
letterButtons.forEach(letter => {
    letter.addEventListener("click", (e) => {
        game.handleInteraction(e.target);
    })
});
