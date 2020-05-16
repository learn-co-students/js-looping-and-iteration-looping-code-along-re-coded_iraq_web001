// Code your solutions in this file

// Code your solutions in this file



function writeCards(arr,surprise){

let thankYou=[];

  for(let i=0;i<arr.length;i++){
  thankYou[i]="Thank you, " +arr[i]+`, for the wonderful ${surprise} gift!`;
  }
  return thankYou;
}

writeCards(["Lisa","Kaitlin","Jan"],"surprise");

function countDown(num){
  
  while(num>=0){
    console.log(num);
    num--;
  }
}

countDown(10);
