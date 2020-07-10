document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
  {
    name: 'blue',
    img: 'images/blue.png'
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
    name: 'green',
    img: 'images/green.png'
  },
  {
    name: 'orange',
    img: 'images/orange.png'
  },
  {
    name: 'orange',
    img: 'images/orange.png'
  },
  {
    name: 'purple',
    img: 'images/purple.png'
  },
  {
    name: 'purple',
    img: 'images/purple.png'
  },
  {
    name: 'red',
    img: 'images/red.png'
  },
  {
    name: 'red',
    img: 'images/red.png'
  },
  {
    name: 'yellow',
    img: 'images/yellow.png'
  },
  {
    name: 'yellow',
    img: 'images/yellow.png'
  }
]
  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];
  
  // create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipcard)
      grid.appendChild(card);
    }
  }

  
  function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if(cardsChosen[0] === cardsChosen[1]){
      alert('You found a match!');
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('try again');
    }
    cardsChosen = [];
    cardsChosenId = [];
  }
  
  function flipCard(){
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId);
    if(cardsChosen.length === 2){
      setTimeout(checkForMatch(),500);
    }
  }

createBoard();
  
});
