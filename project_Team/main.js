
$(function () {
  //rank tab_menu(jq)
  $('.btn').first().addClass('on');
  $('.content').first().addClass('on');

  $('.btn').click(function () {

    let index = $('.btn').index(this);

    $('.btn').removeClass('on');
    $('.content').removeClass('on');

    $(this).addClass('on');
    $('.content').eq(index).addClass('on');

    $('.content').eq(index).find('.slick_rank1').slick('setPosition');
    $('.content').eq(index).find('.slick_rank2').slick('setPosition');
  });

  //rank btn bb
  $('.btn').click(function () {
    $('.btn').removeClass('bb');
    $(this).addClass('bb');
  });

  //movie_btn(pc_cate)
  $('.pc_cate').hide();
  $('.pc_color').hide();

  $('.movie_btn').click(function(){
    $('.pc_cate').slideToggle(300);
    $('.pc_color').slideToggle(300);
  });
});


//rank slick slide
$(document).ready(function () {
  $('.slick_rank1').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,

    prevArrow: '.prev',
    nextArrow: '.next',

    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 800,
        settings: {
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        }
      }
    ]
  });
});

$(document).ready(function () {
  $('.slick_rank2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,

    prevArrow: '.prev2',
    nextArrow: '.next2',

    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 800,
        settings: {
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        }
      }
    ]
  });
});

//keyward slick slide
$(document).ready(function () {
  $('.keyward_section_1').slick({
    cssEase: 'linear',
    autoplaySpeed: 0,
    speed: 3000,
    autoplay: true,

    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          speed: 500,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,

          autoplay: false,
        }
      },
    ]
  });
});

$(document).ready(function () {
  $('.keyward_section_2').slick({
    cssEase: 'linear',
    autoplaySpeed: 0,
    speed: 3000,
    autoplay: true,

    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          speed: 500,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,

          autoplay: false,
        }
      },
    ]
  });
});

//event banner
$('.event_slick').slick({
  slidesToShow: 4,
  arrows: true,
  
  prevArrow: '.prev3',
  nextArrow: '.next3',

  responsive: [
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        slidesToShow: 3,
        centerMode: true,
      }
    }
  ]
});

// //footer_logo
// $('.footer_logo').slick({
//   slidesToShow: 3,
//   arrows: false,
//   cssEase: 'linear',
//   infinite: true,
//   autoplay: true,
//   autoplaySpeed: 1,
//   speed: 2500
// });



document.addEventListener('DOMContentLoaded', function () {

  const menu_btn = document.querySelector('.gnb_menu');
  const menu = document.querySelector('.nav_mobile');

  menu_btn.addEventListener('click', openBtn);

  const tab_btn = document.querySelectorAll('.btn');
  const tab_content = document.querySelectorAll('.content');

  const cal_btn = document.querySelectorAll('.cal_btn');
  const sc_content = document.querySelectorAll('.sc_content');

  //mobile gnb menu
  function openBtn() {
    if (menu.style.opacity === '0') {
      menu.style.opacity = '1';
      menu.style.transform = 'translateX(0)';
    } else {
      menu.style.opacity = '0';
      menu.style.transform = 'translateX(100%)';
    }
  };

  //visual_banner(swiper)
  let swiper = new Swiper('.mySwiper1', {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //schedule tab_menu
  cal_btn.forEach(function (el, i) {

    el.addEventListener('click', function () {

      cal_btn.forEach(function (b) {
        b.classList.remove('on_2');
      });
      sc_content.forEach(function (c) {
        c.classList.remove('on_2');
      });
      el.classList.add('on_2');
      sc_content[i].classList.add('on_2');
    });
  });

  cal_btn.forEach(function (el) {

    el.addEventListener('click', function () {

      cal_btn.forEach(function (b) {
        b.classList.remove('cal_btn_st');
      });
      el.classList.add('cal_btn_st');
    });
  });

});