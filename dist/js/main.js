$(document).ready(function(){
$('.slider').slick({
   arrows:true,
   dots:true,
   adaptiveHeight:true,
   slidesToShow: 3,
   slidesToScroll:3,
   speed:1000,
   easing:'ease',
   infinite: true,
   initialSlide:0,
   autoplay:true,
   autoplaySpeed: 1500,
   pauseOnFocus: true,
   pauseOnHover: true,
   pauseOnDotsHover: true,
  
});

});