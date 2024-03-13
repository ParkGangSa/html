$(function(){
  //  메뉴
  $("nav > ul > li").mouseover(function(){
    $(this).find(".sub").stop().slideDown();
  }); 
  $("nav > ul > li").mouseout(function(){
    $(".sub").stop().slideUp();
  }); 

  // 팝업
  $(".pp").click(function(){
    $(".popup").show();
    return false;
  });
  $(".button button").click(function(){
    $(".popup").hide();
    return false;
  });

  // 탭 메뉴
  $(".tabmenu li").click(function(){
    $(".tabmenu li").removeClass('on');
    $(this).addClass('on');

    var t =  $(this).index();
    // console.log(t);

    $(".tabcon").hide()
    $(".tabcon").eq(t).show();

    return false;
  });

  // 슬라이드
  let i = 0;
  $(".slider ul li").hide().first().show();

  setInterval(function(){
    let j = (i + 1) % 3;

    $(".slider ul li").eq(i).fadeOut();
    $(".slider ul li").eq(j).fadeIn();
    i = j;
  }, 3000);
});