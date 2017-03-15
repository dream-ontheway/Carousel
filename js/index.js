$(function(){
	//3d
	 $('#dg-container').gallery({
        autoplay  : true,
        interval : 2000
    });
	//无缝
	var i = 0;
	timer = null;

	for(var j = 0; j < $(".content").length; j++){
		$(".btnbox ul ").append("<li></li>");
	}
	$(".btnbox ul li").first().addClass('thisbtn');
	var firstcontent = $(".content").first().clone();
	$(".content_box").append(firstcontent).width($(".content").length*$(".content").width());

	//自动播放
	function move(){
		i ++ ;
		if( i == $(".content").length){
			i = 1;
			$(".content_box").css({left:0});
		}
		$(".content_box").stop().animate({left:-i*500},600);
		if( i == $(".content").length-1){
			$(".btnbox ul li").eq(0).addClass('thisbtn').siblings().removeClass('thisbtn');
		}else{
			$(".btnbox ul li").eq(i).addClass('thisbtn').siblings().removeClass('thisbtn');
		}
	}
	timer = setInterval(move ,3000);

	//btn hover事件
	$(".btnbox ul li").mousemove(function(){
		clearInterval(timer)
		var _index = $(this).index();
		$(".content_box").stop().animate({left:-_index*500},600);
		$(".btnbox ul li").eq(_index).addClass('thisbtn').siblings().removeClass('thisbtn');
	})
	$(".btnbox ul li").mouseout(function(){
		timer = setInterval(move ,3000);
	})

	//左右箭头点击
	$(".arrow_next").click(function(){
		i ++ ;
		if( i == $(".content").length){
			i = 1;
			$(".content_box").css({left:0});
		}
		$(".content_box").stop().animate({left:-i*500},600);
		if( i == $(".content").length-1){
			$(".btnbox ul li").eq(0).addClass('thisbtn').siblings().removeClass('thisbtn');
		}else{
			$(".btnbox ul li").eq(i).addClass('thisbtn').siblings().removeClass('thisbtn');
		}
	})
	$(".arrow_prew").click(function(){
		i -- ;
		if(i == -1){
			i = $(".content").length-2;
			console.log(i);
			$(".content_box").css({left:-($(".content").length-1)*500});
		}
		$(".content_box").stop().animate({left:-i*500},600);
		$(".btnbox ul li").eq(i).addClass('thisbtn').siblings().removeClass('thisbtn');
	})

	$(".box").hover(function(){
		clearInterval(timer)
	},function(){
		timer = setInterval(move ,3000);
	})
})