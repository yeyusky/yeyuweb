import { url } from "inspector";

var meg = location.search.substring(1);
var num = meg.indexOf("=");
var res = meg.substring(num + 1);
if (res == "4601") {
  info.innerHTML = "注册失败，请重新注册";
}
// else if (res == "4601") {
// info.innerHTML = "登录成功";

function getAjax(){
  var Ajax;
  //处理兼容性问题
  if(window.XMLHttpRequest){
   Ajax = new window.XMLHttpRequest()
  }else{
   Ajax = new ActiveXObject("Microsoft.XMLHTTP");
  }
  return Ajax;
}
//用户名
var User = document.getElementById("username");
User.onfocus = function() {
  var usertext = User.value;
  if(usertext == "请输入用户名"){
      User.value = "";
  }
}
User.onblur = function(){
  var usertext = User.value;
  if(usertext == ""){
    User.value = "请输入用户名";
  }else{
    var ajax = getAjax();
    ajax.open("POST","http://localhost:3000/testreg",true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("u=" + usertext);
    ajax.onreadystatechange = function(){
      if(ajax.readyState == 4 && ajax.status == 200){
        var json = JSON.parse(ajax.responseText);
        if(json.hasUser == 1){
          inof.innerHTML = "该用户名已经存在，请更换";
          //如果存在该用户 关闭注册按钮
          document.all("register").disabled=true;
        }else{
          inof.innerHTML = "可以注册";
          //如果该用户不存在 开启注册按钮
          document.all("register").disabled=false;
        }
      }
    }
  }
}
//密码
var Pass = document.getElementById("password");
Pass.onfocus = function() {
  var passtext = Pass.value;
  if(passtext == "请输入密码"){
      Pass.value = "";
  }
  Pass.type = "password";
}
Pass.onblur = function() {
  var passtext = Pass.value;
  if(passtext == ""){
      Pass.value = "请输入密码";
      Pass.type = "text";
  }
}
//确认密码
var cPass = document.getElementById("cpassword");
cPass.onfocus = function() {
  var cpasstext = cPass.value;
  if(cpasstext == "请确认密码"){
      cPass.value = "";
  }
  cPass.type = "password";
}
cPass.onblur = function() {
  var cpasstext = cPass.value;
  if(cpasstext == ""){
      cPass.value = "请确认密码";
      cPass.type = "text";
  }
}
//性别
var Sex = document.getElementById("sex");
Sex.onfocus = function() {
  var sextext = Sex.value;
  if(sextext == "请输入性别"){
      Sex.value = "";
  }
}
Sex.onblur = function() {
  var sextext = Sex.value;
  if(sextext == ""){
    Sex.value = "请输入性别";
  }
}
//电话
var Phone = document.getElementById("phone");
Phone.onfocus = function() {
  var phonetext = Phone.value;
  if(phonetext == "请输入电话"){
    Phone.value = "";
  }
}
Phone.onblur = function() {
  var phonetext = Phone.value;
  if(phonetext == ""){
    Phone.value = "请输入电话";
  }
}
//邮箱
var Email = document.getElementById("email");
Email.onfocus = function() {
  var emailtext = Email.value;
  if(emailtext == "请输入邮箱"){
    Email.value = "";
  }
}
Email.onblur = function() {
  var emailtext = Email.value;
  if(emailtext == ""){
    Email.value = "请输入邮箱";
  }
}