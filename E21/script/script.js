$(function(){
  $("nav > ul > li").mouseover(function(){
    $(this).find(".sub").stop().slideDown();
  });
  $("nav > ul > li").mouseout(function(){
    $(this).find(".sub").stop().slideUp();
  });

  // 팝업
  $(".pp").click(function(){
    $(".popview").show();
    return false;
  });
  $(".close").click(function(){
    $(".popview").hide();
  });

  // 슬라이드
  // $(".slider ul").animate({top: "-900px"}, 1000);

  let i = 0;
  $(".slider ul").append($(".slider ul li").first().clone());

  setInterval(function(){
    i++;
    $(".slider ul").animate({top: -900 * i + "px"}, 600);
    if(i == 3) {
      setTimeout(function(){
        $(".slider ul").animate({top: 0}, 0);
        i = 0;
      }, 700);
    }
  }, 3000);
});