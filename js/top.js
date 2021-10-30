// JavaScript Document
$(document).ready(function(e) {
	var base_w = document.documentElement.clientWidth * 0.8;
	var base_h = document.documentElement.clientHeight * 0.8;
	var yt_h = base_h;
	var yt_w = yt_h / 9 * 16;
	var pv_h = base_h;
	var pv_w = pv_h / 3 * 2;
	if(yt_w > base_w){
		yt_w = base_w; yt_h = yt_w / 16 * 9;
	}
	if(pv_w > base_w){
		pv_w = base_w; pv_h = pv_w / 2 * 3;
	}
	//モーダルウィンドウ設定
	$(".movie_list").colorbox({
		iframe:true,
		closeButton:false,
		fixed:true,
		scrolling:false,
		innerWidth:yt_w,
		innerHeight:yt_h,
	});
	$(".youtube").colorbox({
		iframe:true,
		closeButton:false,
		fixed:true,
		scrolling:false,
		innerWidth:yt_w,
		innerHeight:yt_h,
	});
	$(".iframe").colorbox({
		iframe:true,
		closeButton:true,
		width:640,
		height:750,
	});


	//タブオープン
	$(".date_title").bind("click touchstart", function(e){
//		$("#g_01,#g_02,#g_03,#g_04,#g_05,#g_06,#g_08,#g_09,#g_10").show();
	});

});
