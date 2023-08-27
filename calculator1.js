const screen= document.getElementById("value");
const btn= document.querySelectorAll('button')
for(item of btn){
    item.addEventListener('click', (e)=>{
        btnText= e.target.innerText;
        if(btnText == 'C'){
            screen.value = '';
        }else if(btnText =='='){
            screen.value = eval(screen.value);  
              }
        else{
            screen.value += btnText;
        }
    })

}