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
    burger.classList.remove('is-open');

    var kicker = document.querySelector('.kicker');
    kicker.style = 'height: 0px';

    var allAnckers = document.querySelectorAll('.kicker nav a');

    for (var i = 0; i < allAnckers.length; i++) {
      allAnckers[i].style = 'color: transparent;';
    }

  } else if (!burger.classList.contains('is-open')) {
    burger.classList.add('is-open');

    var kicker = document.querySelector('.kicker');
    kicker.style = 'height: 90px';

    var allAnckers = document.querySelectorAll('.kicker nav a');
    for (var i = 0; i < allAnckers.length; i++) {
      allAnckers[i].style = 'color: white;';
    }
  }
}
