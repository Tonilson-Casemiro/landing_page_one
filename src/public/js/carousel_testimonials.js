// carousel team

$(".carouselTestimonials").owlCarousel({
 items : 3,
 // loop : true,
 margin : 10,
 nav : false,
 autoplay: true,
 autoplayTimeout: 2000,
 autoplayHoverPause: true,
 startPosition: 1,
 slideBy: 1,
 // slideTransition: 'ease',
 rtl: false,
 responsive: {
   0:{
     items: 1
   },

   1040:{
     items: 1
   },
   
 }

 
})