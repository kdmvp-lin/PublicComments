<template>
<div class="footer">
  <div class="footer-box">
    <input class="left_box" placeholder="说点什么吧...">
    <div class="width_kong"></div>
    <div class="more">
      <div class="iconfont icon click">&#xe753;</div>
      <div class="word">点赞</div>
    </div>
    <div class="more" @click="addCart">
      <div class="iconfont icon" >&#xe65e;</div>
      <div class="word">收藏</div>
    </div>
    <div class="more">
      <div class="iconfont icon">&#xe608;</div>
      <div class="word">评论</div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "FoodBottom",
       props:{
         foodInfo:Array
       },
      methods: {
        addCart(){
            this.$store.commit('collection/addCollection',{
            id:this.foodInfo[0].id,
            name:this.foodInfo[0].name,
            img:this.foodInfo[0].img,
            userimg:this.foodInfo[0].userimg,
            username:this.foodInfo[0].username,
            count:1,
            selected:true
          })
          this.$toast('收藏成功')
        }

      },


    }
</script>

<style scoped lang="stylus">
  .footer
    position fixed
    bottom 0
    height 0
    padding-bottom 15%
    overflow hidden
    background-color white
    width 100%
    .footer-box
      border-top solid .1rem
      border-color #e8e8e8
      width 100%
      .width_kong
        display inline-block
        width 1.5rem
      .left_box
        display inline-block
        border-radius 25px
        border-color #ececec
        width 12rem
        height 2rem
        margin-left 1rem
        border solid 0.01em
        border-color #f1f1f1
        position relative
        top -.8rem
        font-size 15px
        background-color #f1f1f1
      .more
        display inline-block
        margin-left .6rem
        font-size .7rem
        text-align center
        margin-top .5rem
        .icon
          font-size 1.5rem
        .icon:hover
          color #ff6b37
</style>
