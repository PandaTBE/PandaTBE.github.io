$(document).ready(function() {
    $('.carousel__inner').slick({
        arrows: true,
        dots: true,
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false,
            }
          }
        ]
      });
      $('.expert__content').slick({
        arrows: true,
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left1.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right1.svg"></button>'
      });
      $('ul.expert__tabs').on('click', 'li:not(.expert__tab_active)', function() {
        $(this)
          .addClass('expert__tab_active').siblings().removeClass('expert__tab_active')
          .closest('div.container').find('div.expert__wrapper').removeClass('expert__wrapper_active').eq($(this).index()).addClass('expert__wrapper_active');
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    }else {
      $('.pageup').fadeOut();
    }
  });
  $("a[href^=#]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navigation__menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger'),
    body = document.querySelector('body');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('navigation__menu_active');
        body.classList.toggle('lock');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('navigation__menu_active');
        })
    })
  })
  
});