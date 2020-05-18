
Function writeCards(names,birthday){
  const newarray=[];
  for(let i=0;i<names.length;i++){
    newarray[i]=`Thank you, + ${names[i]} +, for the wonderful + ${ birthday}+ gift!`;
  }
  return newarray
}

writeCards(["Ada", "Brendan", "Ali"], "surprise");
countDown(10);