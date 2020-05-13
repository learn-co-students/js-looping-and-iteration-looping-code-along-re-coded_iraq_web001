// Code your solutions in this file
const names=[['Lisa','Kaitlin','Jan'],'surprise'];
const thanx =[];

writeCards (names[0],names[1]);

function writeCards(name,eventName){
  for(let i=0;i<name.length;i++)
  {
    thanx[i]=`Thank you, ${name[0,i]}, for the wonderful ${eventName} gift!`;
  }
return thanx;
}

console.log(thanx);

function countDown(x)
{
  for(let j=x;j>=0;j--)
  console.log(j);
}
countDown(10);