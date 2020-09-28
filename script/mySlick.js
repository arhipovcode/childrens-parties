$(document).ready(function(){
  $('.people-prof-slider').slick({
    arrows:true, // Отвечает за показ стрелок
    speed:800, // скорость прокрутки
    slidesToShow:1,
    adaptiveHeight: true,
    easing:'ease', // стиль анимации прокрутки
    asNavFor: '.people-slider-nav' // связь слайдера
  });

  $('.people-slider-nav').slick({
    arrows:false,
    slidesToShow:5,
    slidesToScroll: 1,
    asNavFor: '.people-prof-slider',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 3,
          dots:true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          dots:true
        }
      }
    ]
  });

  $('.reviews-slider').slick({
    arrows:true,
    dots:true,
    speed:800,
    easing:'ease',
    centerMode: true,
    centerPadding: '28%',
    responsive: [
      {
        breakpoint: 860,
        settings: {
          centerPadding: '20%',
        }
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          centerPadding: '10%',
          dots:true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '0%',
          dots:true
        }
      }
    ]
  });

  $('.slider-certificates').slick({
    arrows:true,
    dots:true,
    speed:800,
    easing:'ease',
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
          dots:true
        }
      },
      {
        breakpoint: 670,
        settings: {
          dots:true
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots:true
        }
      }
    ]
  });

  $('.reviews-btn_1').click(function() {
    $(this).addClass('reviews-btn_active');
    $('.reviews-slider').addClass('animated fadeIn');
    $('.reviews-btn_2').removeClass('reviews-btn_active');
    $('.slider-certificates').hide();
    $('.reviews-slider').show();
    $('.reviews-slider').slick('setPosition');
  });

  $('.reviews-btn_2').click(function() {
    $(this).addClass('reviews-btn_active');
    $('.slider-certificates').addClass('animated fadeIn');
    $('.reviews-btn_1').removeClass('reviews-btn_active');
    $('.reviews-slider').hide();
    $('.slider-certificates').show();
    $('.slider-certificates').slick('setPosition');
  });
  
});