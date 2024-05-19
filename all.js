const spBtn = document.querySelector('.SP_btn')
const navList = document.querySelector('.navList')
spBtn.addEventListener('click',()=>{
    navList.classList.toggle('navList--active')
})