window.onload = function() {
  var input = document.getElementById("input");
  var txt = input.value;
  input.onfocus = function() {
      if (txt == "请输入关键字") {
        input.value = "";
      }
    };
  input.onblur = function() {
      input.value = "请输入关键字";
    };
};
