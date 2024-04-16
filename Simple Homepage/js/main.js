const lightButton = document.querySelectorAll('.light-btn')
const darkButton = document.querySelectorAll('.dark-btn')
const lightPage = document.querySelector('.light')
const darkPage = document.querySelector('.dark')

darkButton[0].addEventListener('click', function () {
    darkPage.style.display = 'flex'
    document.body.style.backgroundColor = '#111729'
    lightPage.style.display = 'none'
})

lightButton[1].addEventListener('click', function () {
    darkPage.style.display = 'none'
    lightPage.style.display = 'flex'
    document.body.style.backgroundColor = '#F2F9FE'
})