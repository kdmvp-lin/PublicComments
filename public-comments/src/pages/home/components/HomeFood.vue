<template>
<div class="homefood" id="item7mobile">
  <router-link tag="div" v-for="item in food" :key="item.id" class="food-box" :to="{name:'FoodDetail',params:{id:item.id}}" >
    <!--    图片  -->
    <div class="top-img">
      <img class="food-img" :src="item.pic_url">
    </div>
    <div class="bottom-content">
      <!--      商品信息-->
      <div class="food-desc">
        <span>{{item.food_desc}}</span>
      </div>
      <!--        头像-->
      <div class="user-img">
        <img class="img-one" :src="item.user_img">
        <span class="img_name">{{item.name}}</span>
      </div>
      <div class="luck iconfont icon">
        &#xe753;
      </div>
      <div class="luck_num">{{item.num}}</div>
      </div>
  </router-link>
  <div class="kong"></div>
</div>
</template>

<script>
    export default {
        name: "HomeFood",
      props:{
        food:Array
      },
    }
</script>

<style scoped lang="stylus">
  .homefood
    width 100%
    background-color #f5f5f5
    .food-box
      background-color white
      width 47%
      display inline-block
      margin-left .5rem
      margin-top .3rem
      .top-img
        width 100%
        .food-img
          width 100%
          height 12rem
      .bottom-content
        .food-desc
          font-size .9rem
          height 2.8rem
          overflow hidden
        .user-img
          display inline-block
          margin-left 0.5rem
          .img-one
            border-radius  50%
            width 1.5rem
            height 1.5rem
            overflow hidden
          .img_name
            font-size .5rem
        .luck
          display inline-block
          margin-left 1.5rem
        .icon
          font-size 1.5rem
        .luck_num
          display inline-block
    .kong
      height 4rem
      padding-top 2rem



</style>
