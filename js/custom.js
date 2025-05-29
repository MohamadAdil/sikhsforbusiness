$(document).ready(function () {
  const swiper = new Swiper('.testimonial-slider', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    speed: 800,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
});