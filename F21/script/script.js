$(function(){

  // 메뉴
  $("nav > ul > li").mouseenter(function(){
    $(this).children(".sub").stop().slideDown();
  })
  $("nav > ul > li").mouseleave(function(){
    $(".sub").stop().slideUp();
  })

  // 메뉴키보드(tab키 focus)
  $("nav > ul > li ").focusin(function(){
    $(this).children(".sub").slideDown();
    $(this).addClass('on');
  })
  $(".sub li:last-child").focusout(function(){
    $(".sub").slideUp();
    $("nav > ul > li").removeClass('on');
  })

  // 슬라이드
  var i = 0;

  function slider(){

    if (i<2) {
      i++;
    } else {
      i = 0;
    }
  $(".slider ul li").fadeOut();
  $(".slider ul li").eq(i).fadeIn();
  }

  setInterval(slider, 3000);
  
  // 팝업
  $(".pp").click(function(){
    $(".popup").show();
  })
  $(".close").click(function(){
    $(".popup").hide();
  })
})