$(".nav > ul > li").mouseover(function(){
    $(this).find(".submenu").stop().show();
})

$(".nav > ul > li").mouseout(function(){
    $(this).find(".submenu").stop().hide();
})

let c = 0;

function slide(){
    if(c < 2){
        c++;
    }
    else{
        c = 0;
    }

    $(".slider ul").animate({left : c * (-1) * 100 + ("%")}, 1000)
}

setInterval(slide, 3000)

$(".pp").click(function(){
    $(".popup").show();
})

$(".btn").click(function(){
    $(".popup").hide();
})