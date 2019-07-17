<template>
  <div class="main">
    <div class="header">{{order}}</div>
    <div class="navlist">
      <ul>
        <li><router-link to="/goods"><span>待付款</span></router-link></li>
        <li><router-link to="/goods/a"><span>待服务</span></router-link></li>
        <li><router-link to="/goods/b"><span>进行中</span></router-link></li>
        <li><router-link to="/goods/c"><span>待评价</span></router-link></li>
        <li><router-link to="/goods/d"><span>退款</span></router-link></li>
      </ul>
    </div>
    <div class="order-con">
      <img src="../assets/order_bg.png" alt="">
    </div>
    <div class="tuijian">为你推荐</div>
    <div class="tuijian-con">

    </div>
  </div>
</template>
<script>
  export default {
    name:"Goods",
    data(){
      return {
        order:"订单"
      }
    }
  }
</script>
<style>
  .main{
    position: relative;
    overflow: hidden;
    width:100%;
  }
  .main .header{
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: #000000;
    text-align: center;
    background-color: #fff;
  }
  .main .navlist{
    width: 100%;
    height: 50px;
    margin-top: 1px;
    background-color: #fff;
  }
  .main .navlist ul{
    width: 100%;
    height: 50px;
  }
  .main .navlist ul li{
    float: left;
    width: 20%;
    height: 50px;
  }
  .main .navlist ul li a{
    display: block;
    width: 100%;
    height: 50px;
  }
  .main .navlist ul li a span{
    display: block;
    width: 100%;
    height: 48px;
    line-height: 48px;
    font-size: 16px;
    color: #000000;
    text-align: center;
  }
  .main .navlist ul li .router-link-exact-active span{
    color: #f7ca68;
    border-bottom: 2px solid #f7ca68;
  }
  .main .order-con{
    width: 100%;
  }
  .main .order-con img{
    width: 100%;
  }
  .main .tuijian{
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding-top: 10px;
    font-size: 18px;
    color: rgb(156, 156, 156);
    background-color: #fff;
    text-align: center;
  }
  .main .tuijian-con{
    width: 100%;
    height: 300px;
    background-color: #fff;
  }
</style>