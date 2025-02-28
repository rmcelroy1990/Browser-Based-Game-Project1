const gameBoard = document.getElementById('game-board');
const attempsDisplay = document.getElementById('attempts');
const cardsData = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'];
const scoreDisplay = document.getElementById('score');
let flippedCards = [];
let matchedCards = [];
let score = 0;
let attemps;


function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createCard(value) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = value;
    card.addEventListener('click', flipCard);
    return card;
}

function flipCard() {
    if (attempts === 0) return;
    if (score === 4) return;
    if (flippedCards.length < 2 && !flippedCards.includes(this) && !matchedCards.includes(this)) {
        this.classList.add(`flipped-${this.dataset.value}`);
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            checkForMatch();
        }
    }
}

function checkForMatch() {
    const [card1, card2] = flippedCards;
    
    if (card1.dataset.value === card2.dataset.value) {
        score += 1
        matchedCards.push(card1, card2);
        flippedCards = [];

        if (matchedCards.Cards.length === cardsData.length) {
     
        }
    } else {
        attempts -= 1
        setTimeout(() => {
            card1.setAttribute('class', 'card');
            card2.setAttribute('class', 'card');
            flippedCards = [];
        }, 1000);
    }
    updateAttemps();
    updateScore();
}

function startGame() {
    attemps = 3;
    score = 0;
    gameBoard.innerHTML = '';
    shuffleCards(cardsData);
    cardsData.forEach(value => {
        const card = createCard(value);
        gameBoard.appendChild(card);
    });
    updateAttemps();
    updateScore();
}

function updateScore() {
    if (score === 4) {
        scoreDisplay.textContent = "You Win";
    } else {
        scoreDisplay.textContent = `${score}`;
    }
}

function updateAttemps() {
    if (attempts === 0) {
        attemptsDisplay.textContent = "You Lose";
    } else {
        attemptsDisplay.textContent = `${attempts}`;
    }
}

startGame();