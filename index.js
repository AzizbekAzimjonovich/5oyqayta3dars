const showBtn=document.getElementById('show-btn')
const modal=document.getElementById('modal')
const closeBtn=document.getElementById('close-btn')
const overlay=document.getElementById('overlay')

showBtn.addEventListener('click',()=>{
    modal.classList.remove('hiden')
    overlay.classList.remove('hiden')
})

const addHiden=()=>{
    modal.classList.add('hiden')
    overlay.classList.add('hiden')
}
closeBtn.addEventListener('click',addHiden)

overlay.addEventListener('click',addHiden)

document.addEventListener('keydown',(e)=>{
    if(e.key=='Escape'){
    addHiden
    }
})
