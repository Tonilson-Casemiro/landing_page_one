

indicator = document.querySelector('.indicator')

const max_height = document.body.scrollHeight - innerHeight

window.addEventListener('scroll', ()=>{
 const percentage = (window.scrollY / max_height) * 100
 indicator.style.width = `${percentage}%`
})