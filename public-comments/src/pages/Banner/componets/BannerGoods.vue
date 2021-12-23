<template>
  <div>
    <div v-for="item in foodsList" :key="item.id" class="foods-box">
      <div class="left-img">
        <img class="foods-img" :src="item.foodsImg">
      </div>
      <div class="right-content">
        <div class="shangjia-name">
          <span class="sjname">{{item.name}}</span>
          <span class="ding">订</span>
        </div>
        <div class="pingjia">
          <div v-for="item2 in item.xingxing" :key="item2.id" class="xx">
            <img class="xingxing" :src="item2.xxImg">
          </div>
          <span class="pj1">{{item.pingjia}}</span>
          <span class="pj2">{{item.price}}</span>
        </div>
        <div class="position">
          <span>{{item.cai}}</span>
          <span>{{item.position}}</span>
        </div>
        <div class="pinglun">
          <img :src="item.pinglunImg">
          <span>{{item.pinglun}}</span>
        </div>
        <div class="quan">
          <span class="quan1">券</span>
          <span class="quan2">{{item.quan}}</span>
        </div>
        <div class="hui">
          <span class="hui1">惠</span>
          <span class="hui2">{{item.youhui}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "BannerGoods",
        props:{
          foodsList: Array,
          xingxing:Array
        }
    }
</script>

<style scoped lang="stylus">
  .left-img
    position relative
    top -70px;
    width 23%;
    height 75px;
    border-radius 5px;
    border 1px solid #DDDDDD;
    display inline-block
    .foods-img
      border-radius 5px;
      width 100%;
      height 100%;
  .right-content
    height 170px;
    width 75%;
    display inline-block
    border-bottom 1px solid #DDDDDD
    .shangjia-name
      margin-top 10px;
      .ding
        float right
        font-weight bold
        font-size 1px;
        color #FF3333;
        padding 3px;
        background-color #FFCCCC;
      .sjname
        font-weight bold
    .pingjia
      margin-top 5px;
      .xx
        display inline-block
      .xingxing
        width 15px;
        height 15px;
      .pj1
        font-size 15px;
        font-weight bold
        color #FF3333 ;
      .pj2
        margin-left 8px;
        font-size 15px;
    .position
      font-size 15px;
      color #8f8f94
    .pinglun
      margin-top 5px;
      img
        border-radius 50%
        width 1.0rem
        height 1.0rem
      span
        margin-left 5px;
        text-align center
        font-size 15px;
    .quan
      margin-top 5px;
      .quan1
        font-size 10px;
        font-weight bold;
        background-color #FF7744 ;
        color white;
        padding 5px;
        border-radius 2px;
      .quan2
        font-size 15px;
    .hui
      margin-top 5px;
      .hui1
        font-size 10px;
        font-weight bold;
        background-color #FF7744 ;
        color white;
        padding 5px;
        border-radius 2px;
      .hui2
        font-size 15px;

</style>
