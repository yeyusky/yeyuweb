window.onload = function() {
  function opmove(ele) {
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

  $(".goods-left ul li a.sublist").click(function() {
    var obj = $(this).next(".goods-list");
    var cssBlock = obj.css("display");
    if (cssBlock == "block") {
      obj.slideUp(500, function() {
        $(this)
          .closest("li")
          .removeClass("goodsactive");
      });
    } else {
      obj.slideDown();
      $(this)
        .closest("li")
        .siblings("li")
        .find(".goods-list")
        .slideUp();
      $(this)
        .closest("li")
        .siblings("li")
        .removeClass("goodsactive");
      $(this)
        .closest("li")
        .addClass("goodsactive");
    }
  });

  // $("#goods-list1 a").click(function(){
  //   var i = $("#goods-list1 a").index(this);
  //   $("#goods-list1 a").eq(i).addClass("aa");
  //   $("#goods-list1").css("display","block");
  // })
  // var goodsUl = document.getElementById("goodsUl");
  // var goodsLi = goodsUl.getElementsByTagName("li");
  // var goodslist = goodsUl.getElementsByClassName("sublist");
  // for(i=0;i<goodslist.length;i++){
  //   goodslist[i].index = i;
  //   goodslist[i].onclick =function(){
  //     var zhi = goodslist[i].style.display;
  //     if(zhi == "none"){
  //       for(j=0;j<goodslist.length;j++){
  //         goodsLi[j].className = "";
  //         // goodslist[j].style.height = "0px";
  //       }
  //       goodsLi[this.index].className = "";
  //     }else{
  //     goodsLi[this.index].className = "goodsactive";

  //     }

  // goodsLi[this.index].className = "goodsactive";
  // goodslist[this.index].style.height = ""
  //   }


  
  // $(".goods-left ul li a.sublist").click(function(){
  //   var i = $(".sublist").index(this);  //获得点击时那个li的索引值
  //   var zhi = $(".goods-list").eq(i).css("display");//获得show的display属性是block还是none
  //   if(zhi == "block"){
  //       $(".goods-left ul li .goods-list").eq(i).slideUp(400,function(){
  //           $(".goods-left ul li").removeClass("goodsactive");
  //       });
  //   }else{
  //       $(".goods-left ul li .goods-list").eq(i).slideDown(400,function(){
  //           $(".goods-left ul li").eq(i).addClass("goodsactive");
  //           $(".goods-left ul li").next().removeClass("goodsactive");
  //       });

  //   }

  // })
};
