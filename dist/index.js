const lightBtn = document.querySelector('#light')
const darkBtn = document.querySelector('#dark')
console.log(lightBtn, darkBtn)
lightBtn.addEventListener('click', () => {
  document.documentElement.classList.remove('dark')
})

darkBtn.addEventListener('click', () => {
  document.documentElement.classList.add('dark')
})