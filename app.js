document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'blue',
      img: 'images/blue'
    },
    {
      name: 'blue',
      img: 'images/blue'
    },
    {
      name: 'green',
      img: 'images/green'
    },
    {
      name: 'green',
      img: 'images/green'
    },
    {
      name: 'orange',
      img: 'images/orange'
    },
    {
      name: 'orange',
      img: 'images/orange'
    },
    {
      name: 'purple',
      img: 'images/purple'
    },
    {
      name: 'purple',
      img: 'images/purple'
    },
    {
      name: 'red',
      img: 'images/red'
    },
    {
      name: 'red',
      img: 'images/red'
    },
    {
      name: 'yellow',
      img: 'images/yellow'
    }
    {
      name: 'yellow',
      img: 'images/yellow'
    }
  ]

  // create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', 'images/red.png');
      card.setAttribute('data-id', i);
      //card.addEventListener('click', flipcard)
      grid.appendChild(card);
    }
  }


createBoard();
  
});
