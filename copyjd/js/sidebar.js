window.onload = function() {
    var Box = document.getElementById("box");
    var sidelist = Box.getElementsByTagName("a");
    var sidespan = Box.getElementsByTagName("span");
    var ftop = document.getElementById("top");
    var topa = ftop.getElementsByTagName("a")[0];
    var topspan = ftop.getElementsByTagName("span")[0];

    for(i=0;i<sidelist.length;i++){
        sidelist[i].index = i;
        sidelist[i].onmouseover = function() { //鼠标移入侧边栏中  
            for(j=0;j<sidelist.length;j++){   //遍历侧边栏 让其所有背景颜色变成灰色
                sidelist[j].style.backgroundColor = "#575656";
                sidespan[j].style.backgroundColor = "#575656";
            }
            sidelist[this.index].style.backgroundColor = "#a03e3e";  //移入哪一个  哪一个背景颜色变成红色
            sidespan[this.index].style.backgroundColor = "#a03e3e";
            sidespan[this.index].style.right = "30px";               //让span标签向左位移
            sidespan[this.index].style.transition = "right 0.5s";    //动画效果0.5秒
        }
        sidelist[i].onmouseout = function() {   //移出时 让背景恢复为原来的背景  位移回原来的位置 动画效果1s
            sidelist[this.index].style.backgroundColor = "#575656";
            sidespan[this.index].style.backgroundColor = "#575656";
            sidespan[this.index].style.right = "-100px";
            sidespan[this.index].style.transition = "right 1s";
        }
    }
    topa.onmouseover = function(){
        topa.style.backgroundColor = "#a03e3e";
        topspan.style.backgroundColor = "#a03e3e";
        topspan.style.right = "30px";
        topspan.style.transition = "right 0.5s";
    }
    topa.onmouseout = function(){
        topa.style.backgroundColor = "#575656";
        topspan.style.backgroundColor = "#575656";
        topspan.style.right = "-100px";
        topspan.style.transition = "right 1s";
    }
}