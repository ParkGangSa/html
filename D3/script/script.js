$(function(){ // 문서로딩 후 스크립트를 읽어주세요
  // 메뉴
  $("nav > ul > li").mouseover(function(){
    $("nav > ul > li > ul").stop().fadeIn(300);
    $(".contents").addClass("on");
  });
  $("nav > ul > li").mouseout(function(){
    $("nav > ul > li > ul").fadeOut(100);
    $(".contents").removeClass("on");
  });

  // 팝업
  $(".pp").click(function(){
    $(".popview").show();
  });
  $(".close").click(function(){
    $(".popview").hide();
  });

  // 탭메뉴
  $(".tabmenu li").click(function(){
    $(".tabmenu li").removeClass("on");
    $(this).addClass("on");

    let i = $(this).index();
    // console.log(i);
    $(".tabcon").hide();
    $(".tabcon").eq(i).show();

    return false;
  });

  // 슬라이드
  let t = 0;
  
  function slide(){
    if(t<2){
      t++;
    } else {
      t =0;
    }
   
  $(".slider ul li").fadeOut();
  $(".slider ul li").eq(t).fadeIn();
  };

  setInterval(slide, 3000);

});