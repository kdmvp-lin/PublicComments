<template>
    <div class="foodtopF">
      <div class="foodtop" v-for="item in foodtop" :key="item.id">
        <div class="top_left">
          <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
          <img class="foodtop_img" :src="item.user_pic">
          <div class="name">
            <div class="name1">{{item.name}}</div>
            <div class="name2">{{item.name2}}</div>
          </div>
        </div>
        <div class="top_right">
          <div class="guanzhu">关注</div>
          <div class="iconfont icon logo">&#xe63b;</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "FoodTop",
      props:{
        foodtop:Array
      },
    }
</script>

<style scoped lang="stylus">
 .foodtopF
   height 3rem
   overflow hidden
   .foodtop
     .top_left
        display inline-block
        a
          color black
          display inline-block
          margin-top .5rem
        .foodtop_img
          border-radius  50%
          width 2rem
          height 2rem
          overflow hidden
          display inline-block
          margin-top .5rem
        .name
          display inline-block
          .name1
            font-size 1rem
          .name2
            font-size .5rem
            color #bbbbbb
      .top_right
        display inline-block
        position absolute
        top .4rem
        left 17rem
        .guanzhu
          color #ff6b37
          border solid 1px
          border-radius  25px
          border-color  #ff6b37
          padding .3rem
          display inline-block
          padding-left .8rem
          padding-right .8rem
        .logo
          display inline-block
          font-size 1.8rem
          position absolute
          top .35rem
          left 4rem







</style>
