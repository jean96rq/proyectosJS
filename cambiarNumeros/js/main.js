let contador=0;

const value=document.getElementById('value')
const btns=document.querySelectorAll('.btn')

// const btnDisminuir=document.querySelector('desenso')
// const btnReniciar=document.querySelector('reniciar')
// const btnImcrementar=document.querySelector('incrementar')

btns.forEach((btn)=>{
 btn.addEventListener('click',(e)=>{
    const styles=e.currentTarget.classList;
    if(styles.contains('desenso')){
        contador--
    }
    else if(styles.contains('reniciar')){
        contador=0
    }
    else{
        contador++
    }
    if(contador<0){
        value.style.color="red"
    }
    if(contador>0){
        value.style.color="green"
    }
    if(contador===0){
        value.style.color="#007bff"
    }
    value.textContent=contador;
   
 })
})