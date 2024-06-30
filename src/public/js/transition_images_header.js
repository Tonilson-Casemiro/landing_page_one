
// time to show next images
let time = 5000


images = document.querySelectorAll('.contents-in-header img')
max_images = images.length
count = 0


function next_image(){
  
  images[count].classList.remove('image-selected')
  count++

  if(count >= max_images){
   count = 0
  }

  images[count].classList.add('image-selected')
  
}


function start(){
 setInterval(()=>{
  // change image
  next_image()
 }, 5000)
}


window.addEventListener('load', start)
