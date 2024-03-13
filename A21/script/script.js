$(function(){
  // 메뉴
  $("nav > ul > li").mouseover(function(){
    $(".sub, .menubg").stop().slideDown();
  });
  $("nav > ul > li").mouseout(function(){
    $(".sub, .menubg").stop().slideUp();
  });

  // 슬라이드
  let i = 0;

  $(".slider ul").append($(".slider ul li").first().clone(true));

  setInterval(function(){
    i++;
    $(".slider ul").animate({marginLeft: -1200 * i +"px"}, 600);
    
    if(i == 3){
      setTimeout(function(){
        $(".slider ul").animate({marginLeft: 0}, 0);
        i = 0;
      },700);     
    }

  }, 3000);

  // 팝업
  $(".pp").click(function(){
    $(".popup").show();
    return false;
  });
  $(".popup button").click(function(){
    $(".popup").hide();
    return false;
  });
})