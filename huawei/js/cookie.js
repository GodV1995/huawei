//user=Michael; url=www.1000phone.com; email=zhangzhilin@1000phone.net
//创建cookie
function $cookie(key,value,expires){
	var cookieStr = encodeURIComponent(key) + '=' + encodeURIComponent(value) + ';path=/';
	if(typeof expires === 'number'){
		var date = new Date();
		date.setDate(date.getDate() + expires);
		cookieStr += ";expires=" + date;
	}
	document.cookie = cookieStr;
}

//获取指定key的cookie值
function $getCookie(key){
	//"user=Michael; url=www.1000phone.com; email=zhangzhilin@1000phone.net"
	//hello
	/*
		substring(start,end)
		slice(start,end)
		substr(start,length)
		
		              start          end
		user			0
		url     		14
		email			37
	*/
   var cookieKey = encodeURIComponent(key) + '=';
   //alert(document.cookie.indexOf(cookieKey));
   var start = document.cookie.indexOf(cookieKey);
   if(start != -1){
	   var end = document.cookie.indexOf(';',start);
	   if(end === -1){
		   end = document.cookie.length;
	   }
	   return decodeURIComponent(document.cookie.substring(start + cookieKey.length,end));
   }else{
	   return "无";
   }
}

function getCookie(key){
	//"user=Michael; url=www.1000phone.com; email=zhangzhilin@1000phone.net"
	//["user=Michael","url=www.1000phone.com","email=zhangzhilin@1000phone.net"]
	//[["user","Michael"],["url","www.1000phone.com"],["email","zhangzhilin@1000phone.net"]]
	var arr = document.cookie.split('; ');
	for(var i = 0,len = arr.length;i < len;i ++){
		var list = arr[i].split('=');
		if(encodeURIComponent(key) === list[0]){
			return decodeURIComponent(list[1]);
		}
	}
}

//删除cookie
function removeCookie(key){
	document.cookie = encodeURIComponent(key) + '=;expires=' + new Date(0) + ";path=/";
}
