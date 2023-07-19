let scrolling = $(window).scrollTop(); // let은 1회 선언, 후에 값은 변경 가능, scrolling은 scrollTop라는 스크롤 체크 기능으로 선언한다. (const는 1회 선언, 값 변경 불가)

$(window).scroll(function(){ // 브라우저 창의 scroll을 통해 기능을 구현하는데
    scrolling = $(window).scrollTop(); // scrolling 은 창의 스크롤을 체크 기능을 가져온다
    console.log(scrolling); // scrolling을 실행
    if (scrollng > 0){ // 만약에 
        $("header").addClass("fixed"); // 1px이상이라도 스크롤이 되면 fixed를 띄우고
    } else { // 그렇지 않으면(혹은 스크롤로 다시 맨 탑으로 완전히 이동후)
        $("header").removeClass("fixed"); // 이미 띄워진 fixed를 제거
    }

    // scrolling > 0 ? $("header").addClass("fixed") :
    // $("header").removeClass("fixed"); 삼항연산자

});