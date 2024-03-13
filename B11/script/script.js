$(function(){
  // 메뉴
  $("nav > ul > li").mouseover(function(){
    $(".sub").stop().slideDown();
  });
  $("nav > ul > li").mouseout(function(){
    $(".sub").stop().slideUp();
  });

  // 탭메뉴
  $(".tabmenu li").click(function(){
    $(".tabmenu li").removeClass('on');
    $(this).addClass('on');

    var t = $(this).index();
    $(".tabcon").hide();
    $(".tabcon").eq(t).show();
    return false;
  });

  // 팝업
  $(".pp").click(function(){
    $(".popup").show();
    return false;
  });
  $(".close button").click(function(){
    $(".popup").hide();
    return false;
  });

  // 슬라이드
  let i = 0;
  $(".slider ul").append($(".slider ul li").first().clone(true));

  setInterval(function(){
    i++;
    $(".slider ul").animate({marginLeft: -1200 * i + "px"}, 600);
    if(i == 3) {
      setTimeout(function(){
        $(".slider ul").animate({marginLeft: 0}, 0);
        i = 0;
      }, 700);
    }
  }, 3000);

});