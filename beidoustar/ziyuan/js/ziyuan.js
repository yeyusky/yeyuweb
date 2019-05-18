window.onload = function() {
  //   导航栏功能
  function dropdownnav(ele) {
    var nav = document.getElementById(ele);
    var lists = nav.getElementsByTagName("li");
    var icons = nav.getElementsByTagName("i");
    var dropnav = nav.getElementsByClassName("navdropdown");
    for (i = 0; i < lists.length; i++) {
      lists[i].index = i;
      lists[i].onmouseover = function() {
        dropnav[this.index].style.display = "block";
      };
      lists[i].onmouseout = function() {
        dropnav[this.index].style.display = "none";
      };
      lists[i].onclick = function() {
        for (j = 0; j < lists.length; j++) {
          icons[j].className = "";
        }
        icons[this.index].className = "barrow";
      };
    }
  }
  dropdownnav("nav");

  //   主体左侧navbar切换功能
  function navchange(ele) {
    var navleft = document.getElementById(ele);
    var list = navleft.getElementsByTagName("li");
    var con = document.getElementsByClassName("right-containar");
    for (i = 0; i < list.length; i++) {
      list[i].index = i;
      list[i].onclick = function() {
        for (j = 0; j < list.length; j++) {
          list[j].className = "";
          con[j].className = "right-containar";
        }
        this.className = "navbaracT";
        con[this.index].className = "right-containar zyactive";
      };
    }
  }
  navchange("navbarUl");

  //   向左循环滚动
  function roll(a1, b1, c1) {
    var roll = document.getElementById(a1);
    var demo1 = document.getElementById(b1);
    var demo2 = document.getElementById(c1);
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
};
