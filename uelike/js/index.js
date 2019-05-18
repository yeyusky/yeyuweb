window.onload = function() {
  var cleft = parseInt($(".center").css("left"));
  var ctop = parseInt($(".center").css("top"));
  var lleft = parseInt($(".left").css("left"));
  var ltop = parseInt($(".left").css("top"));
  var rleft = parseInt($(".right").css("left"));
  var rtop = parseInt($(".right").css("top"));
  $(window).mousemove(function(e) {
    var e = e || window.event;
    var l = e.clientX;
    var t = e.clientY;
    var cw = $(".center").width();
    var ch = $(".center").height();
    var lw = $(".left").width();
    var lh = $(".left").height();
    var rw = $(".right").width();
    var rh = $(".right").height();
    $(".center").animate(
      { left: cleft - (cw - l) / 15, top: ctop + (ch - t) / 10 },
      20
    );
    $(".left").animate(
      { left: lleft - (lw - l) / 30, top: ltop + (lh - t) / 8 },
      20
    );
    $(".right").animate(
      { left: rleft - (rw - l) / 20, top: rtop + (rh - t) / 8 },
      20
    );
    // $(".center").animate({left:(l/(lleft+(lw/2)))+lleft,top:(t/(ltop+(lh/2)))+ltop},30);
  });

  //新闻的动态效果
  //鼠标移入newsimg时 遮罩查看显示 移出时  隐藏
  $(".news .newsimg")
    .mouseover(function() {
      $(".news .newsimg .diandian").css("display", "block");
    })
    .mouseout(function() {
      $(".news .newsimg .diandian").css("display", "none");
    });
  $(".news .newsmain .newspage li").click(function() {
    var index = $(this).index();
    $(".news .newsmain .newspage li")
      .removeClass()
      .eq(index)
      .addClass("on");
    $(".news .newsmain .newsitem")
      .removeClass("newsactive")
      .eq(index)
      .addClass("newsactive");
  });
  //点击打开新闻按钮  新闻高度慢慢变大 同时 向左移动 动画做完 按钮变成关闭的样式
  $("#open").click(function() {
    $(".news").animate({ height: 500, left: 460, top: 0 }, 800, "swing");
    setTimeout(function() {
      $("#open").css("display", "none");
      $("#close").css("display", "block");
    }, 1000);
  });
  //点击关闭新闻按钮  新闻高度慢慢变小 同时 向右移动 动画做完 按钮变成打开的样式
  $("#close").click(function() {
    $(".news").animate({ height: 67, left: 900, top: 30 }, 800, "swing");
    setTimeout(function() {
      $("#open").css("display", "block");
      $("#close").css("display", "none");
    }, 1000);
  });
  //轮播左右按钮效果
  $(".prev")
    .mouseover(function() {
      $(".prev").animate({ backgroundPositionY: -20 }, 300, "swing");
    })
    .mouseout(function() {
      $(".prev").animate({ backgroundPositionY: 0 }, 300, "swing");
    });
  $(".next")
    .mouseover(function() {
      $(".next").animate({ backgroundPositionY: -20 }, 300, "swing");
    })
    .mouseout(function() {
      $(".next").animate({ backgroundPositionY: 0 }, 300, "swing");
    });

  //鼠标进入时每个li时的效果
  $(".lbcon ul li")
    .mouseenter(function() {
      var i = $(this).index();
      $(".lbimgtext")
        .eq(i)
        .animate({ bottom: 0 }, 500, "swing");
      $(".lblook")
        .eq(i)
        .animate({ top: 30 }, 500, "swing");
    })
    .mouseleave(function() {
      var i = $(this).index();
      $(".lbimgtext")
        .eq(i)
        .animate({ bottom: -40 }, 500, "swing");
      $(".lblook")
        .eq(i)
        .animate({ top: -47 }, 500, "swing");
    });

  // 轮播图效果
  var timer = null;
  var moved = false;
  var index = 0;
  var len = $(".lbcon ul li").size() - 2; //获取 焦点的长度
  $(".prev").click(function() {
    //向左移动
    clearInterval(timer);
    index--;
    if (!moved) {
      move();
    }
  });
  $(".next").click(function() {
    //向右移动
    clearInterval(timer);
    index++;
    if (!moved) {
      move();
    }
  });
  function move() {
    $(".lbcon ul")
      .stop(false, true)
      .animate(
        {
          left: -(index + 1) * 223
        },
        800,
        function() {
          if (index == len) {
            index = 0;
            $(".lbcon ul").css("left", -(index + 1) * 223 + "px");
          } else if (index == -1) {
            index = len - 1;
            $(".lbcon ul").css("left", -len * 223 + "px");
          }
        }
      );
  }
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  timer = setInterval(function() {
    //定时器
    index++;
    if (!moved) {
      move();
    }
  }, 2000);
  $(".lbcon ul")
    .mouseover(function() {
      //移入时清除定时器
      clearInterval(timer);
    })
    .mouseout(function() {
      //移出时开启定时器
      timer = setInterval(function() {
        index++;
        if (!moved) {
          move();
        }
      }, 2000);
    });
  $(".ctrlarrow")
    .mouseover(function() {
      //移入时清除定时器
      clearInterval(timer);
    })
    .mouseout(function() {
      //移出时开启定时器
      timer = setInterval(function() {
        index++;
        if (!moved) {
          move();
        }
      }, 2000);
    });
  //轮播效果

  //导航栏效果
  //鼠标进入时 改变移动的背景left值  mouseenter 和 mouseleave 效果好于mouseover 和 mouseout 效果
  $(".navbar ul li")
    .mouseenter(function() {
      var index = $(this).index();
      var l = $(".navbar ul li")
        .eq(index)
        .offset().left;
      $(".navmove")
        .stop(true, true)
        .animate({ left: l - 200 }, 400);
    })
    .click(function() {
      var index = $(this).index();
      var l = $(".navbar ul li")
        .eq(index)
        .offset().left;
      $(".navbar ul li")
        .removeClass("active")
        .eq(index)
        .addClass("active");
      $(".navmove")
        .stop(true, true)
        .animate({ left: l - 200 }, 400);
    });
  //鼠标离开整个box时 背景自动回到left=0的时候
  $(".navbar ul").mouseleave(function() {
    var al = $(".navbar ul li.active").offset().left;
    $(".navmove")
      .stop(false, true)
      .animate({ left: al - 200 }, 150);
  });

  //鼠标进入navcon内容中的li上面  显示相关的动画效果 离开 隐藏效果
  $(".anlishow ul li")
    .mouseenter(function() {
      var i = $(this).index();
      $(".lbimgtext")
        .eq(i)
        .stop(true,false)
        .animate({ bottom: 0 }, 300, "swing");
      $(".lblook")
        .eq(i)
        .stop(true,false)
        .animate({ top: 30 }, 300, "swing");
      $(".anlishow ul li .anliimg")
        .eq(i)
        .css({ backgroundColor: "rgb(153, 194, 40)" });
      $(".anlitext")
        .eq(i)
        .css({ backgroundColor: "#fff", borderColor: "#99c228" });
    })
    .mouseleave(function() {
      var i = $(this).index();
      $(".lbimgtext")
        .eq(i)
        .animate({ bottom: -40 }, 200, "swing");
      $(".lblook")
        .eq(i)
        .animate({ top: -55 }, 200, "swing");
      $(".anliimg")
        .eq(i)
        .css({ backgroundColor: "rgb(236,236,236)" });
      $(".anlitext")
        .eq(i)
        .css({ backgroundColor: "#f4f4f4", borderColor: "#f4f4f4" });
    });

  //点击navbar 出现和隐藏相关的内容
  $(".navbar ul li").click(function() {
    var i = $(this).index();
    if (i == 0) {
      $(".navcon").animate({ top: 655 }, 500);
      setTimeout(function() {
        $(".lbitem").css("display", "block");
        $(".news").animate({ left: 900 }, 500);
      }, 500);
    } else {
      $(".lbitem").css("display", "none");
      $(".news").animate({ left: 1366 }, 500);
      $(".navcon").animate({ top: 655 }, 500);
      setTimeout(function() {
        $(".navcon")
          .eq(i - 1)
          .animate({ top: 100 }, 500);
      }, 500);
    }
  });
  //点击关闭按钮  实现关闭效果
  $(".navcon .closed").each(function(i) {
    $(".navcon .closed")
      .eq(i)
      .click(function() {
        $(".navcon")
          .eq(i)
          .animate({ top: 655 }, 500);
        setTimeout(function() {
          $(".lbitem").css("display", "block");
          $(".news").animate({ left: 900 }, 500);
          $(".navbar ul li")
            .removeClass("active")
            .eq(0)
            .addClass("active");
          $(".navmove").css({ left: 0 });
        }, 500);
      });
  });

  // 底部footer效果
  $(".footer .footerright a")
    .mouseenter(function() {
      var index = $(this).index();
      $(".footer .footerright a img").css("top", 0);
      $(".footer .footerright a img")
        .eq(index)
        .stop(true, false)
        .animate({ top: -30 }, 300);
    })
    .mouseleave(function() {
      var index = $(this).index();
      $(".footer .footerright a img")
        .eq(index)
        .animate({ top: 0 }, 300);
    });

  // 联系我们 输入框效果
  $(".navcon .lianxishow input:not(#submit)").focus(function(){
    var index = $(this).index();
    $(".navcon .lianxishow input").eq(index).css({backgroundColor:"#99c228",color:"#ffffff",borderColor:"#99c228"}).prop("value","");
  })
  $(".navcon .lianxishow #name").blur(function(){
    $(".navcon .lianxishow #name").css({backgroundColor:"#f0f0f0",color:"#8a8a8a",borderColor:"#f0f0f0"}).prop("value","姓名 (Name)");
  });
  $(".navcon .lianxishow #tel").blur(function(){
    $(".navcon .lianxishow #tel").css({backgroundColor:"#f0f0f0",color:"#8a8a8a",borderColor:"#f0f0f0"}).prop("value","电话 (TEL)");
  });
  $(".navcon .lianxishow #email").blur(function(){
    $(".navcon .lianxishow #email").css({backgroundColor:"#f0f0f0",color:"#8a8a8a",borderColor:"#f0f0f0"}).prop("value","邮箱 (E-mail)");
  });
  $(".navcon .lianxishow #content").focus(function(){
    $(".navcon .lianxishow #content").css({backgroundColor:"#99c228",color:"#ffffff",borderColor:"#99c228"}).text("");
  })
  $(".navcon .lianxishow #content").blur(function(){
    $(".navcon .lianxishow #content").css({backgroundColor:"#f0f0f0",color:"#8a8a8a",borderColor:"#f0f0f0"}).text("内容 (Message)");
  });
};
