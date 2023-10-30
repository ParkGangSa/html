$(function(){
  // menu
  $("nav > ul > li").mouseover(function(){
    $(this).find(".sub").stop().slideDown();
  });
  $("nav > ul > li").mouseout(function(){
    $(".sub").stop().slideUp();
  });

  // popup
  $(".pp").click(function(){
    $(".popup").show();
    return false;
  });
  $(".popup button").click(function(){
    $(".popup").hide();
    return false;
  });

  // slider
  let i = 0;
  $(".slider ul").append($(".slider ul li").first().clone(true));

  setInterval(function(){
    i++;
    $(".slider ul").animate({marginLeft: i * -800 +"px"}, 600);

    if(i == 3) {
      setTimeout(function(){
        $(".slider ul").animate({marginLeft: 0}, 0);
        i = 0;
      }, 700); 
    }
  }, 3000);
});