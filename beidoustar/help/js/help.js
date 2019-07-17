window.onload = function() {
  var Wxin = document.getElementById("wxin");
  var Ewm = document.getElementById("ewm");
  Wxin.onmouseenter = function(){
    Ewm.style.display = "block";
  }
  Wxin.onmouseleave = function(){
    Ewm.style.display = "none";
  }
  var Sel = document.getElementById("sel");
  var selUl = document.getElementById("selUl");
  Sel.onmouseenter = function(){
    selUl.style.display = "block";
  }
  Sel.onmouseleave = function(){
    selUl.style.display = "none";
  }

  var searchIn = document.getElementById("searchIn");
  searchIn.onfocus = function() {
    var searchtext = searchIn.value;
    if(searchtext == "搜索您需要的内容..."){
      searchIn.value = "";
    }
  }
  searchIn.onblur = function() {
    var searchtext = searchIn.value;
    if(searchtext == ""){
      searchIn.value = "搜索您需要的内容...";
    }
  }
  
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
function navchange(ele){
  var navleft = document.getElementById(ele);
  var list = navleft.getElementsByTagName("li");
  var con = document.getElementsByClassName("right-containar");
  for(i=0;i<list.length;i++){
    list[i].index = i;
    list[i].onclick = function() {
      for(j=0;j<list.length;j++){
        list[j].className = "";
        con[j].className = "right-containar";
      }
      this.className = "navbaracT";
      con[this.index].className = "right-containar hpactive";
    }
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
