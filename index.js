const para =['surprise'];
function writeCards (name){
  let text =[];
  for( let i =0 ; i < name.length; i++){
   text .push(`Thank you, ${(name[i])}, for the wonderful ${(para)} gift!`);}
  return text
}
function countDown(number){
while(number>=0){
  console.log(number);
  number--;}
}