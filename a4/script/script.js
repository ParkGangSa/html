$(function(){
  // nav
  $("nav > ul > li").mouseover(function(){
    $("nav > ul > li > ul").stop().fadeIn(900);
    $("#header").addClass("on");
  });
  $("nav > ul > li").mouseout(function(){
    $("nav > ul > li > ul").stop().fadeOut(100);
    $("#header").removeClass("on");
  });

  // 이미지
  let currentIndex = 0;
  setInterval(function(){
    let nextIndex = (currentIndex + 1) % 3;
    $(".slider").eq(currentIndex).fadeOut();
    $(".slider").eq(nextIndex).fadeIn();

    currentIndex = nextIndex;
  }, 3000);

  // popup
  $(".popup-btn").click(function(){
    $(".popup-view").show();
  });
  $(".popup-close").click(function(){
    $(".popup-view").hide();
  })
});