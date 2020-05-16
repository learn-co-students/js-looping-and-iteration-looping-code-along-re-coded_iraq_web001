
function writeCards(name,events){
  let thank=[];
  for(let i=0;i<name.length;i++){
    thank.push(`Thank you, ${name[i]}, for the wonderful ${events} gift!`);

  }
  return thank;
}
writeCards(["Ada", "Brendan", "Ali"], "surprise");

let countup = 10;
function countDown(countup){
while (countup >= 0 ) {
  console.log(countup--);
}
return countup;
}
countDown(countup)
