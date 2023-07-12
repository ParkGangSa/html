let scrolling = $(window).scrollTop();

$(window).scroll(function(){
  scrolling = $(window).scrollTop();
  console.log(scrolling);
  if (scrolling > 0){
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }

  // 삼항연산자
  // scrolling > 0 ? $("header").addClass("fixed") : $("header").removeClass("fixed")
});