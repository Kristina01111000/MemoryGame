document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'blue',
      img: 'images/blue.png'
    },
    {
      name: 'green',
      img: 'images/green.png'
    },
    {
      name: 'red',
      img: 'images/red.png'
    },
    {
      name: 'orange',
      img: 'images/orange.png'
    },
    {
      name: 'yellow',
      img: 'images/yellow.png'
    },
    {
      name: 'purple',
      img: 'images/purple.png'
    },
    {
      name: 'blue',
      img: 'images/blue.png'
    },
    {
      name: 'green',
      img: 'images/green.png'
    },
    {
      name: 'red',
      img: 'images/red.png'
    },
    {
      name: 'orange',
      img: 'images/orange.png'
    },
    {
      name: 'yellow',
      img: 'images/yellow.png'
    },
    {
      name: 'purple',
      img: 'images/purple.png'
    }
  ]

  // shuffle the cards (Fisher-yates)
  // doesn't allow game board to load when used, using sort method below
  function shuffle(cardArray){
    var currentIndex = array.length;
    var tempValue;
    var randomIndex;
    while(currentIndex > 0){
      randomIndex = Math.floor(Math.random()* currentIndex);
      currentIndex--;
      tempValue = cardArray[currentIndex];
      cardArray[currentIndex] = cardArray[randomIndex];
      cardArray[randomIndex] = tempValue;
    }
    return cardArray;
  }

  // not a perfect shuffle method, but it works for now
  cardArray.sort(() => 0.5 - Math.random());
  
  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  const wordsDisplay = document.querySelector('#words');
  const movesDisplay = document.querySelector('#moves');
  const timerDisplay = document.querySelector('#timer');
  let moves = 0;
  var cardsChosen = [];
  var cardsChosenId = [];
  const cardsWon = [];
  var second = 0;
  var minute = 0;
  var interval;

  //create  board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      wordsDisplay.textContent ='You have clicked the same image!';
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      wordsDisplay.textContent = 'You found a match';
      cards[optionOneId].setAttribute('src', 'images/black.png');
      cards[optionTwoId].setAttribute('src', 'images/black.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
      moves++;
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      wordsDisplay.textContent ='Sorry, try again';
      moves++;
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = 'Score: ' + cardsWon.length;
    movesDisplay.textContent = 'Moves: ' + moves;
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!';
      wordsDisplay.textContent ='Press reset button to play again.';;
    }
  }
  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500);
    }
  }
  // go up by one second every second
  /*
  function startTimer(){
    interval = setInterval(function () {
      timer.textContent = minute + ' minutes ' + second ' seconds';
      second++;
      if (second == 60){
        second = 0;
        minute++;
      }            
    },1000);
  }*/

  createBoard();
})
