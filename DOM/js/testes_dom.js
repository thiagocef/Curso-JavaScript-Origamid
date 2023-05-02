let body = document.querySelector('body')
let iToggle = document.querySelector('.fa-toggle-off')

function darkMode(){
    body.classList.toggle('.darkMode')
}

iToggle.addEventListener('click', darkMode)