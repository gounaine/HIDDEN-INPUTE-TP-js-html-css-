let button=document.querySelector('.btn');
let input=document.querySelector('input');

button.addEventListener('click',()=>{
    
    var computedStyle = getComputedStyle(input); 
    var w = computedStyle.getPropertyValue("width");
  
    if(w=='9.33333px'){
         input.style.width='200px';

       
    }else{
       input.style.width='0px'; 
       
        
    }

})