const swiper = new Swiper('.swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

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
      slidesPerView: 4
    },
    850: {
      slidesPerView: 4
    },
    
    1024: {
         slidesPerView: 4
    }
  }
});