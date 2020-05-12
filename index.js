// Code your solutions in this file



function writeCards(names,eventName){
for( let i=0;i<=names.length-1;i++){

  names[i] =  `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
}
return names;
}
writeCards(["Lisa","Kaitlin","Jan"],"surprise");



function countDown(positiveInt){

while(positiveInt>=0){
console.log(positiveInt);
positiveInt--;

}

}
countDown(10);
