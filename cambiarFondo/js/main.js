const colors=["green","red","rgba(133,122,200)","#f15025"]
const btn=document.getElementById('btn')
const color=document.querySelector('.color')

function ObtenerNumerosAleatorios(){
    return Math.floor(Math.random()*colors.length) 
}

btn.addEventListener('click',()=>{
   const numeroAleatorio=ObtenerNumerosAleatorios();
   document.body.style.backgroundColor=colors[numeroAleatorio];
   color.textContent=colors[numeroAleatorio]
})