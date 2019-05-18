window.onload = function() {
  
  // 导航栏功能
  function dropdownnav(ele){
    var nav = document.getElementById(ele)
    var lists = nav.getElementsByTagName("li");
    var icons = nav.getElementsByTagName("i");
    var dropnav = nav.getElementsByClassName("navdropdown");
    for(i=0;i<lists.length;i++){
      lists[i].index = i;
      lists[i].onmouseover = function() {
        dropnav[this.index].style.display = "block";
      }
      lists[i].onmouseout = function() {
        dropnav[this.index].style.display = "none";
      }
      lists[i].onclick = function() {
        for(j=0;j<lists.length;j++){
          icons[j].className = "";
        }
        icons[this.index].className = "barrow"
      }
    }
  }
  dropdownnav("nav");
 

  // 轮播图
  function lunbo(el) {
    var pic1 = document.getElementById("left-con").getElementsByTagName("li");
    var btn = document.getElementById("left-btn").getElementsByTagName("span");
    var light = document.getElementById("right-con").getElementsByTagName("i");
    var span = document.getElementById("right-con").getElementsByTagName("span");
    var pic2 = document.getElementById("right-con").getElementsByTagName("li");
    var con = document.getElementById(el);
    var k = 0;
    var timer;

    for (i = 0; i < btn.length; i++) {
      btn[i].index = i;
      btn[i].onclick = function() {
        clearInterval(timer);
        change(this.index);
      };
    }
    for (i = 0; i < pic2.length; i++) {
      pic2[i].k = i;
      pic2[i].onclick = function() {
        clearInterval(timer);
        change(this.k);
      };
    }
    //定时器开始前  清除已有的定时器
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    //定时器
    timer = setInterval(autoPlay, 3000);
    //自动播放函数
    function autoPlay() {
      k++;
      if (k > btn.length - 1) {
        k = 0;
      }
      change(k);
    }
    //鼠标移入 清除定时器
    con.onmouseover = function() {
      clearInterval(timer);
    };
    //鼠标移出 定时器开始
    con.onmouseout = function() {
      timer = setInterval(autoPlay, 3000);
    };
    //封装函数
    function change(node) {
      for (j = 0; j < btn.length; j++) {
        btn[j].className = "";
        pic1[j].style.opacity = "0";
        light[j].className = "";
        span[j].className = "";
      }
      btn[node].className = "btn";
      pic1[node].style.opacity = "1";
      light[node].className = "i";
      span[node].className = "s";
      k = node;
    }
  }
  lunbo("main-con");

  // 向左循环滚动
  function roll(al, bl, cl) {
    var roll = document.getElementById(al);
    var demo1 = document.getElementById(bl);
    var demo2 = document.getElementById(cl);
    var speed = 30;
    var timer;
    demo2.innerHTML = demo1.innerHTML;

    function marquee() {
      if (roll.scrollLeft >= demo1.offsetWidth) {
        roll.scrollLeft = 0;
      } else {
        roll.scrollLeft++;
      }
    }
    timer = setInterval(marquee, speed);
    roll.onmouseover = function() {
      clearInterval(timer);
    };
    roll.onmouseout = function() {
      timer = setInterval(marquee, speed);
    };
  }
  roll("weabox", "demo1", "demo2");
  roll("news-roll", "demo3", "demo4");

  // 选项卡切换  要闻BOX
  var bul = document.getElementsByClassName("impnew-itemul")[0];
  var oicon = bul.getElementsByTagName("i");
  var obox = document.getElementsByClassName("yaowenBox");
  var obul = bul.getElementsByTagName("li");
  for (i = 0; i < obul.length; i++) {
    obul[i].index = i;
    obul[i].onclick = function() {
      for (j = 0; j < obul.length; j++) {
        obul[j].className = "";
        oicon[j].className = "";
        obox[j].className = "yaowenBox";
      }
      this.className = "lis";
      oicon[this.index].className = "lis-icon";
      obox[this.index].className = "yaowenBox acT";
    };
  }

  // 应用切换功能
  var YYbox = document.getElementsByClassName("yingyongcenter")[0];
  var YYitem = YYbox.getElementsByClassName("yingyongcenter-item");
  var YYlist = YYbox.getElementsByClassName("yingyongcenter-con");

  for (i = 0; i < YYitem.length; i++) {
    YYitem[i].index = i;
    YYitem[i].onmouseover = function() {
      flag = true;
      for (j = 0; j < YYitem.length; j++) {
        YYlist[j].className = "yingyongcenter-con";
        // YYlist[j].style.transition = "all  0.3s";
      }
      YYlist[this.index].className = "yingyongcenter-con con-active";
      // YYlist[this.index].style.transition = "all  0.3s";
    };
  }

  // function addEvent(ele,type,fn) {
  //   if(ele.addEventListener){
  //       ele.addEventListener(type,fn,false);
  //   }
  //   // else{
  //   //     ele.attachEvent("on"+ type,fn);
  //   // }
  // }
  // function show(ele){
  //   var Earrow = ele.target || ele.srcElement;
  //     for(j=0;j<YYitem.length;j++){
  //       YYlist[j].className = "yingyongcenter-con";
  //       YYlist[j].style.transition = "all  0.3s";
  //     }
  //     // while(Earrow.tagName != "DIV" && Earrow.tagName == "BODY"){
  //     //   Earrow = Earrow.parentNode;
  //     // }
  //     Earrow.className = "yingyongcenter-con con-active";
  //     Earrow.style.transition = "all  0.3s";
  //   }
  // addEvent(YYitem,"click",show);
};
