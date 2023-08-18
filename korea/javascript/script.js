let scrolling = $(window).scrollTop();
$(window).scroll(function(){
    scrolling = $(window).scrollTop();
    console.log(scrolling);
    if (scrolling > 0){
        $("header").addClass("fixed")
    } else {
        $("header").removeClass("fixed")
    }
});

$(function(){
    $('.mainmenu > li').mouseover(function(){
        $('.submenu').stop().slideDown();
        $('#header.fixed').stop().slideDown();
        $('.menu_bg').stop().slideDown();
    });
    $('.mainmenu > li').mouseout(function(){
        $('.submenu').stop().slideUp();
        $('.menu_bg').stop().slideUp();
    });

    //슬라이드

    //슬라이드 : 페이드 효과
    let currentIndex = 0;   //현재 이미지 설정
        $(".slider").hide().first().show();  //모든 이미지 숨기고 첫번째 이미지 나타남
    
        setInterval(function(){     //3초에 한번씩 실행
            let nextIndex = (currentIndex + 1) % 3;     //다음 이미지 설정
    
            $(".slider").eq(currentIndex).fadeOut(1000);    //첫 번재 이미지 안보이게 함
            $(".slider").eq(nextIndex).fadeIn(1000);    //두번째 이미지 보이게 함
    
            currentIndex = nextIndex;   //두번재 값을 현재 인덱스에 저장
        }, 10000);


});