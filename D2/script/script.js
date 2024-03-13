$(function(){

    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    });

    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });

    let x = 0;

    function slide(){
        if(x < 2){
            x++;
        }
        else{
            x = 0
        }
        $('.slider ul').animate({left: -100 * x + "%"}, 1000)
    }

    setInterval(slide, 3000)

    $('.pp').click(function(){
        $('.popup').show()
    })

    $('button').click(function(){
        $('.popup').hide()
    })

});
