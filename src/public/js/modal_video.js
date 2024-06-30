body = document.body

// Modal video - aboutUS

open_modal_video = document.querySelector('#section-choose-us .container-to-open-video')
overlay_modal_video = document.querySelector('.overlay-modal-video')
close_modal_video = document.querySelector('.close-modal-video')

// Abrir o modal de video
open_modal_video.addEventListener('click', function(){
  overlay_modal_video.classList.add('show')
  body.classList.add('removeOverflow')
})

// fechar o modal do video
close_modal_video.addEventListener('click', function(){
  overlay_modal_video.classList.remove('show')
  body.classList.remove('removeOverflow')
})