
new Swiper('.swiper',{
  pagination: {
    el: '.swiper-clinick__pagination.swiper-pagination',
    clickable: true,
  },

  // Перетаскивание на ПК
  simulateTouch: true,
  
  // Чувствительность свайпа
  touchRatio: 1,

  // Угол срабатывания свайпа/перетаскивания
  touchAngle: 45,

  // Курсор перетаскивания
  grabCursor: true,

  // Управление клавиатурой
  keyboard: {
      // включить/выключить
      enabled: true,

      // Вкл/Выкл только когда слайдер в пределах вьюпорта
      onlyInViewport: true,

      // включить/выключить управление клавиатурой PageUp, pageDown
      pageUpDown: true,
  },
  // Автовысота
  autoHeihgt: true,

  // Количство слайдов для показа
  slidesPerView: 1,

  // Отступ между слайдами
  spaceBetween: 0,

  breakpoints: {
      320: {
        slidesPerView: 1,
      },
      767: {
          slidesPerView: 1,
      },
      991: {
          slidesPerView: 1,
      },
      
    },
});