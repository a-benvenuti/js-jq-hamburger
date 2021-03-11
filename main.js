// -----------------RICHIESTA ESERCIZIO------------------
//----------variabili-----------
var hamburgerMenu = $('.hamburger-menu');
//-----fine delle variabili-----
$('.header-right > a').click(
  function(){
    hamburgerMenu.fadeIn(300);
    // hamburgerMenu.addClass('active');
  }
);

$('.close').click(
  function(){
    hamburgerMenu.fadeOut(300);
    // hamburgerMenu.removeClass('active');
  }
);
// ----------fine della RICHIESTA ESERCIZIO-------------

// ------------------EXTRA / PROVE----------------------
//----------variabili-----------
var btn = $(".header-right ul li a.cta");
//-----fine delle variabili-----
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
// ------------------fine EXTRA / PROVE----------------
