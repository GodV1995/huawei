
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

$.get('ajax/list.json',function(data){
	$('.mainTop2s').eq(0).append("<a href='javascript:;'"+">"+data.mainTop2s[0]+"</a>")
	$('.mainTop2s').eq(0).append("<a href='javascript:;'"+">"+data.mainTop2s[1]+"</a>")
	$('.mainTop2s').eq(0).append("<a href='javascript:;'"+">"+data.mainTop2s[2]+"</a>")
	$('.mainTop2s').eq(0).append("<a href='javascript:;'"+">"+data.mainTop2s[3]+"</a>")
	$('.mainTop2s').eq(0).append("<a href='javascript:;'"+">"+data.mainTop2s[4]+"</a>")
	$('.mainTop2s').eq(0).append("<a href='javascript:;'"+">"+data.mainTop2s[5]+"</a>")
	$('.mainTop2s').eq(0).append("<a href='javascript:;'"+">"+data.mainTop2s[6]+"</a>")
	$('.mainTop2s').eq(0).append("<a href='javascript:;'"+">"+data.mainTop2s[7]+"</a>")
	$('.mainTop2s').eq(0).append("<a href='javascript:;'"+">"+data.mainTop2s[8]+"</a>")
})

$.get('ajax/list.json',function(data){
	$('.list1sMain').eq(0).find('h5').before("<img src='img/"+data.list1.img+"'/>")
	$('.list1sMain').eq(0).find('h5').html(data.list1.h5)
	$('.list1sMain').eq(0).find('h6').html(data.list1.h6)
	$('.list1sMain').eq(1).find('h5').before("<img src='img/"+data.list1.img+"'/>")
	$('.list1sMain').eq(1).find('h5').html(data.list1.h5)
	$('.list1sMain').eq(1).find('h6').html(data.list1.h6)
	$('.list1sMain').eq(2).find('h5').before("<img src='img/"+data.list1.img+"'/>")
	$('.list1sMain').eq(2).find('h5').html(data.list1.h5)
	$('.list1sMain').eq(2).find('h6').html(data.list1.h6)
	$('.list1sMain').eq(3).find('h5').before("<img src='img/"+data.list1.img+"'/>")
	$('.list1sMain').eq(3).find('h5').html(data.list1.h5)
	$('.list1sMain').eq(3).find('h6').html(data.list1.h6)
	$('.list1sMain').eq(4).find('h5').before("<img src='img/"+data.list1.img+"'/>")
	$('.list1sMain').eq(4).find('h5').html(data.list1.h5)
	$('.list1sMain').eq(4).find('h6').html(data.list1.h6)
	
	$('.list1sMain').eq(5).find('h5').before("<img src='img/"+data.list1.img+"'/>")
	$('.list1sMain').eq(5).find('h5').html(data.list1.h5)
	$('.list1sMain').eq(5).find('h6').html(data.list1.h6)
	$('.list1sMain').eq(6).find('h5').before("<img src='img/"+data.list1.img+"'/>")
	$('.list1sMain').eq(6).find('h5').html(data.list1.h5)
	$('.list1sMain').eq(6).find('h6').html(data.list1.h6)
	$('.list1sMain').eq(7).find('h5').before("<img src='img/"+data.list1.img+"'/>")
	$('.list1sMain').eq(7).find('h5').html(data.list1.h5)
	$('.list1sMain').eq(7).find('h6').html(data.list1.h6)
	$('.list1sMain').eq(8).find('h5').before("<img src='img/"+data.list1.img+"'/>")
	$('.list1sMain').eq(8).find('h5').html(data.list1.h5)
	$('.list1sMain').eq(8).find('h6').html(data.list1.h6)
	$('.list1sMain').eq(9).find('h5').before("<img src='img/"+data.list1.img+"'/>")
	$('.list1sMain').eq(9).find('h5').html(data.list1.h5)
	$('.list1sMain').eq(9).find('h6').html(data.list1.h6)
	
	$('.list1sMain').eq(10).find('h5').before("<img src='img/"+data.list1.img+"'/>")
	$('.list1sMain').eq(10).find('h5').html(data.list1.h5)
	$('.list1sMain').eq(10).find('h6').html(data.list1.h6)
	$('.list1sMain').eq(11).find('h5').before("<img src='img/"+data.list1.img+"'/>")
	$('.list1sMain').eq(11).find('h5').html(data.list1.h5)
	$('.list1sMain').eq(11).find('h6').html(data.list1.h6)
	$('.list1sMain').eq(12).find('h5').before("<img src='img/"+data.list1.img+"'/>")
	$('.list1sMain').eq(12).find('h5').html(data.list1.h5)
	$('.list1sMain').eq(12).find('h6').html(data.list1.h6)
	$('.list1sMain').eq(13).find('h5').before("<img src='img/"+data.list1.img+"'/>")
	$('.list1sMain').eq(13).find('h5').html(data.list1.h5)
	$('.list1sMain').eq(13).find('h6').html(data.list1.h6)
	$('.list1sMain').eq(14).find('h5').before("<img src='img/"+data.list1.img+"'/>")
	$('.list1sMain').eq(14).find('h5').html(data.list1.h5)
	$('.list1sMain').eq(14).find('h6').html(data.list1.h6)
	
	$('.list').find('img').each(function(index,value){
		$(this).click(function(){
			location.href="details.html";
		})
	})
})

$('.list').find('h5').each(function(index,value){
	$(this).click(function(){
		location.href="details.html";
	})
})


