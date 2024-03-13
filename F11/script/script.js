$(function(){  // 문서 로딩 후 읽어라

  // 메뉴
  $("nav > ul > li > a").focusin(function(){
    $(this).next().slideDown();
    $(this).parent().addClass('on');
  })
  $(".sub li:last-child").focusout(function(){
    $(".sub").slideUp();
    $("nav > ul > li").removeClass('on');
  })

  $("nav > ul > li").mouseenter(function(){
    $(this).find('.sub').stop().slideDown();
  })
  $("nav > ul > li").mouseleave(function(){
    $(".sub").stop().slideUp();
  })

  // 슬라이드
  var n = 0;

  function slider() {

    if( n < 2) {
      n++;
    } else {
      n = 0;
    }
    $(".slider ul li").fadeOut();
    $(".slider ul li").eq(n).fadeIn();
  }

  setInterval(slider, 3000);

  // 탭메뉴
  $(".tabmenu > li").click(function(){
    $(".tabmenu > li").removeClass('on');
    $(this).addClass('on');
    
    var i = $(this).index();
    console.log(i);
    $(".tabcon").hide();
    $(".tabcon").eq(i).show();

    return false;
  })

  // 팝업
  $(".pp").click(function(){
    $(".popup").show();
    return false;   // 링크차단
  })
  $("button").click(function(){
    $(".popup").hide();
  })

})