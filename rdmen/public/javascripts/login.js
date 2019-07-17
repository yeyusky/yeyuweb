var username = document.getElementById("username");
var password = document.getElementById("password");
username.onfocus = function(){
    var uv = username.value;
    if(uv == "用户名"){
        username.value = "";
    }
}
username.onblur = function(){
    var uv = username.value;
    if(uv == ""){
        username.value = "用户名";
    }
}
password.onfocus = function() {
    var pv = password.value;
    if(pv == "密码"){
        password.value = "";
    }
    password.type = "password";
}
password.onblur = function() {
    var pv = password.value;
    if(pv == ""){
        password.value = "密码";
        password.type = "text";
    }   
}
var meg = location.search.substring(1);
var num = meg.indexOf("=");
var res = meg.substring(num + 1);
if (res == "4602") {
//   info.innerHTML = "注册失败，请重新注册";
 alert("该用户不存在，登录失败");
}
