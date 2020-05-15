// Code your solutions in this file
function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}

function writeCards(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push("Thank you, " + arr[i] + ", for the wonderful surprise gift!");
  }
  return newArr;
}
