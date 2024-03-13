$(function(){
  // 메뉴
  $("nav > ul > li").mouseover(function(){
    $(this).find('.sub').stop().slideDown();
    return false;
  });
  $("nav > ul > li").mouseout(function(){
    $(this).find('.sub').stop().slideUp();
  });

  // popup 
  $(".pp").click(function(){
    $(".popView").show();
  });
  $(".close").click(function(){
    $(".popView").hide();
  });

  // slider 
  let i = 0;
  $(".slider ul ").append($(".slider ul li").first().clone(true));

  setInterval(function(){
    i++
    $(".slider ul ").animate({marginLeft: -100 * i + "%"}, 600);

    if(i === 3) {
      setTimeout(function(){
        $(".slider ul").animate({marginLeft: 0}, 0)
        i = 0;
      }, 600)
    }
  }, 3000);
  
  

});