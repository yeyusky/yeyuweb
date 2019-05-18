window.onload = function() {
  // 页面顶部JS代码交互效果
  // 获取li标签
  var list = document.getElementsByClassName("list");
  // 获取class为list-con的元素
  var listcon = document.getElementsByClassName("list-con");
  // 获取class为active的元素
  var listt = document.getElementsByClassName("liactive");
  // 遍历所有的active元素
  for (i = 0; i < list.length; i++) {
    list[i].index = i;
    // 鼠标进入时 让子导航栏显示 当前的背景颜色变成白色
    list[i].onmouseover = function() {
      listcon[this.index].style.display = "block";
      listt[this.index].style.backgroundColor = "#fff";
    };
    // 鼠标离开时 让子导航栏隐藏 当前的背景颜色变成原来的灰色
    list[i].onmouseout = function() {
      listt[this.index].style.backgroundColor = "#e3e4e5";
      listcon[this.index].style.display = "none";
    };
  }

  // 获取父元素
  var ct = document.getElementById("citytext");
  // 获取id为citytitle的元素
  var ctshow = document.getElementById("citytitle");
  // 获取id为citys的元素
  var cthide = document.getElementById("citys");
  //获取 城市所在的元素
  var dl = ct.getElementsByTagName("dl")[0];
  var ctactive = dl.getElementsByTagName("a");
  // 获取显示城市的元素
  var spaninner = document.getElementById("spaninner");
  // 鼠标进入时  背景变色 且 下面的citys显示
  ct.onmouseover = function() {
    ctshow.style.backgroundColor = "#fff";
    cthide.style.display = "block";
  };
  // 鼠标离开时  背景变回原来的颜色 且 下面的citys隐藏
  ct.onmouseout = function() {
    ctshow.style.backgroundColor = "#e3e4e5";
    cthide.style.display = "none";
  };
  // 点击哪个城市 就选中哪个城市
  for (i = 0; i < ctactive.length; i++) {
    ctactive[i].index = i;
    ctactive[i].onclick = function() {
      for (j = 0; j < ctactive.length; j++) {
        ctactive[j].className = "";
      }
      this.className = "ctactive";
      spaninner.innerHTML = this.innerHTML;
    };
  }
  // 获取京东手机的id
  var mobileshow = document.getElementById("jdmobile");
  var phma = document.getElementById("phma");
  // 获取京东手机内容的id
  var mobilehide = document.getElementById("phcon");
  // 鼠标移入 让内容显示
  mobileshow.onmouseenter = function() {
    mobilehide.style.display = "block";
    phma.style.display = "none";
  };
  // 鼠标移出 让内容隐藏
  mobileshow.onmouseleave = function() {
    mobilehide.style.display = "none";
    phma.style.display = "block";
  };
  // 页面顶部JS代码交互效果
  // 头部js代码交互效果
  // 获取购物车的id
  var drop = document.getElementById("dropdown");
  var shopcar = document.getElementById("shopcar"); 
  var shopcarcon = document.getElementById("shopcarcon"); 
  // 鼠标进入时  显示
  drop.onmouseover = function() {
    shopcar.style.borderColor = "#ccc";
    shopcarcon.style.display = "block";
  }
  // 鼠标进入时 隐藏
  drop.onmouseout = function() {
    shopcar.style.borderColor = "transparent";
    shopcarcon.style.display = "none";
  }
  // 头部js代码交互效果
};
