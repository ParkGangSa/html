$(function(){
// 메뉴
$("nav > ul > li").mouseenter(function(){
  $(".sub, .bg").stop().slideDown();
})
$("nav > ul > li").mouseleave(function(){
  $(".sub, .bg").stop().slideUp();
})

// 웹접근성 메뉴
$("nav > ul > li").focusin(function(){
  $(".sub, .bg").slideDown();
  $(this).addClass("on");
})
$("nav li li:last-child").focusout(function(){
  $("nav > ul > li").removeClass('on');
})
$("nav li:last-child li:last-child").focusout(function(){{
  $(".sub, .bg").slideUp();
}})

// 슬라이드
function slider() {
  $(".slider ul").animate({top: "-350px"}, 1000, function(){
    $(".slider ul").append($(".slider ul li").first())
    $(".slider ul").css({top: 0})
  })
}
setInterval(slider, 3000)



  // 팝업
  $(".pp").click(function(){
    $(".popup").show();
    return false;
  })
  $("button").click(function(){
    $(".popup").hide();
  })
})