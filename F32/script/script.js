$(function(){
  // 메뉴
  $("nav > ul > li").mouseenter(function(){
    $(".sub, .bg").stop().slideDown();
  })
  $("nav > ul > li").mouseleave(function(){
    $(".sub, .bg").stop().slideUp();
  })


  // 웹접근성 메뉴
  $("nav > ul > li").focusin(function(){
    $(".sub, .bg").stop().slideDown();
    $(this).addClass('on');
  })
  $("nav li li:last-child").focusout(function(){
    $("nav > ul > li").removeClass('on');
  })
  $("nav li:last-child li:last-child").focusout(function(){
    $(".sub, .bg").stop().slideUp();
    $("nav > ul > li").removeClass('on');
  })

  // 슬라이드
  function slider(){
    $(".slider ul").animate({left: "-100%"}, 1000, function(){
      $(".slider ul").append($('.slider ul li').first())
      $(".slider ul").css({left: 0})
    })
  }

  setInterval(slider, 3000);

  // 탭메뉴
 var i = 0;
  $(".tabmenu > li").click(function(){
    $(".tabmenu > li").removeClass('on');
    $(this).addClass('on');

    i = $(this).index();
    $(".tabcon").hide();
    $(".tabcon").eq(i).show();

    return false();
  })


  // 팝업메뉴
  $(".pp").click(function(){
    $(".popup").show();
    return false; // 링크차단
  })
  $("button").click(function(){
    $(".popup").hide();
  })
})