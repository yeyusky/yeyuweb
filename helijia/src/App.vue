<template>
  <div id="app">
    <div class="con">
      <router-view/>
    </div>
    <div class="footer">
      <ul>
        <li>
          <router-link to="/"><i class="home"></i><span>{{home}}</span></router-link>
        </li>
        <li>
          <router-link to="/select"><i class="select"></i><span>{{select}}</span></router-link>
        </li>
        <li>
          <router-link to="/goods"><i class="goods"></i><span>{{goods}}</span></router-link>
        </li>
        <li>
          <router-link to="/my"><i class="my"></i><span>{{my}}</span></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      home:"首页",
      select:"分类",
      goods:"订单",
      my:"我的"
    }
  }
}
</script>

<style>
*{
  list-style:none;
  margin:0;
  padding:0;
  text-decoration:none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app .con{
  overflow:hidden;
  position:relative;
  width:100%;
  padding-bottom:60px;
  background-color:#f9f9f9;
}
#app .footer{
  position:fixed;
  width:100%;
  height:60px;
  left:0;
  bottom:0;
  background-image:url(./assets/tab_bg.png);
}
#app .footer ul{
  width:100%;
  height:60px;
}
#app .footer ul li{
  float:left;
  width:25%;
  height:60px;
}
#app .footer ul li a{
  display:block;
  width:100%;
  height:40px;
  line-height:60px;
  padding:5px 0 15px 0;
}
#app .footer ul li a i{
  display:block;
  width:34px;
  height:34px;
  margin:0 auto;
}
#app .footer ul li a i.home{
  background-image:url(./assets/home.png);
}
#app .footer ul li a i.select{
  background-image:url(./assets/classify.png);
}
#app .footer ul li a i.goods{
  background-image:url(./assets/order.png);
}
#app .footer ul li a i.my{
  background-image:url(./assets/mine.png);
}
#app .footer ul li a span{
  display:block;
  width:100%;
  height:20px;
  line-height:20px;
  font-size:14px;
  color:#333333;
  text-align:center;
  letter-spacing:2px
}
#app .footer ul li .router-link-exact-active i.home{
  background-image:url(./assets/homef.png);
}
#app .footer ul li .router-link-exact-active i.select{
  background-image:url(./assets/classifyf.png);
}
#app .footer ul li .router-link-exact-active i.goods{
  background-image:url(./assets/orderf.png);
}
#app .footer ul li .router-link-exact-active i.my{
  background-image:url(./assets/minef.png);
}
#app .footer ul li .router-link-exact-active span{
  color:#c9a863;
}
</style>
