window.onload = function(){
	//flag表示登录状态，为true时表示已登录
	var flag = localStorage.getItem("flag");
	if (flag === "true") {
		flag = true;
	}else{
		flag = false;
	};
	if (flag) {
		var login_register_bar = document.getElementById("login-register-bar");
  		login_register_bar.style.visibility = "hidden";

  		var user_bar = document.getElementById("user-bar");
  		user_bar.style.visibility = "visible";
	}else{
		var login_register_bar = document.getElementById("login-register-bar");
  		login_register_bar.style.visibility = "visible";

  		var user_bar = document.getElementById("user-bar");
  		user_bar.style.visibility = "hidden";
	};
}

var hbtn_login = document.getElementById("hbtn-login");
hbtn_login.onclick = function(){
	var	mask = document.getElementById("mask");
	mask.style.visibility = "visible";

	var login_bar = document.getElementById("login-bar");
	login_bar.style.position = "static";
	login_bar.style.left = "0";

	var	login_bar_parent = document.getElementById("login-bar-parent");
	login_bar_parent.style.cssText = "z-index: 3000;";
}

var btn_close = document.getElementById("btn-close");
// ie?
// var close_onclick = function(){
// 	var	mask = document.getElementById("mask");
// 	mask.style.visibility = "hidden";

// 	var login_bar = document.getElementById("login-bar");
// 	login_bar.style.position = "absolute";
// 	login_bar.style.left = "-999em";

// 	var	login_bar_parent = document.getElementById("login-bar-parent");
// 	login_bar_parent.style.cssText = "z-index: -1;";
// };
function close_onclick(){
	var	mask = document.getElementById("mask");
	mask.style.visibility = "hidden";

	var login_bar = document.getElementById("login-bar");
	login_bar.style.position = "absolute";
	login_bar.style.left = "-999em";

	var	login_bar_parent = document.getElementById("login-bar-parent");
	login_bar_parent.style.cssText = "z-index: -1;";
};
btn_close.onclick = close_onclick;


/* 验证用户账号信息，若正确，则进入管理系统，若错误，输入边框和字体变红色 */
var btn_login = document.getElementById("btn-login");
btn_login.onclick = function(){
  	var email = document.getElementById("email").value;
  	var password = document.getElementById("password").value;

  	if (email=="570556057@qq.com" && password=="123456") {
  		var user_bar = document.getElementById("user-bar");
  		user_bar.style.visibility = "visible";
  		//flag表示登录状态，为true时表示已登录
  		localStorage.setItem("flag", true);
  		close_onclick();
  	}else{
  		document.getElementById("email").className += ' input-invalid';
  		document.getElementById("password").className += ' input-invalid';
  	}
}

/* 恢复边框的正常样式 */
function stycleChange()
{
	document.getElementById("email").className = 'item email';
  	document.getElementById("password").className = 'item password';
}


// 退出当前账号
var hbtn_lgout = document.getElementById("hbtn-lgout");
hbtn_lgout.onclick = function(){
	var login_register_bar = document.getElementById("login-register-bar");
  	login_register_bar.style.visibility = "visible";

  	var user_bar = document.getElementById("user-bar");
  	user_bar.style.visibility = "hidden";
  	//flag表示登录状态，为true时表示已登录
  	localStorage.setItem("flag", false);
}



