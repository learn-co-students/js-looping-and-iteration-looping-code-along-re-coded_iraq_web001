// Code your solutions in this file
const namesArray=["Ada", "Brendan", "Ali"];
function writeCards( namesArray, event ) {
  let thankYouCards = [];
  for ( let i = 0; i < namesArray.length; i++ ) {
    thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
  }
  return thankYouCards
}

function countDown(num){

  while(num>0){
    consle.log(num);
    num-=1;
}
consle.log(num)
}

