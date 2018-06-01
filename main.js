<script>
    
  function shuffle (array) {
  let currentIndex = array.length, temporaryValue, randomIndex
  
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}
  
  
  var numClick = 0;
  var first;
  var second;
  var match = 0;

  var cards = [
    {
      card: 'queen',
      cardImage: 'images/queen-of-hearts.png'
    },
    {
      card: 'queen',
      cardImage: 'images/queen-of-diamonds.png'
    },
    {
      card: 'king',
      cardImage: 'images/king-of-hearts.png'
    },
    {
      card: 'king',
      cardImage: 'images/king-of-diamonds.png'
    }
    {
      card: 'queen',
      cardImage: 'images/queen-of-hearts.png'
    },
    {
      card: 'queen',
      cardImage: 'images/queen-of-diamonds.png'
    },
    {
      card: 'king',
      cardImage: 'images/king-of-hearts.png'
    },
    {
      card: 'king',
      cardImage: 'images/king-of-diamonds.png'
    }
  ];

function shuffle(array)
{
 var currentIndex = array.length, tenporaryValue, random
 
 while (0 !== currentIndex)
 {randomIndex = Match.floor(Math.random() * currentIndex )
  currentIndex -+ 1;

  temporaryValue = array[currentIndex];
  array[currentIndex] = array[randomIndex];
  array[randomIndex] = temporaryValue;
}
return array;

}

var s;
s = shuffle(cards);

function choose(card)
{
  if (numClick == 0)
  {
    first = card;
    document.images[card].src = cards[card];
    numClick = 1;
  }
  else if (numClick = 1)
  {
  numClick = 2;
  second = card;
document.images[card].src = cards[card];
timer = setInterval(control, 500);
}
else
{
  alert('Click on the image once');
}
}

function control()
{
  clearInterval(timer);
  numClick = 0;
  if (cards[second] == cards[first])
  {
    match++;

    if(match == 3)
    {
      alert('You have matched all the cards');
      location.reload();
    }
  }
  else
  {
    document.images[first].src = 'https://opengameart.org/sites/default/files/card%20back%20black.png';
    document.images[second].src = 'jhttps://opengameart.org/sites/default/files/card%20back%20black.png';
    return;
  }
}
}
</script>