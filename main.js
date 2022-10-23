import './node_modules/normalize.css'
import './style.css'

const iconBars = document.querySelector('.fa-bars')
const icons = document.querySelectorAll('.fa-solid')
const iconXmark = document.querySelector('.fa-xmark')
const listWrap = document.querySelector('.nav-wrap-box')

function changeIcons () {
    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            toogleIcons()
            showNavWrapper(icon)
        })
    })
}

function toogleIcons () {
    iconBars.classList.toggle('visible')
    iconXmark.classList.toggle('visible')
    listWrap.classList.toggle('visible')

}

changeIcons()

function showNavWrapper (icon) {

    if(icon.dataset.visible === '1') {
       
    } else 
        if(icon.dataset.visible === '0'){
        
    }
}
