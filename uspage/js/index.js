window.onload = function() {
  var openpic = document.getElementById("pic");
  var obtn1 = document.getElementById("btn1");
  var obtn2 = document.getElementById("btn2");

  obtn1.onclick = function() {
    openpic.style.backgroundImage = "url(../uspage/images/bg1.png)";
    obtn1.style.backgroundImage = "url(../uspage/images/scrolldot1.png)";
    obtn2.style.backgroundImage = "url(../uspage/images/scrolldot2.png)";
  };
  obtn2.onclick = function() {
    openpic.style.backgroundImage = "url(../uspage/images/bg2.png)";
    obtn2.style.backgroundImage = "url(../uspage/images/scrolldot1.png)";
    obtn1.style.backgroundImage = "url(../uspage/images/scrolldot2.png)";
  };
};
