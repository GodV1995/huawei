

var tele=document.getElementById('tele');
var pwsd=document.getElementById('pswd');
var pwsds=document.getElementById('pswds');
var oSpan=document.querySelectorAll('form span');
var oBtn=document.getElementById("sbt");
var flag=true;
var arr=[0,0,0];

tele.onblur=function(){
	if(tele.value!=''){
		var reg=/^1(3|4|5|7|8)\d{9}$/;
		if(reg.test(tele.value)){
			oSpan[0].innerHTML='*恭喜您！输入正确';
			arr[0]=1;
			flag=true;
		}else{
			oSpan[0].innerHTML='*请输入正确格式！';
			arr[0]=2;
			flag=false;
		}
	}
}
tele.onfocus=function(){
	if(!flag){
		tele.value='';
	}
}


pwsd.onblur=function(){
	if(pwsd.value!=''){
		var reg=/^\w{6,18}$/;
		if(reg.test(pwsd.value)){
			oSpan[1].innerHTML='*恭喜您！输入正确';
			arr[1]=1;
			flag=true;
		}else{
			oSpan[1].innerHTML='*请输入正确格式！';
			arr[1]=2;
			flag=false;
		}
	}
}
pwsd.onfocus=function(){
	if(!flag){
		pwsd.value='';
	}
}


pwsds.onblur=function(){
	if(pwsds.value!=''){
		if(pwsds.value==pwsd.value){
			oSpan[2].innerHTML='*恭喜您！输入正确';
			arr[2]=1;
			flag=true;
		}else{
			oSpan[2].innerHTML='*两次密码填写不一致！';
			arr[2]=2;
			flag=false;
		}
	}
}
pwsds.onfocus=function(){
	if(!flag){
		pwsds.value='';
	}
}
var oH3=document.getElementsByClassName('top')[0];
oH3.onclick=function(){
	location.href="login.html";
}

oBtn.onclick=function(){
	var num=arr[0]*arr[1]*arr[2];
	if(num==0){
		alert('请输入完整！');
	}else if(num==1){
		if($getCookie(tele.value)=='无'){
			$cookie(tele.value,pswd.value);
			location.href="login.html";
		}else{
			alert('该手机号已经被注册！')
		}
	}else{
		alert('输入有误!');
	}
}

