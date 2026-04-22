const swiper = new Swiper('.swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,



  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {

    0: {
      slidesPerView: 2
    },
    850: {
      slidesPerView: 3
    },
    
    1024: {
         slidesPerView: 4
    }
  }
});