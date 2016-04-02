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

    $('.kicker nav a').css('color','transparent');
    // var allAnckers = document.querySelectorAll('.kicker nav a');
    //
    // for (var i = 0; i < allAnckers.length; i++) {
    //   allAnckers[i].style = 'color: transparent;';
    // }

  } else if (!burger.classList.contains('is-open')) {
    $('.burger').addClass('is-open');

    var kicker = document.querySelector('.kicker');
    $('.kicker').css('height', '90px');

    $('.kicker nav a').css('color','white');

    // var allAnckers = document.querySelectorAll('.kicker nav a');
    // for (var i = 0; i < allAnckers.length; i++) {
    //   allAnckers[i].style = 'color: white;';
    // }
  }
}
