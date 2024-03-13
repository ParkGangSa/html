$(function(){
  // 메뉴
  $("nav > ul > li").mouseover(function(){
    $(this).find(".sub").stop().slideDown();
  });
  $("nav > ul > li").mouseout(function(){
    $(".sub").stop().slideUp();
  });

  // 팝업
  $(".pp").click(function(){
    $(".popup").show();
    return false;
  });
  $(".popup button").click(function(){
    $(".popup").hide();
    return false;
  });

  // 슬라이드
  let i =0;
  $(".slider ul li").hide().first().show();

  setInterval(function(){
    let j = (i + 1) % 3;

    $(".slider ul li").eq(i).fadeOut(1200);
    $(".slider ul li").eq(j).fadeIn(1200);

    i = j;
  }, 3000);
});