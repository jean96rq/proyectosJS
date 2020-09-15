
const btnAbriModal=document.querySelector('.modal-btn')
const btnCerrarModal=document.querySelector('.btn-close-modal')
const modal=document.querySelector('.modal')

btnAbriModal.addEventListener('click',()=>{
    modal.classList.add('abrirModal')
})
btnCerrarModal.addEventListener('click',()=>{
    modal.classList.remove('abrirModal')
})