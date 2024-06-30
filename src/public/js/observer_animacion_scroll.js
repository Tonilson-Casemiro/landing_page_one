


 
// Animacion to top
const observer_animacion_motionY_to_top = new IntersectionObserver((entries) => {
 entries.forEach((entry) =>{
  if(entry.isIntersecting){
   entry.target.classList.add('animacion-motionY-on')
  }else{
   entry.target.classList.remove('animacion-motionY-on')
  }
 })

})


const elements_animacion_motionY_to_top = document.querySelectorAll('.animacion-motionY-to-top-off')

elements_animacion_motionY_to_top.forEach(element => {
 observer_animacion_motionY_to_top.observe(element)
});












// Animacion to left

const observer_animacion_motionX_to_left = new IntersectionObserver((entries) => {
 entries.forEach((entry) =>{
  if(entry.isIntersecting){
   entry.target.classList.add('animacion-motionX-on')
  }else{
   entry.target.classList.remove('animacion-motionX-on')
  }
 })

})


const elements_animacion_motionX_to_left = document.querySelectorAll('.animacion-motionX-to-left-off')

elements_animacion_motionX_to_left.forEach(element => {
 observer_animacion_motionX_to_left.observe(element)
});




















// Animacion to right

const observer_animacion_motionX_to_right = new IntersectionObserver((entries) => {
 entries.forEach((entry) =>{
  if(entry.isIntersecting){
   entry.target.classList.add('animacion-motionX-on')
  }else{
   entry.target.classList.remove('animacion-motionX-on')
  }
 })

})


const elements_animacion_motionX_to_right = document.querySelectorAll('.animacion-motionX-to-right-off')

elements_animacion_motionX_to_right.forEach(element => {
 observer_animacion_motionX_to_right.observe(element)
});

















// Animacion of escale

const observer_animacion_scale_element = new IntersectionObserver((entries) => {
 entries.forEach((entry) =>{
  if(entry.isIntersecting){
   entry.target.classList.add('animacion_scale-element-on')
  }else{
   entry.target.classList.remove('animacion_scale-element-on')
  }
 })

})


const elements_animacion_scale_element = document.querySelectorAll('.animacion_scale-element-off')

elements_animacion_scale_element.forEach(element => {
 observer_animacion_scale_element.observe(element)
});





























// Animação de aumento a opacidade do elemento

const observer_animacion_opacity = new IntersectionObserver((entries) => {
 entries.forEach((entry) =>{
  if(entry.isIntersecting){
   entry.target.classList.add('animacion_opacity-on')
  }else{
   entry.target.classList.remove('animacion_opacity-on')
  }
 })

})


const elements_animacion_opacity = document.querySelectorAll('.animacion_opacity-off')

elements_animacion_opacity.forEach(element => {
 observer_animacion_opacity.observe(element)
});


