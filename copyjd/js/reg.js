var getcode = document.getElementById("getcode");
var error1 = document.getElementById("error1");
var error2 = document.getElementById("error2");
var error3 = document.getElementById("error3");
var status = document.getElementById("status");
var cancel = document.getElementById("cancel");
getcode.onclick = function(){
    var code = getcodevalue.value;
    if(code == "建议使用常用手机号" || code == ""){
        error1.style.display = "block";
    }
}
getcodevalue.onfocus = function(){
    var code = getcodevalue.value;
    if(code == "建议使用常用手机号"){
        getcodevalue.value = "";
        getcodevalue.style.color = "#333";
        error1.style.display = "none";
        error2.style.display = "block";
    }
    getcodevalue.onkeydown = function(){
        cancel.style.display = "block";
        document.getElementById("status").style.display = "none";
        // if(keyCode == null){
        //     cancel.style.display = "none";
        // }
    }
}
getcodevalue.onblur = function(){
    var code = getcodevalue.value;
    
    var reg = /^1[356789]\d{9}$/;
      
    var code1 = reg.test(code);
    if (code1) {
        cancel.style.display = "none";
        document.getElementById("status").style.display = "block";
        error1.style.display = "none";
        error2.style.display = "none";
    } else{
        cancel.style.display = "none";
        document.getElementById("status").style.display = "none";
        error1.style.display = "none";
        error2.style.display = "none";
        error3.style.display = "block";
    }
    if(code == ""){
        getcodevalue.value = "建议使用常用手机号";
        getcodevalue.style.color = "rgb(204, 204, 204)";
        error1.style.display = "none";
        error2.style.display = "none";
        error3.style.display = "none";
        cancel.style.display = "none";
    }
}


    var newdate = new Date();
    var y = newdate.getFullYear();
    var m = newdate.getMonth()+1;
    var d = newdate.getDate();
    var h = newdate.getHours();
    var m1 = newdate.getMinutes();
    var se = newdate.getSeconds();
    var str = y +"/" + m + "/" + d + " " + h + ":" + (m1+1) + ":" + se;
    console.log(str);
function timeout() {
    // 获取当前时间
    var olddate = new Date();
    var oldtime = olddate.getTime();
    // 获取未来的某个时间
    var cnewdate  = new Date(str);
    var cnewtime = cnewdate.getTime();
    // 两者做差 获得总的秒数
    var second = Math.floor((cnewtime - oldtime) / 1000);
    console.log(second);
    // 求余获得秒数
    // var s = second % 60;
    // 获得分钟数
    // var min = ((second - s) / 60) % 60;
    // // 获得小时数
    // var h = (second - s - min * 60) / 3600;
    second = checkTime(second);
    if(second <= 0){
        getphcode.innerHTML = "重新获取";
        clearInterval(timer);
    }else{
        getphcode.innerHTML = second + "s后重新获取";
    }
  }
  timeout();
  var timer = setInterval(timeout, 1000);
  // 判断是否大于10 如果小于10 则前面加0
  function checkTime(n) {
    if (n < 10) {
      n = "0" + n;
    }
    return n;
  }
