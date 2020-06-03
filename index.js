// Code your solutions in this file
function writeCards(names, Str) {
  let result = [];
 for (let i = 0; i < names.length; i++) {
   result.push(`Thank you, ${names[i]}, for the wonderful ${Str} gift!`);
 }
 return result ;
}

function countDown(num){
  while (num>=0) {
    console.log(num);
    num--;
  }
}
