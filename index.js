// Code your solutions in this file
const cards = ["Lisa", "Kaitlin", "Jan"];
const cardsMessage = ["Thank you, Lisa, for the wonderful surprise gift!" , "Thank you, Kaitlin, for the wonderful surprise gift!", "Thank you, Jan, for the wonderful surprise gift!"]

function writeCards(cards) {
  for (let i = 0; i < cards.length; i++) {
    console.log("Thank you,${cards[i]}, for the wonderful surprise gift!");
  }
  return cardsMessage
}

function countDown() {
  let i = 10;
  while ( i >= 0 ) {
  console.log(i--);
  }
  return countDown
}