const checkPrivacy = (event) => {
   if(event.checked  == true){
       document.getElementById('span-1').innerHTML='';
   }
   else{
    document.getElementById('span-1').innerHTML='Please agree to our terms';
   }
}

const checkPrivacy2 = (event) => {
   if(event.checked  == true){
       document.getElementById('span-2').innerHTML='';
   }
   else{
    document.getElementById('span-2').innerHTML='Can we call you to get started?';
   }
}