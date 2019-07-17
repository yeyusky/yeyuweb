var listUl = document.getElementById("listUl");
var list = listUl.getElementsByTagName("li");
for (i = 0; i < list.length; i++) {
  list[i].index = i;
  list[i].onclick = function() {
    for (j = 0; j < list.length; j++) {
      list[j].className = "";
    }
    list[this.index].className = "point";
  };
}

var roll = document.getElementById("nav-scroll");
var left = document.getElementById("left");
var right = document.getElementById("right");
var ImgW = 150;
var moved = false;
var num = 0;
var time = 800;
var interval = 15;

//自我移动的动画函数
function move(offset) {
  moved = true;
  var newleft = parseInt(roll.style.left) + offset;
  // var time = 1000;
  // var interval = 10;
  var speed = offset / (time / interval);

  function go() {
    //递归函数执行动画效果
    if (
      (speed < 0 && parseInt(roll.style.left) > newleft) ||
      (speed > 0 && parseInt(roll.style.left) < newleft)
    ) {
      roll.style.left = parseInt(roll.style.left) + speed + "px";
      setTimeout(go, interval);
    } else {
      if (newleft < -12 * ImgW) {
        //如果图片显示在假的第一张 就自动切换到真的第一张
        roll.style.left = -ImgW + "px";
      } else if (newleft == 0) {
        //如果图片显示在假的最后一张 就自动切换到真的最后一张
        roll.style.left = -12 * ImgW + "px";
      } else {
        roll.style.left = newleft + "px";
      }
      moved = false;
    }
  }
  go();
}
//点击右按钮向右移动
left.onclick = function() {
  num++;
  if (num > 12) {
    num = 0;
  }
  if (!moved) {
    move(-ImgW);
  }
};
//点击左按钮向左移动
right.onclick = function() {
  num--;
  if (num < 0) {
    num = 12;
  }
  if (!moved) {
    move(ImgW);
  }
};

$('#cpdq').mouseenter(function(){
  $("#cpdq .subnav").stop(true,false).slideDown(400,function(){});
}).mouseleave(function(){
  $("#cpdq .subnav").slideUp(400,function(){});
})
$('#shop').mouseenter(function(){
  $("#shop .shop-list").stop(true,false).slideDown(400,function(){});
}).mouseleave(function(){
  $("#shop .shop-list").slideUp(400,function(){});
})

var wxcode = document.getElementById("wxcode");
var code = document.getElementById("code");
wxcode.onmouseenter = function() {
  code.style.opacity = "1";
};
wxcode.onmouseleave = function() {
  code.style.opacity = "0";
};