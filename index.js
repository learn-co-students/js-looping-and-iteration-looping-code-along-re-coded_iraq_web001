// Code your solutions in this file
function writeCards(names,eventName) {
  const newArr  = [];
  for (let i = 0; i < names.length; i++) {
      newArr.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return newArr;
}


writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(countDown) {
    while (countDown>=0){
        console.log(countDown);
        countDown--;
    }
}

countDown(10);
