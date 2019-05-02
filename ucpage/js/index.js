window.onload = function() {
  
  var Box = document.getElementById("pic");
  var on = document.getElementById("pic-btn").getElementsByTagName("li");
  var light = document.getElementById("btn").getElementsByTagName("span");
  var timer;
  var k = 0;

  for(i=0;i<light.length;i++){
    light[i].index = i;
    light[i].onclick = function() {
      clearInterval(timer);
      move(this.index);
    }
  }
  Box.onmouseover = function() {
    clearInterval(timer);
  }
  Box.onmouseout = function() {
    timer = setInterval(autoPlay,2000);
  }
  if(timer) {
    clearInterval(timer);
    timer=null;
  }
  timer = setInterval(autoPlay,2000);
  function autoPlay() {
    k++;
    if(k>light.length-1){
      k=0;
    }
    move(k);
  }
  function move(node) {
    for (j = 0; j < light.length; j++) {
      on[j].style.opacity = "0";
      light[j].className = "";   
    }
    light[node].className = "light";
    on[node].style.opacity = "1";
    k=node;
  }
  // var openpic = document.getElementById("pic");
  // var obtn1 = document.getElementById("btn1");
  // var obtn2 = document.getElementById("btn2");

  // obtn1.onclick = function() {
  //   openpic.style.backgroundImage = "url(../uspage/images/bg1.png)";
  //   obtn1.style.backgroundImage = "url(../uspage/images/scrolldot1.png)";
  //   obtn2.style.backgroundImage = "url(../uspage/images/scrolldot2.png)";
  // };
  // obtn2.onclick = function() {
  //   openpic.style.backgroundImage = "url(../uspage/images/bg2.png)";
  //   obtn2.style.backgroundImage = "url(../uspage/images/scrolldot1.png)";
  //   obtn1.style.backgroundImage = "url(../uspage/images/scrolldot2.png)";
  // };
};
