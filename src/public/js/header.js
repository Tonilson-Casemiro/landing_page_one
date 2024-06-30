

// Show or hidden menu navigation

overlay_menu_mobile =  document.querySelector('.overlay-menu-mobile')

function openNav(){
  overlay_menu_mobile.style.width = '100%'
}

function closeNav(){
  overlay_menu_mobile.style.width = '0%'
}





// Box shadow in header

header = document.querySelector('header')

itens_menu = document.querySelectorAll('.item-menu-desktop')
logo_name = document.querySelector('#container-logo span')
console.log(logo_name)

window.addEventListener('scroll',function(){
  if(scrollY >= 50){
    header.style.backgroundColor = '#161616'
    // header.style.backgroundColor = 'white'
    // logo_name.style.color = 'black'
    // itens_menu.forEach(element => {
    //   element.style.color = 'black'
    // });
  }
  else{
    header.style.backgroundColor = ''
    // logo_name.style.color = 'white'
    // itens_menu.forEach(element => {
    //   element.style.color = 'white'
    // });
  }
})





// Ocultando o menu mobile após um dos itens ser clicado
itens_menu_mobile = document.querySelectorAll('.item-menu-mobile')
// Retirando o show no nav ao clicar em um dos itens de menu
for (const element of itens_menu_mobile){
  element.addEventListener('click', function(){
    overlay_menu_mobile.style.width = '0%'
  })
}