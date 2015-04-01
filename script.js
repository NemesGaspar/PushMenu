$(document).ready(function(){

  $(".toggle").click(function(){
    $(".scroller").toggleClass("open");
    $(".menu").toggleClass("open");
    $("body").toggleClass("open");
    $(".push-cnt").removeClass('level2').removeClass('level1');
    $(".nav-col").removeClass("active").removeClass("passive");
  });
  $(".pushmenu li:has(ul)").addClass("nav-col");
$(".nav-col a").click(function(){
  if ($(this).hasClass("back")){
    if ($(".push-cnt").is(".level2")) {
      $(".nav-col.passive").removeClass("passive");
      $(".push-cnt").removeClass('level2');
      $('ul li ul li.nav-col').removeClass("active");
    } else {
      $(".push-cnt").removeClass('level1');
      $("li.nav-col").removeClass("active");
    }
  } else {
    $(this).parent().addClass("active");
    $(".push-cnt").addClass("level1");
  }
});
$('ul li ul li.nav-col a').click(function(){
  if ($(this).hasClass("back")){
  } else {
    $("li.nav-col.active").first().addClass("passive");
    $("ul li ul li.nav-col").addClass("active");
    $(".push-cnt").addClass("level2");
  }
});
});

