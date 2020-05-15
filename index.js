// Code your solutions in this file
// const gift=["Ada", "Brendan", "Ali"];
function writeCards (arrayOfNames){
   const gift = [];
  for(let i=0;i < arrayOfNames.length;i++){
    gift.push(`Thank you, ${arrayOfNames[i]}, for the wonderful surprise gift!` );
  }
  return gift;
}
function countDown(number){
while (number >= 0) {
  console.log(number--);
}
}
