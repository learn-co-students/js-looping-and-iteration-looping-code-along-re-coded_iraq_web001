// Code your solutions in this file
const cards =[];

function writeCards(names, eventName) {
  for (let i = 0; i < names.length; i++){
  cards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
return cards;
}

function countDown(integar) {
  let i = integar;
  while (i >= 0) {
  console.log(i);
  i--;
  }
}