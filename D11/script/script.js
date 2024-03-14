$(function() {
//  메뉴
  $("nav > ul > li").mouseenter(function(){
    $(this).find(".sub").stop().slideDown();
  });
  $("nav > ul > li").mouseout(function(){
    $(".sub").stop().slideUp();
  });

// 팝업창
  $(".pp").click(function(){
    $(".popcon").show();
    return false;  // a태그 하이퍼링크 실행 못하도록 함
  });
  $("button").click(function(){
    $(".popcon").hide();
  });

// 탭메뉴

let t = 0;
  $(".tabmenu li").click(function(){
    $(".tabmenu li").removeClass('on');
    $(this).addClass('on');

    t = $(this).index();

    $(".tabcon").hide();
    $(".tabcon").eq(t).show();

    return false;
  });

// 슬라이드
  let i = 0;
  
  $(".slider > ul").append($(".slider ul li").first().clone(true));
  //$(".slider ul").animate({top: "-400px"}, 1000);
  
  setInterval(function(){
    i++;
    $(".slider ul").animate({top: -400 * i}, 1000);
    
    if(i == 3) {
      setTimeout(function(){
        $(".slider ul").animate({top: "0px"}, 0); 
        i=0;
      }, 700);
    }
  }, 3000);

});