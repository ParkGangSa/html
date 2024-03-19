
/* 硫붿씤硫붾돱 */
$(document).on("mouseenter",".lnb", function(){
	$(".allMenu").stop().slideDown(400);
	$(".allMenu").hover(function(){
		$(this).css("display","block").stop()},
		function(){
		$(this).slideUp(200)
	});
	});
$(document).on("mouseleave", ".lnb", function(){
	$(".allMenu").stop().slideUp(200);
	});

/* �꾩껜蹂닿린 踰꾪듉 */
$(document).on("mouseenter","#btn_allview", function(){
	$(".allMenu").stop().slideDown(400);
	$(".allMenu").hover(function(){
		$(this).css("display","block").stop()},
		function(){
		$(this).slideUp(200)
	});
	});
$(document).on("mouseleave", "#btn_allview", function(){
	$(".allMenu").stop().slideUp(200);
	});

/* 怨듭��ы빆 �� */
$(function(){
	$(".noticeTitle li:first").addClass("on");
	$(".noticeTitle li > a:first").addClass("on");
	$(".noticeContent:first").show();
	
	$(".noticeTitle li").hover(function(){
		$(".noticeTitle li").removeClass("on");
		$(".noticeTitle li > a").removeClass("on");
		$(this).addClass("on");
		$(this).children().addClass("on");
		$(".noticeContent").hide();
		var noticeDeadong = $(this).data("id");
		$("." + noticeDeadong).show();
	});
});

/* �듬찓�� */
$(document).ready(function() {
	$("#quick").show();
//	$(window).on("scroll", function() {
//	});
//	
	$(document).on("click", ".quick_top", function() {
	$('body,html').animate({ scrollTop: 0 }, 900);
	return false
	});
});


