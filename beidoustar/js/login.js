window.onload = function() {
    var User = document.getElementById("username");
    var Pass = document.getElementById("password");
    User.onfocus = function() {
        var usertext = User.value;
        if(usertext == "用户名"){
            User.value = "";
        }
    }
    User.onblur = function() {
        User.value = "用户名";
    }
    Pass.onfocus = function() {
        var passtext = Pass.value;
        if(passtext == "密码"){
            Pass.value = "";
        }
        Pass.type = "password";
    }
    Pass.onblur = function() {
        Pass.value = "密码";
        Pass.type = "text";
    }
}