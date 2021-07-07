function writeCards(names, eventName){
  let msg=[];
  for(let a=0;a<names.length;a++){
    msg[a] = "Thank you, " +names[a]+ ", for the wonderful " +eventName+ " gift!"
  }
  return msg;
}

writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");

function countDown(positiveInt){
  while(positiveInt>=0){
  console.log(positiveInt);
  positiveInt--;
}
}

countDown(10);