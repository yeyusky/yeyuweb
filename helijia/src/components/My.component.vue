<template>
  <div class="container">
    <div class="header">
      <router-link to="" class="userpic"></router-link>
      <router-link to="" class="vipcet">会员中心</router-link>
      <router-link to="" class="set"></router-link>
      <div class="log">未登录</div>
      <router-link to="" class="meg"></router-link>
    </div>
    <div class="main">
      <div class="order-goods">
        <div class="order-goods-desc">全部订单</div>
        <router-link to="" class="seeq">查看全部<i></i></router-link>
      </div>
      <div class="goodsel">
        <ul>
          <li>
            <router-link to=""><i class="pay"></i><span>待付款</span></router-link>
          </li>
          <li>
            <router-link to=""><i class="ser"></i><span>待服务</span></router-link>
          </li>
          <li>
            <router-link to=""><i class="act"></i><span>进行中</span></router-link>
          </li>
          <li>
            <router-link to=""><i class="com"></i><span>待评价</span></router-link>
          </li>
          <li>
            <router-link to=""><i class="del"></i><span>已取消</span></router-link>
          </li>
        </ul>
      </div>
      <div class="qm">
        <div class="qm-desc">我的资产</div>
      </div>
      <div class="qm-con">
        <ul>
          <li>
            <router-link to=""><div class="cz">0.00</div><span>充值卡</span></router-link>
          </li>
          <li>
            <router-link to=""><div class="yh">0</div><span>优惠券</span></router-link>
          </li>
          <li>
            <router-link to=""><div class="du">0</div><span>H豆</span></router-link>
          </li>
        </ul>
      </div>
      <div class="item-con">
        <ul>
          <li>
            <router-link to=""><i class="sc"></i><span>收藏项目</span></router-link>
          </li>
          <li>
            <router-link to=""><i class="gz"></i><span>关注店铺</span></router-link>
          </li>
          <li>
            <router-link to=""><i class="ll"></i><span>浏览历史</span></router-link>
          </li>
          <li>
            <router-link to=""><i class="cy"></i><span>常用地址</span></router-link>
          </li>
          <li>
            <router-link to=""><i class="fk"></i><span>用户反馈</span></router-link>
          </li>
          <li>
            <router-link to=""><i class="kf"></i><span>联系客服</span></router-link>
          </li>
        </ul>
      </div>
      <div class="tuijian">为你推荐</div>
      <div class="tuijian-con">

      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
  export default {
    name:"My",
    data(){
      return {
        m:"这是用户界面"
      }
    }
  }
