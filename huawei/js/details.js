
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

var main=document.getElementById('main');
var mainWrap=document.getElementById('main_wrap');
var leftTop=document.getElementsByClassName('leftTop')[0];
var left=document.getElementById('left');
var shade=document.getElementsByClassName('shade')[0];
var bigPic=document.getElementsByClassName('bigPic')[0];
var oBigPic=document.querySelector('.bigPic img');
var leftBtn=document.getElementsByClassName('leftBtn')[0];
var rightBtn=document.getElementsByClassName('rightBtn')[0];
var leftBotMid=document.querySelector('.leftBotMid ul');
var leftBotMidPic=document.querySelectorAll('.leftBotMid li img');
var num=0;

leftBtn.onclick=function(){
	if(parseInt(getStyle(leftBotMid,"left"))<0){
		num+=74;
		leftBotMid.style.left=num+'px';
	}
}

rightBtn.onclick=function(){
	if(parseInt(getStyle(leftBotMid,"left"))>=-74){
		num-=74;
		leftBotMid.style.left=num+'px';
	}
}

for(var i=0;i<leftBotMidPic.length;i++){
	leftBotMidPic[i].onmouseenter=function(){
		this.style.border='1px solid #ca141d';
	}
	leftBotMidPic[i].onmouseleave=function(){
		this.style.border='1px solid white';
	}
}

leftTop.onmouseenter=function(){
	shade.style.display='block';
	bigPic.style.display='block';
}
leftTop.onmouseleave=function(){
	shade.style.display='none';
	bigPic.style.display='none';
}
leftTop.onmousemove=function(eve){
	var e=eve||window.event;
	var oLeft=e.pageX-main.offsetLeft-shade.offsetWidth/2;
	var oTop=e.pageY-leftTop.offsetTop-shade.offsetHeight/2;
	if(oLeft<=0){
		oLeft=0;
	}else if(oLeft>=leftTop.offsetWidth-shade.offsetWidth){
		oLeft=leftTop.offsetWidth-shade.offsetWidth;
	}
	if(oTop<=0){
		oTop=0;
	}else if(oTop>=leftTop.offsetHeight-shade.offsetHeight){
		oTop=leftTop.offsetHeight-shade.offsetHeight
	}
	shade.style.left=oLeft+'px';
	shade.style.top=oTop+'px';
	var pX=oLeft/(leftTop.offsetWidth-shade.offsetWidth);
	var pY=oTop/(leftTop.offsetHeight-shade.offsetHeight);
	
	oBigPic.style.left=(bigPic.offsetWidth-oBigPic.offsetWidth)*pX+'px';
	oBigPic.style.top=(bigPic.offsetHeight-oBigPic.offsetHeight)*pY+'px';
}
	
function getStyle(obj,attr){
	if( window.getComputedStyle ){
		return window.getComputedStyle(obj,false)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}

$('.rightBot1s').eq(0).css('border','1px solid #ca141d');
$('.rightBot1s').eq(3).css('border','1px solid #ca141d');
$('.rightBot1s').eq(4).css('border','1px solid #ca141d');

$('.rightBot1s').eq(0).click(function(){
	$(this).css('border','1px solid #ca141d');
	$('.rightBot1s').eq(1).css('border','1px solid #a4a4a4');
})

$('.rightBot1s').eq(1).click(function(){
	$(this).css('border','1px solid #ca141d');
	$('.rightBot1s').eq(0).css('border','1px solid #a4a4a4');
})
$('.rightBot1s').eq(2).click(function(){
	$(this).css('border','1px solid #ca141d');
	$('.rightBot1s').eq(3).css('border','1px solid #a4a4a4');
})
$('.rightBot1s').eq(3).click(function(){
	$(this).css('border','1px solid #ca141d');
	$('.rightBot1s').eq(2).css('border','1px solid #a4a4a4');
})

var n=1;
var numMain=document.getElementsByClassName('numMain')[0];
var add=document.getElementsByClassName('add')[0];
var sub=document.getElementsByClassName('sub')[0];
numMain.innerHTML=n;
sub.style.cursor='not-allowed';
add.onclick=function(){
	n++;
	numMain.innerHTML=n;
	sub.style.cursor='pointer'
	return n;
}
sub.onclick=function(){
	n--;
	if(n<=1){
		n=1;
		numMain.innerHTML=n;
		sub.style.cursor='not-allowed';
	}else{
		numMain.innerHTML=n;
	}
}

