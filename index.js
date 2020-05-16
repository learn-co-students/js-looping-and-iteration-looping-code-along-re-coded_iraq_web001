function writeCards(names, eventName){
  let msg=[];
  for(let a=0;a<names.length;a++){
    msg[a] = "thank you, " +names[a]+ ", for the wonderful " +eventName+ " gift!"
  }
  return msg;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(positiveInt){
  while(positiveInt>=0){
  console.log(positiveInt);
  positiveInt--;
}
}

countDown(10);