
$('.loginTops').eq(0).click(function(){
	$('#web').css('display','none');
	$('form').css('display','block');
	$('.loginTops').eq(1).css('color','black')
})
$('.loginTops').eq(1).click(function(){
	$('form').css('display','none');
	$('#web').css('display','block');
	$('.loginTops').eq(0).css('color','black')
})

$('.loginTops').eq(0).hover(function(){
	$(this).css('color','#b40707')
},function(){
	if($('form').css('display')=='none'){
		$(this).css('color','black')
	}else{
		$(this).css('color','#b40707')
	}
})
$('.loginTops').eq(1).hover(function(){
	$(this).css('color','#b40707')
},function(){
	if($('#web').css('display')=='none'){
		$(this).css('color','black')
	}else{
		$(this).css('color','#b40707')
	}
})

$('#sub').click(function(){
	if($getCookie($('#tel').val())=='无'){
		alert("没有该账号！请去注册")
	}else if($getCookie($('#tel').val())==$('#psw').val()){
		location.href="page.html";
	}else{
		$('#psw').focus(function(){
			$('#psw').val('');
		})
		alert('密码不正确！')
	}
})