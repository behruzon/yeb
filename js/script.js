let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let copy = document.querySelectorAll('p')
let copy2 = document.querySelectorAll('h1')

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
})



let cons = ()=>{
    alert('ей отстань от моего кода!')
    copy.style.userSelect = 'none'
}


copy.addEventListener('copy', cons)