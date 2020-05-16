

function writeCards(cards,gifts) {
  const array = [];
  for (let i = 0; i < cards.length; i++) {
    array.push(`Thanks, ${cards[i]}, for the wonderful ${gifts}your gift!`);
  }

  return array;
}

writeCards([ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise');



function countDown(num) {
while(num >= 0){
  console.log(num);
  num--;
}

}


countDown(10);


