<template>
<div class="homefood">
  <div v-for="item in food" :key="item.id" class="food-box" >
    <!--    图片  -->
    <div class="top-img">
      <img class="food-img" :src="item.pic_url">
    </div>
    <div class="bottom-content">
      <!--        头像-->
      <div class="user-img">
        <img class="img-one" :src="item.user_img">
      </div>

      <!--      商品信息-->
      <div class="food-desc">
        <span>{{item.food_desc}}</span>
      </div>

      </div>
  </div>
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
    .food-box
      width 50%
      background-color black
      .top-img
        width 100%
        .food-img
          width 100%
    .kong
      height 4rem
      padding-top 5rem



</style>
