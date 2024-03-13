$(function(){
  // alert('경고')

  // 메뉴
  $('nav > ul > li').mouseover(function(){
    $('.sub').stop().slideDown();
  });
  $('nav > ul > li').mouseout(function(){
    $('.sub').stop().slideUp();
  });

  // 팝업창
  $('.pp').click(function(){
    $('.popup').show();
    return false;
  });
  $('.close').click(function(){
    $('.popup').hide();
    return false;
  });

  // 탭메뉴
  let i;
  $('.tabmenu li').click(function(){
    $('.tabmenu li').removeClass('on');
    $(this).addClass('on');

    i = $(this).index();
    $('.tabcon').hide();
    $('.tabcon').eq(i).show();
    return false;
  });

  // 슬라이드
  // $('.slider ul').css({top: "-300px"});
  let currentIndex = 0;
  $('.slider ul').append($('.slider ul li').first().clone(true));

  setInterval(function(){
    currentIndex++;
    $('.slider ul').animate({marginTop: -300 * currentIndex + "px"}, 600);

    if(currentIndex == 3) {
      setTimeout(function(){
        $('.slider ul').animate({marginTop: 0}, 0);
        currentIndex = 0;
      }, 700);
    }
    }, 3000);
  

})