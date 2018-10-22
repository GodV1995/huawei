
$.get('ajax/page.json',function(response){
	$('#banner').css('background',"url(img/"+response.banner+") center")
})
$('.bannerBtn').click(function(){
	$('#banner').css("height",0)
})

$("header .hover").hover(function(){
	$(this).find(".erweima").css("display","block")
},function(){
	$(this).find(".erweima").css("display","none")
})

$('header .toplist li').hover(function(){
	$(this).css("border-bottom-color","#c10000")
},function(){
	$(this).css("border-bottom","")
})
$('header .toplist li').hover(function(){
	$(this).find("a").css("color","#c10000")
},function(){
	$(this).find("a").css("color","#3a3a3a")
})

$('.shop').hover(function(){
	$('.shopList').css('display','block')
},function(){
	$('.shopList').css('display','none')
})

$('.slideList1').each(function(index,value){
	$(value).hover(function(){
		$(this).css("background","rgba(0,0,0,.8)")
	},function(){
		$(this).css("background","rgba(0,0,0,.5)")
	})
})
$('.slideListRightBots').hover(function(){
	$(this).animate({"top":-2},20)
},function(){
	$(this).animate({"top":0},20)
})
$('.slideList1').each(function(index,value){
	$(value).hover(function(){
		$(this).find('.slideListRight').css("display","block")
	},function(){
		$(this).find('.slideListRight').css("display","none")
	})
})
//-----------------------轮播图
$.get('ajax/page.json',function(response){
	var slideNum=response.slideLists;
	var indexA=0;
	var timer=null;
	$('#slide').css('background',"url(img/"+slideNum[indexA]+") 50% 0px no-repeat");
	$('.slideUl li').eq(indexA).css('background','white');
	autoPlay();
	$('.slideUl li').each(function(index,value){
		$('.slideUl li').eq(index).mouseenter(function(){
			indexA=$(this).index();
			$('#slide').css('background',"url(img/"+slideNum[indexA]+") 50% 0px no-repeat");
			$('.slideUl li').eq(indexA).css('background','white');
			$('.slideUl li').not($('.slideUl li').eq(indexA)).css('background','');
		})
	})
	function autoPlay(){
		timer=setInterval(function(){
			indexA++;
			if(indexA==slideNum.length){
				indexA=0;
				$('.slideUl li').eq(slideNum.length-1).css('background','')
			}
			$('#slide').css('background',"url(img/"+slideNum[indexA]+") 50% 0px no-repeat");
			$('.slideUl li').eq(indexA).css('background','white');
			$('.slideUl li').not($('.slideUl li').eq(indexA)).css('background','');
			},3000)
		$('#slide').mouseenter(function(){
			clearInterval(timer);
		})
	}
	$('#slide').mouseleave(function(){
		autoPlay();
	})
})

$.get('ajax/page.json',function(response){
	$('.slideMenu').eq(0).append("<a href='javascript:;'>"+response.slideMenu.shouji[0]+"</a>")
	$('.slideMenu').eq(0).append("<a href='javascript:;'>"+response.slideMenu.shouji[1]+"</a>")
	$('.slideMenu').eq(1).append("<a href='javascript:;'>"+response.slideMenu.bijiben[0]+"</a>")
	$('.slideMenu').eq(1).append("<a href='javascript:;'>"+response.slideMenu.bijiben[1]+"</a>")
	$('.slideMenu').eq(2).append("<a href='javascript:;'>"+response.slideMenu.chuandai[0]+"</a>")
	$('.slideMenu').eq(2).append("<a href='javascript:;'>"+response.slideMenu.chuandai[1]+"</a>")
	$('.slideMenu').eq(2).append("<a href='javascript:;'>"+response.slideMenu.chuandai[2]+"</a>")
	$('.slideMenu').eq(3).append("<a href='javascript:;'>"+response.slideMenu.jiaju[0]+"</a>")
	$('.slideMenu').eq(3).append("<a href='javascript:;'>"+response.slideMenu.jiaju[1]+"</a>")
	$('.slideMenu').eq(3).append("<a href='javascript:;'>"+response.slideMenu.jiaju[2]+"</a>")
	$('.slideMenu').eq(4).append("<a href='javascript:;'>"+response.slideMenu.tongyong[0]+"</a>")
	$('.slideMenu').eq(4).append("<a href='javascript:;'>"+response.slideMenu.tongyong[1]+"</a>")
	$('.slideMenu').eq(4).append("<a href='javascript:;'>"+response.slideMenu.tongyong[2]+"</a>")
	$('.slideMenu').eq(5).append("<a href='javascript:;'>"+response.slideMenu.zhuanshu[0]+"</a>")
	$('.slideMenu').eq(5).append("<a href='javascript:;'>"+response.slideMenu.zhuanshu[1]+"</a>")
	$('.slideMenu').eq(5).append("<a href='javascript:;'>"+response.slideMenu.zhuanshu[2]+"</a>")
})

