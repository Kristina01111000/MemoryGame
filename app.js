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

  // create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      //card.addEventListener('click', flipcard)
      grid.appendChild(card);
    }
  }


createBoard();
  
});
