// Code your solutions in this file








function writeCards(a, b){
     let persons =[]

  for(var i=0; i<a.length ; i++){
 
    persons.push('Thank you, '+a[i]+', for the wonderful '+b+' gift!');

  }
  console.log(persons)
  return persons
}



writeCards(['Lisa', 'Kaitlin', 'Jan'], "surprise" );
 function  countDown(d){
   
    for(var i = d;i>=0;i--){
       
      console.log(i)
   }
 }
console.log(countDown(10))