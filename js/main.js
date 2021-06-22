
const result=document.getElementById('result');
const submit=document.getElementById('submit');




 function binary(e)
 {
     e.preventDefault();
    const num=document.getElementById('number').value;
    if(num === ' ')
    {
     alert("Enter a Number");
   }
   else if(num<0)
   {
      alert("Enter A positive Number"); 
   }
   else{
    result.style.visibility='visible';
   }
  

  BinaryNumber= Number(num).toString(2);
   result.innerText=BinaryNumber;
  
    
 }

 submit.addEventListener('click', binary);