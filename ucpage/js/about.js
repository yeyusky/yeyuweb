window.onload = function() {
  var ozuo = document.getElementById("zuoyi");
  var oyou = document.getElementById("youyi");
  var on = document.getElementById("item1").getElementsByTagName("li");
  var index = 0;

  function move(node) {
    for(i=0;i<on.length;i++){
      on[i].className = "";
    }
    on[node].className = "on";
    index=node;
  }
  ozuo.onclick = function() {
    index--;
    if(index<0){
      index=on.length-1;
    }
    move(index);
  };
  oyou.onclick = function() {
    index++;
    if(index>on.length-1){
      index=0;
    }
    move(index);
  };
};
