$(document).ready(function() {
    $('input[name=phone]').mask("+7 (999) 999-99-99");
    $('.carousel__inner').slick({
        slidesToShow: 3,
        adaptiveHeight: true,
        speed: 1000,
        autoplay: false,
        autoplaySpeed: 1500,
        centerMode: true,
        draggable: false,
        swipe: false,
        centerPadding: '0px',
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              centerMode: false,
              swipe: true
            }
          }
        ]
      });
      function show() {
        $(".slick-arrow").css("display", "block");
      }
      // $('.slick-arrow').click(function() {
      //   $(".slick-arrow").css("display", "none");
      //   setTimeout(show, 1000)
      // }); дял jquery

      const arrows =  document.querySelectorAll('.slick-arrow');
      const _hideArrow = e => {
        e.preventDefault()
        arrows.forEach(item => item.style.display = 'none')
        setTimeout(show, 1000)
      }
      arrows.forEach(item => {
        item.addEventListener('click', _hideArrow)
      })
    window.addEventListener('DOMContentLoaded', () => {
      const menu = document.querySelector('.header__navigation'),
      menuItem = document.querySelectorAll('.header__item'),
      hamburger = document.querySelector('.hamburger');
  
      hamburger.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('header__navigation_active');
      });
  
      menuItem.forEach(item => {
          item.addEventListener('click', () => {
              hamburger.classList.toggle('hamburger_active');
              menu.classList.toggle('header__navigation_active');
          })
      })
  })
  $("a[href^=#]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});
});