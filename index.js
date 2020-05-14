const names = ["Rim", "Jack", "Aya"];
const events = ["Birthday"];
function writeCards(names,events){
 let greeting = []
  for (let i = 0; i < names.length; i++){
     greeting.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
  }
  return greeting;
}

function countDown(num){
  while (num >= 0){
    console.log(num);
   num--;
      }

}
