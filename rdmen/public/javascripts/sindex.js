function opmove(ele){
  var light = document.getElementById("lbbtn").getElementsByTagName("span");
  var list = document.getElementById("lbbox").getElementsByTagName("li");
  var Bannar = document.getElementById(ele);
  var index = 0;
  var timer = null;
  var moved = false;

  for (i = 0; i < light.length; i++) {
    light[i].k = i;
    light[i].onclick = function() {
      clearInterval(timer);
      if (!moved) {
        move(this.k);
      }
    };
  }
  //封装函数
  function move(node) {
    for (i = 0; i < light.length; i++) {
      light[i].className = "";
      list[i].style.opacity = "0";
    }
    list[node].style.opacity = "1";
    light[node].className = "lbactive";
    index = node;
  }
  //封装自动播放的函数
  function autoPlay() {
    index++;
    if (index > light.length - 1) {
      index = 0;
    }
    if (!moved) {
      move(index);
    }
  }
  //优化定时器  启动定时前 清除所有的定时器
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  //定时器
  timer = setInterval(autoPlay, 3000);
  //鼠标进入时 清除定时器
  Bannar.onmouseover = function() {
    clearInterval(timer);
  };
  //鼠标移出时 开启定时器
  Bannar.onmouseout = function() {
    timer = setInterval(autoPlay, 3000);
  };
}
opmove("bannar");

var meg = location.search.substring(1);
var num = meg.indexOf("=");
var res = meg.substring(num + 1);
if(res == "4501"){
  alert("登录成功");
}


// ,function(){
//   var _this = $(this);
//   if(web.webdocWin<640 || _this.hasClass('isSlideUp')) return;
//   _this.addClass('isSlideUp');
//   _this.find('.brand-subnav').slideUp(400,function(){
//     _this.removeClass('isSlideUp isSlideDown');
//   });

// });


// var codq = document.getElementById("cpdq");
// var subnav = document.getElementById("subnav");
// function slideUp(ele, time, num, totalH) {
//   if (ele.offsetHeight > 0) {
//     var ah = totalH / (time / num);
//     var currentH = totalH;
//     var timer = setInterval(function() {
//       currentH = currentH - ah;
//       ele.style.height = currentH + "px";
//       if (currentH <= 0) {
//         clearInterval(timer);
//         ele.style.display = "none";
//         ele.style.height = totalH + "px";
//       }
//     }, 10);
//   } else {
//     slideDown(ele, time, num, totalH);
//   }
// }
// function slideDown(ele, time, num, totalH) {
//   if (ele.offsetHeight == 0) {
//     ele.style.display = "block";
//     ele.style.height = "0px";
//     var ah = totalH / (time / num);
//     var currentH = 0;
//     var timer = setInterval(function() {
//       currentH = currentH + ah;
//       ele.style.height = currentH + "px";
//       if (currentH >= totalH) {
//         clearInterval(timer);
//         ele.style.height = totalH + "px";
//       }
//     }, 10);
//   } else {
//     slideUp(ele, time, num, totalH);
//   }
// }

// cpdq.onmouseenter = function() {
//   slideDown(subnav, 500, 20, 218);
//   codq.style.color = "#38beef";
// };
// cpdq.onmouseleave = function() {
//   slideUp(subnav, 500, 20, 218);
//   codq.style.color = "#ffffff";
// };
// var shop = document.getElementById("shop");
// var shoplist = document.getElementById("shop-list");
// shop.onmouseenter = function() {
//   slideDown(shoplist, 500, 20, 73);
//   shop.style.color = "#38beef";
// };
// shop.onmouseleave = function() {
//   slideUp(shoplist, 500, 20, 73);
//   shop.style.color = "#ffffff";
// };