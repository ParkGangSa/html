$(function(){
  // 메뉴
  $("nav > ul > li").mouseover(function(){
    $(".sub, .bg").stop().slideDown();
  });
  $("nav > ul > li").mouseout(function(){
    $(".sub, .bg").stop().slideUp();
  });

  // 팝업
  $(".pp").click(function(){
    $(".popup").show();
    return false;
  });
  $(".close").click(function(){
    $(".popup").hide();
    return false;
  });

  // 슬라이드
  let i = 0;

  $(".slider ul").append($(".slider ul li").first().clone(true));

  setInterval(function(){
  i++;
    $(".slider ul").animate({marginTop: i * -300 + "px"}, 600);

    if(i == 3) {
      setTimeout(function(){
        $(".slider ul").animate({marginTop: 0}, 0);
        i = 0;
      }, 700);
    }
  }, 3000);
});