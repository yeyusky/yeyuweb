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
  };
  // 鼠标进入时 隐藏
  drop.onmouseout = function() {
    shopcar.style.borderColor = "transparent";
    shopcarcon.style.display = "none";
  };
  // 头部js代码交互效果
  //主体左侧导航栏交互效果
  var navUl = document.getElementById("navul");
  var navLi = navUl.getElementsByTagName("li");
  var navlicon = navUl.getElementsByClassName("lnav-con");
  // 遍历所有的li标签  鼠标进入时 让内容显示 鼠标离开 内容隐藏
  for (i = 0; i < navLi.length; i++) {
    navLi[i].index = i;
    navLi[i].onmouseover = function() {
      navlicon[this.index].style.display = "block";
    };
    navLi[i].onmouseout = function() {
      navlicon[this.index].style.display = "none";
    };
  }

  function opmove(ele) {
    // 轮播图效果  改变透明度
    var light = document.getElementById("lbbtn").getElementsByTagName("span");
    var list = document.getElementById("lbbox").getElementsByTagName("li");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var Bannar = document.getElementById(ele);
    var index = 0;
    var timer = null;
    var moved = false;

    for (i = 0; i < light.length; i++) {
      light[i].k = i;
      light[i].onmouseover = function() {
        clearInterval(timer);
        if (!moved) {
          move(this.k);
        }
      };
    }
    prev.onclick = function() {
      clearInterval(timer);
      index--;
      if (index < 0) {
        index = light.length - 1;
      }
      if (!moved) {
        move(index);
      }
    };
    next.onclick = function() {
      clearInterval(timer);
      index++;
      if (index > light.length - 1) {
        index = 0;
      }
      if (!moved) {
        move(index);
      }
    };
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
  // 滑动轮播图  无焦点
  (function slmove() {
    var itBox = document.getElementById("itbox");
    var itlist = itBox.getElementsByTagName("li");
    var itprev = document.getElementById("itprev");
    var itnext = document.getElementById("itnext");
    var num = 0;
    var itmoved = false;
    //自我移动的动画函数
    function lbmove(offset) {
      itmoved = true;
      var newleft = parseInt(itBox.style.left) + offset;
      var time = 1000;
      var interval = 10;
      var speed = offset / (time / interval);

      function itgo() {
        //递归函数执行动画效果
        if (
          (speed < 0 && parseInt(itBox.style.left) > newleft) ||
          (speed > 0 && parseInt(itBox.style.left) < newleft)
        ) {
          itBox.style.left = parseInt(itBox.style.left) + speed + "px";
          setTimeout(itgo, interval);
        } else {
          if (newleft < -(itlist.length - 2) * 800) {
            //如果图片显示在假的第一张 就自动切换到真的第一张
            itBox.style.left = -800 + "px";
          } else if (newleft > -800) {
            //如果图片显示在假的最后一张 就自动切换到真的最后一张
            itBox.style.left = -(itlist.length - 2) * 800 + "px";
          } else {
            itBox.style.left = newleft + "px";
          }
          itmoved = false;
        }
      }
      itgo();
    }
    itnext.onclick = function() {
      num++;
      num > itlist.length - 3 ? (num = 0) : null;
      if (!itmoved) {
        lbmove(-800);
      }
    };
    //点击左按钮向左移动
    itprev.onclick = function() {
      num--;
      num < 0 ? itlist.length - 3 : null;
      if (!itmoved) {
        lbmove(800);
      }
    };
  })();
  // 用户区域鼠标移入移出特效
  var sercon = document.getElementById("ser-con");
  var serconcp = document.getElementById("ser-concp");
  var hjjys = document.getElementsByClassName("hjjy");
  var seritems = serconcp.getElementsByClassName("ser-item");
  var serLista = serconcp.getElementsByClassName("lista");
  for (i = 0; i < hjjys.length; i++) {
    hjjys[i].index = i;
    hjjys[i].onmouseenter = function() {
      for (j = 0; j < hjjys.length; j++) {
        seritems[j].style.display = "none";
        serLista[j].className = "lista";
      }
      seritems[this.index].style.display = "block";
      serLista[this.index].className = "lista Lista";
      sercon.style.zIndex = "0";
      sercon.style.top = "-50px";
      sercon.style.transition = "all 0.5s";
      serconcp.style.zIndex = "1";
      serconcp.style.top = "0px";
      serconcp.style.transition = "all 0.5s";
    };
  }
  for (i = 0; i < serLista.length; i++) {
    serLista[i].index = i;
    serLista[i].onmouseenter = function() {
      for (j = 0; j < serLista.length; j++) {
        serLista[j].className = "lista";
        seritems[j].style.display = "none";
      }
      this.className = "lista Lista";
      seritems[this.index].style.display = "block";
    };
  }

  var serClose = document.getElementById("serclose");
  serClose.onclick = function() {
    sercon.style.zIndex = "1";
    sercon.style.top = "0px";
    sercon.style.transition = "all 0.5s";
    serconcp.style.zIndex = "0";
    serconcp.style.top = "50px";
    serconcp.style.transition = "all 0.5s";
  };

  var dl1 = document.getElementById("dl1");
  var ddlist1 = dl1.getElementsByTagName("a");
  var dlconcp1 = document.getElementById("dlconcp1");
  for (i = 0; i < ddlist1.length; i++) {
    ddlist1[i].index = i;
    ddlist1[i].onmouseover = function() {
      for (j = 0; j < ddlist1.length; j++) {
        ddlist1[j].className = "";
      }
      this.className = "dlon1";
      dlconcp1.style.left = -this.index * 168 + "px";
    };
  }
  var dl2 = document.getElementById("dl2");
  var ddlist2 = dl2.getElementsByTagName("a");
  var dlconcp2 = document.getElementById("dlconcp2");
  for (i = 0; i < ddlist2.length; i++) {
    ddlist2[i].index = i;
    ddlist2[i].onmouseover = function() {
      for (j = 0; j < ddlist2.length; j++) {
        ddlist2[j].className = "";
      }
      this.className = "dlon2";
      dlconcp2.style.left = -this.index * 168 + "px";
    };
  }
  var dl3 = document.getElementById("dl3");
  var ddlist3 = dl3.getElementsByTagName("a");
  var dlconcp3 = document.getElementById("dlconcp3");
  for (i = 0; i < ddlist3.length; i++) {
    ddlist3[i].index = i;
    ddlist3[i].onmouseover = function() {
      for (j = 0; j < ddlist3.length; j++) {
        ddlist3[j].className = "";
      }
      this.className = "dlon3";
      dlconcp3.style.left = -this.index * 168 + "px";
    };
  }
  var dl4 = document.getElementById("dl4");
  var ddlist4 = dl4.getElementsByTagName("a");
  var dlconcp4 = document.getElementById("dlconcp4");
  for (i = 0; i < ddlist4.length; i++) {
    ddlist4[i].index = i;
    ddlist4[i].onmouseover = function() {
      for (j = 0; j < ddlist4.length; j++) {
        ddlist4[j].className = "";
      }
      this.className = "dlon4";
      dlconcp4.style.left = -this.index * 168 + "px";
    };
  }

  // 倒计时效果
  function timeout() {
    // 获取当前时间
    var olddate = new Date();
    var oldtime = olddate.getTime();
    // 获取未来的某个时间
    var newdate = new Date("2019/5/28 00:00:00");
    var newtime = newdate.getTime();
    // 两者做差 获得总的秒数
    var second = Math.floor((newtime - oldtime) / 1000);
    // 求余获得秒数
    var s = second % 60;
    // 获得分钟数
    var min = ((second - s) / 60) % 60;
    // 获得小时数
    var h = (second - s - min * 60) / 3600;
    s = checkTime(s);
    min = checkTime(min);
    h = checkTime(h);
    mstimeh.innerHTML = h;
    mstimem.innerHTML = min;
    mstimes.innerHTML = s;
    if(second<0){
      mstimeh.innerHTML = "0"+"0";
      mstimem.innerHTML = "0"+"0";
      mstimes.innerHTML = "0"+"0";
    }
  }
  timeout();
  setInterval(timeout, 1000);
  // 判断是否大于10 如果小于10 则前面加0
  function checkTime(n) {
    if (n < 10) {
      n = "0" + n;
    }
    return n;
  }







  function lbUnit(ebox,el,ebtn,ea,{
    arrow=false,
    ctrl=false,
    time=1000,
    interval=10,
    stime = 3000
  }){
    var btn = document.getElementById(ebtn)
    var sitlight = btn.getElementsByTagName("span");
    var Box = document.getElementById(el);
    var ea = document.getElementById(ea);
    var prev = ea.getElementsByClassName("arrow")[0];
    var next = ea.getElementsByClassName("arrow")[1];
    var Banner = document.getElementById(ebox);
    var num = 0;
    var ImgW = parseInt(Banner.offsetWidth);
    var moved = false;
    var timer = null;

    //自我移动的动画函数
    function move(offset) {
      moved = true;
      var newleft = parseInt(Box.style.left) + offset;
      // var time = 1000;
      // var interval = 10;
      var speed = offset / (time / interval);

      function go() {
        //递归函数执行动画效果
        if (
          (speed < 0 && parseInt(Box.style.left) > newleft) ||
          (speed > 0 && parseInt(Box.style.left) < newleft)
        ) {
          Box.style.left = parseInt(Box.style.left) + speed + "px";
          setTimeout(go, interval);
        } else {
          if (newleft < -sitlight.length * ImgW) {
            //如果图片显示在假的第一张 就自动切换到真的第一张
            Box.style.left = -ImgW + "px";
          } else if (newleft > -ImgW) {
            //如果图片显示在假的最后一张 就自动切换到真的最后一张
            Box.style.left = -sitlight.length * ImgW + "px";
          } else {
            Box.style.left = newleft + "px";
          }
          moved = false;
        }
      }
      go();
    }
    if(ctrl==false){
      //点击焦点按钮  切换图片
      for (i = 0; i < sitlight.length; i++) {
        sitlight[i].onclick = function() {
          for (j = 0; j < sitlight.length; j++) {
            sitlight[j].className = "";
          }
          this.className = "sitlight";
          var myIndex = parseInt(this.getAttribute("index"));
          var offset = (myIndex - num - 1) * -ImgW;
          if (!moved) {
            move(offset);
          }
          num = myIndex - 1;
        };
      }
      //焦点高亮显示函数
      function showbtn(node) {
        for (i = 0; i < sitlight.length; i++) {
          sitlight[i].className = "";
        }
        sitlight[node].className = "sitlight";
      }
    }else{
      btn.style.display = "none";
    }
    //点击右按钮向右移动
    if(arrow==false){
      next.onclick = function() {
        clearInterval(timer);
        num++;
        if (num > sitlight.length - 1) {
          num = 0;
        }
        if(ctrl==false){
          showbtn(num);
        }
        if (!moved) {
          move(-ImgW);
        }
      };
      //点击左按钮向左移动
      prev.onclick = function() {
        clearInterval(timer);
        num--;
        if (num < 0) {
          num = sitlight.length - 1;
        }
        if(ctrl==false){
          showbtn(num);
        }
        if (!moved) {
          move(ImgW);
        }
      };
    }else{
      next.style.display = "none";
      prev.style.display = "none";
    }
    //优化定时器
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    //定时器
    timer = setInterval(autoPlay, stime);
    //自动播放的函数  向右自动播放
    function autoPlay() {
      num++;
      if (num > sitlight.length - 1) {
        num = 0;
      }
      if(ctrl==false){
        showbtn(num);
      }
      if (!moved) {
        move(-ImgW);
      }
    }
    //鼠标移入时 清除定时器
    Banner.onmouseover = function() {
      clearInterval(timer);
    };
    //鼠标移出时 开启定时器
    Banner.onmouseout = function() {
      timer = setInterval(autoPlay, stime);
    };
  }
  lbUnit("item2-banner","item2-sitbox","item2-sitarrow","item2-btn",{arrow:true,time:500,stime:2000});
  lbUnit("item4-banner","item4-sitbox","item4-sitarrow","item4-btn",{arrow:false,time:500,stime:3000});
  lbUnit("item5-banner","item5-sitbox","item5-sitarrow","item5-btn",{arrow:false,time:500,stime:2000});
  lbUnit("item10-banner","item10-sitbox","item10-sitarrow","item10-btn",{arrow:false,time:500,stime:4000});


  //  主体第四栏左侧选项卡效果 简化版
  var lbdUl = document.getElementById("lbdUl");
  var lbdUlli = lbdUl.getElementsByTagName("li");
  var lbdcon = document.getElementsByClassName("l-bdcon");

  for(i=0;i<lbdUlli.length;i++){
    lbdUlli[i].index = i;
    lbdUlli[i].onmouseenter = function(){
      for(j=0;j<lbdUlli.length;j++){
        lbdUlli[j].className = ""
        lbdcon[j].style.display = "none";
      }
      lbdUlli[this.index].className = "lbdactive";
      lbdcon[this.index].style.display = "block";
    }
  }
  var lbd = document.getElementById("lbd");
  var lbdbtns = document.getElementsByClassName("lbdbtn");
  var lbdboxlist = lbd.getElementsByClassName("lbdbox-list");
  for(let k=0;k<lbdbtns.length;k++){
    mlbdboxlist(lbdbtns[k],lbdboxlist[k]);
  }
  function mlbdboxlist(obj1,obj2){
    var lbdbtnsp = obj1.getElementsByTagName("span");
    for(i=0;i<lbdbtnsp.length;i++){
      lbdbtnsp[i].index = i;
      lbdbtnsp[i].onmouseenter = function(){
        for(j=0;j<lbdbtnsp.length;j++){
          lbdbtnsp[j].className = "";
        }
        lbdbtnsp[this.index].className = "lbdlight";
        obj2.style.left = -this.index * 350 + "px";
      }
    }
  }
  //  主体第四栏左侧选项卡效果 简化版

  //  主体第四栏右侧选项卡效果
  function sltab(){
    var rbdboxlist = document.getElementById("item4-rbox");
    var rbdbtn = document.getElementById("rbdbtn");
    var rbdbtnl = rbdbtn.getElementsByTagName("span");
    for(i=0;i<rbdbtnl.length;i++){
      rbdbtnl[i].index = i;
      rbdbtnl[i].onmouseenter = function(){
        for(j=0;j<rbdbtnl.length;j++){
          rbdbtnl[j].className = "";
        }
        rbdbtnl[this.index].className = "rbdlight";
        rbdboxlist.style.left = - (this.index) * 350 + "px";
        rbdboxlist.style.transition = "left 0.6s";
      }
    }
  }
  sltab();



  // 侧边栏效果
    var ceBox = document.getElementById("cebox");
    var cesidelist = ceBox.getElementsByTagName("i");
    var cesidespan = ceBox.getElementsByTagName("span");
    var ceLi = ceBox.getElementsByTagName("li");
    var ceftop = document.getElementById("cetop");
    var cetopa = ceftop.getElementsByTagName("a")[0];
    var cetopspan = ceftop.getElementsByTagName("span")[0];

    for(i=0;i<ceLi.length;i++){
        ceLi[i].index = i;
        ceLi[i].onmouseover = function() { //鼠标移入侧边栏中  
            for(j=0;j<ceLi.length;j++){   //遍历侧边栏 让其所有背景颜色变成灰色
                cesidelist[j].style.backgroundColor = "#575656";
                cesidespan[j].style.backgroundColor = "#575656";
            }
            cesidelist[this.index].style.backgroundColor = "#a03e3e";  //移入哪一个  哪一个背景颜色变成红色
            cesidespan[this.index].style.backgroundColor = "#a03e3e";
            cesidespan[this.index].style.right = "30px";               //让span标签向左位移
            cesidespan[this.index].style.transition = "right 0.5s";    //动画效果0.5秒
        }
        ceLi[i].onmouseout = function() {   //移出时 让背景恢复为原来的背景  位移回原来的位置 动画效果1s
            cesidelist[this.index].style.backgroundColor = "#575656";
            cesidespan[this.index].style.backgroundColor = "#575656";
            cesidespan[this.index].style.right = "-100px";
            cesidespan[this.index].style.transition = "right 1s";
        }
    }
    ceftop.onmouseover = function(){
        cetopa.style.backgroundColor = "#a03e3e";
        cetopspan.style.backgroundColor = "#a03e3e";
        cetopspan.style.right = "30px";
        cetopspan.style.transition = "right 0.5s";
    }
    ceftop.onmouseout = function(){
        cetopa.style.backgroundColor = "#575656";
        cetopspan.style.backgroundColor = "#575656";
        cetopspan.style.right = "-100px";
        cetopspan.style.transition = "right 1s";
    }


    var toptimer = null;
    ceftop.onclick = function(){
      toptimer = setInterval(function(){
        var scrollp = document.body.scrollTop || document.documentElement.scrollTop;
        var tspeed = Math.floor(-scrollp/9);
        document.body.scrollTop = document.documentElement.scrollTop = scrollp + tspeed;
        if(scrollp == 0){
          clearInterval(toptimer);
        }
      },100);
    }
  // 侧边栏效果

  // 顶部搜索框滑出效果
    var slidH = document.documentElement.clientHeight;
    var slidsearch = document.getElementById("slidsearch");
    window.onscroll = function(){
      var slidtop = document.body.scrollTop || document.documentElement.scrollTop;
      if(slidtop >= slidH){
        slidsearch.style.top = "0px";
        slidsearch.style.transition = "top 0.8s";
      }else{
        slidsearch.style.top = "-52px";
        slidsearch.style.transition = "top 0.8s";
      }
    }
  //  主体第四栏右侧选项卡效果
};   
  //  主体第四栏左侧选项卡效果 复杂版
  // var lbdboxlist1 = document.getElementById("lbdboxlist1");
  // var lbdbtn1 =document.getElementById("lbdbtn1");
  // var lbdbtns1 = lbdbtn1.getElementsByTagName("span");
  // for(i=0;i<lbdbtns1.length;i++){
  //   lbdbtns1[i].index = i;
  //   lbdbtns1[i].onmouseenter = function(){
  //     for(j=0;j<lbdbtns1.length;j++){
  //       lbdbtns1[j].className = "";
  //     }
  //     lbdbtns1[this.index].className = "lbdlight";
  //     lbdboxlist1.style.left = -this.index * 350 + "px";
  //   }
  // }
  // var lbdboxlist2 = document.getElementById("lbdboxlist2");
  // var lbdbtn2 =document.getElementById("lbdbtn2");
  // var lbdbtns2 = lbdbtn2.getElementsByTagName("span");
  // for(i=0;i<lbdbtns2.length;i++){
  //   lbdbtns2[i].index = i;
  //   lbdbtns2[i].onmouseenter = function(){
  //     for(j=0;j<lbdbtns2.length;j++){
  //       lbdbtns2[j].className = "";
  //     }
  //     lbdbtns2[this.index].className = "lbdlight";
  //     lbdboxlist2.style.left = -this.index * 350 + "px";
  //   }
  // }
  // var lbdboxlist3 = document.getElementById("lbdboxlist3");
  // var lbdbtn3 =document.getElementById("lbdbtn3");
  // var lbdbtns3 = lbdbtn3.getElementsByTagName("span");
  // for(i=0;i<lbdbtns3.length;i++){
  //   lbdbtns3[i].index = i;
  //   lbdbtns3[i].onmouseenter = function(){
  //     for(j=0;j<lbdbtns3.length;j++){
  //       lbdbtns3[j].className = "";
  //     }
  //     lbdbtns3[this.index].className = "lbdlight";
  //     lbdboxlist3.style.left = -this.index * 350 + "px";
  //   }
  // }
  // var lbdboxlist4 = document.getElementById("lbdboxlist4");
  // var lbdbtn4 =document.getElementById("lbdbtn4");
  // var lbdbtns4 = lbdbtn4.getElementsByTagName("span");
  // for(i=0;i<lbdbtns4.length;i++){
  //   lbdbtns4[i].index = i;
  //   lbdbtns4[i].onmouseenter = function(){
  //     for(j=0;j<lbdbtns4.length;j++){
  //       lbdbtns4[j].className = "";
  //     }
  //     lbdbtns4[this.index].className = "lbdlight";
  //     lbdboxlist4.style.left = -this.index * 350 + "px";
  //   }
  // }
  // var lbdboxlist5 = document.getElementById("lbdboxlist5");
  // var lbdbtns5 =document.getElementById("lbdbtn5");
  // var lbdbtns5 = lbdbtn5.getElementsByTagName("span");
  // for(i=0;i<lbdbtns5.length;i++){
  //   lbdbtns5[i].index = i;
  //   lbdbtns5[i].onmouseenter = function(){
  //     for(j=0;j<lbdbtns5.length;j++){
  //       lbdbtns5[j].className = "";
  //     }
  //     lbdbtns5[this.index].className = "lbdlight";
  //     lbdboxlist5.style.left = -this.index * 350 + "px";
  //   }
  // }
  //  主体第四栏左侧选项卡效果 复杂版

// $("#ser-con #yx").mouseenter(function() {
//   $("#ser-con").css("display","none");
//   $("#ser-con").animate({top:-50},200);
//   $("#ser-concp").css("display","block");
//   $("#ser-concp").animate({top:0},200);
// })
