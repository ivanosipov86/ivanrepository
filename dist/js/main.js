$(document).ready(function(){
 $('.download__slider').slick({
  
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  infinite: true,
 });
});

var opener = document.querySelector('.menu__button');
var menu = document.querySelector('header__head_nav');

function clickHandler(event) {
   console.log('Opener was clicked');
}

opener.addEventlistener('click', clickHandler);
