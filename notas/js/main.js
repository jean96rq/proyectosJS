


const btn=document.getElementById('btn-noti')
const contenedor=document.getElementById('contenedor-noti')



btn.addEventListener('click', ()=>{
    crearNotificación();
})
function crearNotificación(){
    const notificacion = document.createElement('div');
    notificacion.classList.add('nota')
    notificacion.innerText ='Hola soy una notificación'

    contenedor.appendChild(notificacion)

    setTimeout(()=>{
        notificacion.remove();
    },3000)
}




