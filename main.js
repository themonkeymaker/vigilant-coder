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

var cards = [];
cards[0] = 'https://cdn4.iconfinder.com/data/icons/poker-cards/512/card_queenclub-512.png';
cards[1] = 'https://cdn4.iconfinder.com/data/icons/poker-cards/512/card_kingheart_kopia-512.png';
cards[2] = '';
cards[3] = '';
cards[4] = '';
cards[5] = '';

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