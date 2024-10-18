let string="";
let Buttons=document.querySelectorAll('.button');
Array.from(Buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='C'){
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='+/-'){
            string="Use any of the one";
            document.querySelector('input').value=string;
        }
        else{
            console.log(e);
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})