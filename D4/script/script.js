$(function(){
  // 메뉴
  $("nav > ul > li").mouseover(function(){
    $(".sub, .menubg").stop().fadeIn();
  });
  $("nav > ul > li").mouseout(function(){
    $(".sub, .menubg").stop().fadeOut();
  });

  // 팝업
  $(".pp").click(function(){
    $(".popview").show();
    return false;
  }); 
  $("button").click(function(){
    $(".popview").hide();
  });

  // 슬라이드
  let currentIndex = 0;
  $(".slider ul li").hide().first().show();

  setInterval(function(){
    let nextIndex = (currentIndex+1) % 3;
    $(".slider ul li").eq(currentIndex).fadeOut(1200);
    $(".slider ul li").eq(nextIndex).fadeIn(1200);

    currentIndex = nextIndex;
  }, 3000);
});