</script>
<style>
  .container{
    overflow:hidden;
    position:relative;
    width:100%;
  }
  .container .header{
    position:relative;
    width:100%;
    height:200px;
    background-image:url(../assets/mine_top_bg.png);
  }
  .container .header .userpic{
    position:absolute;
    width:69px;
    height:85px;
    left:20px;
    bottom:40px;
    background-image:url(../assets/userpic.png);
  }
  .container .header .log{
    position:absolute;
    width:100px;
    height:20px;
    line-height:20px;
    left:105px;
    bottom:90px;
    font-size:14px;
    color:#fff;
  }
  .container .header .vipcet{
    position:absolute;
    width:100px;
    height:30px;
    line-height:30px;
    left:105px;
    bottom:50px;
    font-size:14px;
    color:#bc8909;
    text-align:center;
    border-radius:15px;
    border:2px solid #bc8909;
  }
  .container .header .meg{
    position:absolute;
    width:24px;
    height:24px;
    right:15px;
    top:15px;
    background-image:url(../assets/meg.png);
  }
  .container .header .set{
    position:absolute;
    width:24px;
    height:24px;
    right:75px;
    top:15px;
    background-image:url(../assets/set.png);
  }
  .container .main{
    overflow:hidden;
    position:relative;
    width:100%;
  }
  .container .main .order-goods{
    width:100%;
    height:40px;
    background-color:#fff;
  }
  .container .main .order-goods .order-goods-desc{
    float:left;
    width:100px;
    height:40px;
    line-height:40px;
    margin-left:20px;
    font-size:16px;
    color:#333333;
  }
  .container .main .order-goods .seeq{
    position:relative;
    float:right;
    width:70px;
    height:40px;
    line-height:40px;
    margin-right:20px;
    padding-right:20px;
    font-size:16px;
    color:#8a8a8a;
  }
  .container .main .order-goods .seeq i{
    display:block;
    position:absolute;
    width:20px;
    height:20px;
    right:0;
    top:8px;
    background-image:url(../assets/seeq.png);
  }
  .container .main .goodsel{
    width:100%;
    height:80px;
    margin-top:2px;
    background-color:#fff;
  }
  .container .main .goodsel ul{
    width:100%;
    height:80px;
  }
  .container .main .goodsel ul li{
    float:left;
    width:20%;
    height:80px;
  }
  .container .main .goodsel ul li a{
    display:block;
    width:100%;
    height:60px;
    padding:10px 0;
  }
  .container .main .goodsel ul li a i{
    display:block;
    width:34px;
    height:34px;
    margin:0 auto;
  }
  .container .main .goodsel ul li a i.pay{
    background-image:url(../assets/payment.png);
  }
  .container .main .goodsel ul li a i.ser{
    background-image:url(../assets/service.png);
  }
  .container .main .goodsel ul li a i.act{
    background-image:url(../assets/doing.png);
  }
  .container .main .goodsel ul li a i.com{
    background-image:url(../assets/comment.png);
  }
  .container .main .goodsel ul li a i.del{
    background-image:url(../assets/cancel.png);
  }
  .container .main .goodsel ul li a span{
    display:block;
    width:100%;
    height:30px;
    line-height:30px;
    font-size:16px;
    color:#333333;
    text-align:center;
  }
  .container .main .qm{
    width:100%;
    height:40px;
    margin-top:10px;
    background-color:#fff;
  }
  .container .main .qm .qm-desc{
    width:100px;
    height:40px;
    line-height:40px;
    margin-left:20px;
    font-size:16px;
    color:#333333;
  }
  .container .main .qm-con{
    width: 100%;
    height: 80px;
    margin-top: 2px;
    background-color: #fff;
  }
  .container .main .qm-con ul{
    width: 100%;
    height: 80px;
  }
  .container .main .qm-con ul li{
    float: left;
    width: 33.3%;
    height: 80px;
  }
  .container .main .qm-con ul li a{
    display: block;
    width: 100%;
    height: 80px;
  }
  .container .main .qm-con ul li a .cz,
  .container .main .qm-con ul li a .yh,
  .container .main .qm-con ul li a .du{
    width: 100%;
    height: 20px;
    line-height: 20px;
    margin: 20px auto 10px;
    font-size: 16px;
    color: #333333;
    text-align: center;
  }
  .container .main .qm-con ul li a span{
    display: block;
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    color: #333333;
    text-align: center;
  }
  .container .main .item-con{
    width: 100%;
    height: 162px;
    margin-top: 10px;
    background-color: #fff;
  }
  .container .main .item-con ul{
    width: 100%;
    height: 162px;
  }
  .container .main .item-con ul li{
    float: left;
    width: 33.3%;
    height: 80px;
    border-bottom: 1px solid #ccc;
  }
  .container .main .item-con ul li a{
    display: block;
    width: 100%;
    height: 80px;
  }
  .container .main .item-con ul li a i{
    display: block;
    width: 40px;
    height: 40px;
    margin: 5px auto 10px;
  }
  .container .main .item-con ul li a i.sc{
    background-image:url(../assets/collectionItem.png);
    background-size: 100% 100%;
  }
  .container .main .item-con ul li a i.gz{
    background-image:url(../assets/focusShop.png);
    background-size: 100% 100%;
  }
  .container .main .item-con ul li a i.ll{
    background-image:url(../assets/browserHistory.png);
    background-size: 100% 100%;
  }
  .container .main .item-con ul li a i.cy{
    background-image:url(../assets/m_address.png);
    background-size: 100% 100%;
  }
  .container .main .item-con ul li a i.fk{
    background-image:url(../assets/feedback.png);
    background-size: 100% 100%;
  }
  .container .main .item-con ul li a i.kf{
    background-image:url(../assets/contact.png);
    background-size: 100% 100%;
  }
  .container .main .item-con ul li a span{
    display: block;
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    color: #333333;
    text-align: center;
  }
  .container .main .tuijian{
    width: 100%;
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
    font-size: 18px;
    color: rgb(156, 156, 156);
    text-align: center;
  }
  .container .main .tuijian-con{
    width: 100%;
    height: 300px;
    background-color: #fff;
  }
</style>
