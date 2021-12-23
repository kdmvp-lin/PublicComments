<template>
  <div>
    <div class="foodmid" v-for="item in foodmid" :key="item.id">
      <div class="title">{{item.title}}</div>
      <div class="des">
        <div class="iconfont icon logo1">{{item.dingwei}}</div>
        <div class="des1">{{item.des1}}</div>
        <div class="des2">{{item.des2}}<div class="logo2 icon iconfont">{{item.logo2}}</div></div>
        <div class="des2">{{item.des3}}</div>
        <div class="des2">{{item.des4}}</div>
        <div class="des2">{{item.des5}}<div class="logo3 icon iconfont">{{item.logo3}}</div></div>
        <div class="des2">{{item.des6}}</div>
        <div class="des2">{{item.des7}}<div class="logo4 icon iconfont">{{item.logo4}}</div></div>
        <div class="des2">{{item.des8}}</div>
      </div>
      <div class="midbot">
        <div class="midbot_top"><div class="jing">#</div>我的探店美食合集</div>
        <div class="date">{{item.date}}</div>
        <div class="liulan">{{item.liulan}}</div>
        <div class="fankiu"><div class="gantan">!</div>反馈</div>
      </div>
      <div class="luck">
        <div class="luck_logo">
          <div class="iconfont icon luck_logo1">&#xe753</div>
          <div class="luck_num">{{item.num}}</div>
        </div>
        <div class="user">
          <img :src="item.user1" class="user_img">
          <img :src="item.user2" class="user_img">
          <img :src="item.user3" class="user_img">
          <img :src="item.user4" class="user_img">
          <div  class="user_gd">更多</div>
        </div>
      </div>
      <div class="pinglun">
        <div class="pinglun_title">评论（<span>{{item.num}}</span>）</div>
        <div class="me">
          <img class="me_img" src="https://p0.meituan.net/userheadpicbackend/4b7c7016015877cd436f07eef2cec3cc89078.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0">
          <input class="me_input" placeholder="说点什么吧..." type="text">
        </div>
        <div class="pl" v-for="(item2,index) in item.people" :key="index">
          <div class="pl_left">
            <img class="peo_img" :src="item2.peo_img">
            <div class="peo_w">
              <div class="peo_name">{{item2.peo_name}}</div>
              <div class="peo_time">{{item2.peo_time}}</div>
            </div>
            <div class="peo_word">{{item2.peo_word}}</div>
          </div>
          <div class="pl_right">
            <div class="iconfont icon right">&#xe753</div>
            <div class="iconfont icon right">&#xe74f</div>
          </div>

        </div>
      </div>
    </div>
    <div class="kong"></div>
  </div>

</template>

<script>
    export default {
        name: "FoodMid",
      props:{
        foodmid:Array,
        people:Array
      },
    }
</script>

<style scoped lang="stylus">
  .foodmid
    margin .8rem 1.5rem
    .title
      font-size 1.3rem
    .des
      padding-top .5rem
      .logo1
        display inline-block
      .des1
        font-size .5rem

      .des2
        font-size .5rem
        .logo2
          display inline-block
          color #ff6b37
        .logo3
          display inline-block
          color #3798ff
        .logo4
          display inline-block
          color #4dff42
    .midbot
      margin-top 1.5rem
      .midbot_top
        border solid .01rem
        border-color #f8f0f0
        background-color #f8f0f0
        border-radius  25px
        width 9rem
        padding .5rem
        font-size .7rem
        .jing
          width 1rem
          height 1rem
          background-color #ff6b37
          vertical-align middle
          text-align center
          border-radius 50%
          color white
          display inline-block
          margin-right .2rem
      .date
        color #c6c6c6
        margin-top .5rem
        margin-left .5rem
        font-size .5rem
      .liulan
        color #c6c6c6
        margin-top .5rem
        margin-left .5rem
        font-size .5rem
        display inline-block
      .fankiu
        border solid .005rem
        color #717171
        border-color #c6c6c6
        background-color white
        border-radius  25px
        font-size .05rem
        width 4rem
        display inline-block
        height 1.2rem
        padding-bottom 1.8rem
        margin-left 12rem
        .gantan
          width 1rem
          height 1rem
          border-radius 50%
          color #717171
          border solid .01rem
          display inline-block
          margin-left .4rem
          margin-top .4rem
          padding-left .3rem
          margin-right .2rem
    .luck
      margin-top 1rem
      border-bottom solid 1px
      border-top solid 1px
      border-color #e3e3e3

      .luck_logo
        margin-top .4rem
        margin-bottom .4rem
        display inline-block
        .luck_logo1
          font-size 1.5rem
        .luck_num
          font-size .7rem
          padding-left .2rem
      .user
        display inline-block
        .user_img
          border-radius  50%
          width 2rem
          height 2rem
          overflow hidden
          display inline-block
          margin-top .5rem
          margin-left 1rem
        .user_gd
          border-radius  50%
          background-color #e3e3e3
          width 2rem
          height 2rem
          overflow hidden
          display inline-block
          font-size .5rem
          margin-left 1.5rem
          margin-top .5rem
          padding-left .3rem
          padding-top  .3rem
          font-family '黑体'
    .pinglun
      .pinglun_title
      .me
        margin-top 1rem
        .me_img
          border-radius  50%
          width 2rem
          height 2rem
          overflow hidden
          display inline-block
          position relative
          top .6rem
        .me_input
          height 2rem
          margin-left 1rem
          display inline-block
          border-radius 25px
          border-color #ececec
          width 15rem
      .pl
        margin-top 1rem
        border-bottom solid 1px
        border-color #bdbcbc
        .pl_left
          display inline-block
          width 80%
          .peo_img
            border-radius  50%
            width 2rem
            height 2rem
            overflow hidden
            display inline-block
          .peo_w
            display inline-block
            .peo_name
              color #bdbcbc
              font-size .5rem
            .peo_time
              color #bdbcbc
              font-size .5rem
          .peo_word
            font-size .7rem
            width 18rem
            margin-left 2.5rem
        .pl_right
            width 20%
            display inline-block
            float right
            .right
              display inline-block
              font-size 1.5rem
  .kong
    height 4rem
    padding-top 2rem

</style>
