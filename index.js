const x =['surprise'];


function writeCards ( y){
  let z =[];
  for( let i =0 ; i< y.length;i++){
    z.push(`Thank you, ${(y[i])}, for the wonderful ${(x)} gift!`);
  }
  return z
}

function countDown(w){
while(w>=0){
  console.log(w);
  w--;
}
}
