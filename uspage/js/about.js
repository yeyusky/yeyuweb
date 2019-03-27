window.onload = function() {
  var ozuo = document.getElementById("zuoyi");
  var oyou = document.getElementById("youyi");
  var obtn = document.getElementById("pichid1");
  var pbtn = document.getElementById("pichid2");

  ozuo.onclick = function() {
    var a = obtn.style.display;
    if (a == "block") {
      pbtn.style.display = "block";
      obtn.style.display = "none";
    } else {
      obtn.style.display = "block";
      pbtn.style.display = "none";
    }
  };
  oyou.onclick = function() {
    var b = pbtn.style.display;
    if (b == "none") {
      pbtn.style.display = "block";
      obtn.style.display = "none";
    } else {
      obtn.style.display = "block";
      pbtn.style.display = "none";
    }
  };
};