$('#main li').each(function(){
	$(this).hover(function(){
		$(this).find('h5').css('color','#CA141D')
	},function(){
		$(this).find('h5').css('color','black')
	})
})

$.get('ajax/page.json',function(response){
	var timer=null;
	var oTop=parseInt($('.mainRightTop ul').css('top'));
	play();
	function play(){
		timer=setInterval(function(){
			oTop-=48;
			$('.mainRightTop ul').animate({'top':oTop},500,function(){
				if(oTop==-144){
					oTop=48;
				}
			})
		},3000)
	}
	$('.mainRightTop').eq(0).hover(function(){
		clearInterval(timer);
	},function(){
		play();
	})
	$('.mainRightTops li').eq(0).find('a').html(response.mainRightTops[0]);
	$('.mainRightTops li').eq(1).find('a').html(response.mainRightTops[1]);
	$('.mainRightTops li').eq(2).find('a').html(response.mainRightTops[2]);
	$('.mainRightTops li').eq(3).find('a').html(response.mainRightTops[3]);
})

$('#main1 img').click(function(){
	location.href="details.html";
})

$.get('ajax/page.json',function(data){
	$('.main2Left').eq(0).append("<img src='img/"+data.main2.main2Left+"'>")
	$('.main2RightTops').eq(0).find('h5').before("<img src='img/"+data.main2.main2Right.img+"'>")
	$('.main2RightTops').eq(0).find('h5').html(data.main2.main2Right.h5)
	$('.main2RightTops').eq(0).find('h6').html(data.main2.main2Right.h6)
	$('.main2RightTops').eq(0).find('span').html(data.main2.main2Right.span)
	$('.main2RightTops').eq(1).find('h5').before("<img src='img/"+data.main2.main2Right.img+"'>")
	$('.main2RightTops').eq(1).find('h5').html(data.main2.main2Right.h5)
	$('.main2RightTops').eq(1).find('h6').html(data.main2.main2Right.h6)
	$('.main2RightTops').eq(1).find('span').html(data.main2.main2Right.span)
	$('.main2RightTops').eq(2).find('h5').before("<img src='img/"+data.main2.main2Right.img+"'>")
	$('.main2RightTops').eq(2).find('h5').html(data.main2.main2Right.h5)
	$('.main2RightTops').eq(2).find('h6').html(data.main2.main2Right.h6)
	$('.main2RightTops').eq(2).find('span').html(data.main2.main2Right.span)
	$('.main2RightTops').eq(3).find('h5').before("<img src='img/"+data.main2.main2Right.img+"'>")
	$('.main2RightTops').eq(3).find('h5').html(data.main2.main2Right.h5)
	$('.main2RightTops').eq(3).find('h6').html(data.main2.main2Right.h6)
	$('.main2RightTops').eq(3).find('span').html(data.main2.main2Right.span)
	$('.main2RightBots').eq(0).find('h5').before("<img src='img/"+data.main2.main2Right.img+"'>")
	$('.main2RightBots').eq(0).find('h5').html(data.main2.main2Right.h5)
	$('.main2RightBots').eq(0).find('h6').html(data.main2.main2Right.h6)
	$('.main2RightBots').eq(0).find('span').html(data.main2.main2Right.span)
	$('.main2RightBots').eq(1).find('h5').before("<img src='img/"+data.main2.main2Right.img+"'>")
	$('.main2RightBots').eq(1).find('h5').html(data.main2.main2Right.h5)
	$('.main2RightBots').eq(1).find('h6').html(data.main2.main2Right.h6)
	$('.main2RightBots').eq(1).find('span').html(data.main2.main2Right.span)
	$('.main2RightBots').eq(2).find('h5').before("<img src='img/"+data.main2.main2Right.img+"'>")
	$('.main2RightBots').eq(2).find('h5').html(data.main2.main2Right.h5)
	$('.main2RightBots').eq(2).find('h6').html(data.main2.main2Right.h6)
	$('.main2RightBots').eq(2).find('span').html(data.main2.main2Right.span)
	$('.main2RightBots').eq(3).find('h5').before("<img src='img/"+data.main2.main2Right.img+"'>")
	$('.main2RightBots').eq(3).find('h5').html(data.main2.main2Right.h5)
	$('.main2RightBots').eq(3).find('h6').html(data.main2.main2Right.h6)
	$('.main2RightBots').eq(3).find('span').html(data.main2.main2Right.span)
})

$('.main2Hover').each(function(index,value){
	$(this).hover(function(){
		$('.main2Hover').eq(index).animate({'top':-3},300)
	},function(){
		$('.main2Hover').eq(index).animate({'top':0},300)
	})
})

$('.main2Hover').click(function(){
	location.href="details.html";
})