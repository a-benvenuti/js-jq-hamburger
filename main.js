var hamburgerMenu = $('.hamburger-menu');

$('.header-right > a').click(
  function(){
    hamburgerMenu.fadeIn(300);
  }
);

$('.close').click(
  function(){
    hamburgerMenu.fadeOut(300);
  }
);

// EXTRA / PROVE
var btn = $(".header-right ul li a.cta");

btn.mouseenter(
  function(){
    btn.text("inizia ora!")
  }
);
btn.mouseleave(
  function(){
    btn.text("Iscriviti")
  }
);
