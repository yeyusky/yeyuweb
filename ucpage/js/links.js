window.onload = function() {
  (function() {
    var init = function(el, num) {
      var Box = document.getElementById(el);
      var light = Box.getElementsByClassName("star");
      var text = Box.querySelector("p");
      var arryt = ["很不满意","不满意","一般","满意","非常满意"];
     
    //   点亮星星
      function lightOn(node) {
        for (i = 0; i < light.length; i++) {
          if (i < node) {
            light[i].style.backgroundImage = "url(../uspage/images/star.png)";
            text.innerHTML = arryt[i] 
          } else {
            light[i].style.backgroundImage = "url(../uspage/images/starbg.png)"; 
          }
        }   
      }
      lightOn(num);
 
    //   绑定移入、移出及点击事件
      for (i = 0; i < light.length; i++) {
        light[i].index = i;
        light[i].onmouseover = function() {
          lightOn(this.index + 1);
        };
        light[i].onclick = function() {
          num = this.index + 1;
        };
      }
      Box.onmouseout = function() {
        lightOn(num);
        if(num == 0){
          text.innerHTML = "";
        }
      };

      return {
        init: init
      };
    };
    init("advice1", 0);
    init("advice2", 1);
    init("advice3", 4);
  })();
};
