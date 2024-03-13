$(function(){
  // 메뉴
  $("nav > ul > li").mouseenter(function(){
    $(this).find(".sub").stop().slideDown();
    return false;
  });
  $("nav > ul > li").mouseleave(function(){
    $(this).find(".sub").stop().slideUp();
  });

  // 팝업창
  $(".pp").click(function(){
    $(".popup").show();
    return false;
  });
  $(".close").click(function(){
    $(".popup").hide();
  });

  // 슬라이드
  // $(".slider ul").css({top: "-800px"});
  // $(".slider ul").animate({top: "-800px"}, 1000);

  let i = 0;

  $(".slider ul").append($(".slider ul li").first().clone(true));
  
  setInterval(function(){
    i++;
    $(".slider ul").animate({top: -800 * i + "px"}, 600);

    if(i == 3) {
      setTimeout(function(){
        $(".slider ul").animate({top: 0}, 0);
        i=0;
      }, 600);
    }
  }, 3000);
  
  

});