//
// window.addEventListener("load", function() {
//
//    document.querySelector('.header-1').classList.add('animation');
//    document.querySelector('.header-2').classList.add('animation');
//    document.querySelector('.header-3').classList.add('animation');
//
//   });

$(document).ready(function () {

   document.querySelector('.header-1').classList.add('animation');
   document.querySelector('.header-2').classList.add('animation');
   document.querySelector('.header-3').classList.add('animation');

})

var burger = document.querySelector('.burger');

burger.addEventListener('click', hoverBurger);

function hoverBurger() {
  if (burger.classList.contains('is-open')) {
    $('.burger').removeClass('is-open');

    var kicker = document.querySelector('.kicker');
    $('.kicker').css('height', '0px');

    $('.kicker nav a').css({
      color:'transparent',
      top:'90px'
    });

  } else if (!burger.classList.contains('is-open')) {
    $('.burger').addClass('is-open');

    var kicker = document.querySelector('.kicker');
    $('.kicker').css('height', '90px');

    $('.kicker nav a').css({
      color: 'white',
      top: '0px'
    });
  }
}

$(function () {

$('.thumb-overlay:eq(0)').on('mouseover', posit);

function posit() {
  $('.before').css('background', 'rgb(16, 224, 175)');
};

$('.thumb-overlay:eq(1)').on('mouseover', posit_1);

function posit_1() {
  $('.before').css('background', 'rgb(254, 186, 229)');
};


$('.thumb-overlay:eq(2)').on('mouseover', posit_2);

function posit_2() {
  $('.before').css('background', 'rgb(41, 229, 255)');
};

$('.thumb-overlay:eq(3)').on('mouseover', posit_3);

function posit_3() {
  $('.before').css('background', 'rgb(254, 168, 79)');
};

$('.before').on('mouseover', transp);

function transp() {
  $('.before').css('background', 'transparent');
};

});
