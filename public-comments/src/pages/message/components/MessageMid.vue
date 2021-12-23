<template>
<div class="mess_mid">
  <div class="mui-content" v-for="item in message" :key="item.id">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell">
        <div class="mui-slider-right mui-disabled">
          <a class="mui-btn mui-btn-grey">免打扰</a>
          <span class="mui-btn mui-btn-red" >删除</span>
        </div>
        <div class="mui-slider-handle">
          <div class="img"> <img class="img_dou" :src="item.img_dou"></div>

          <div class="word">
            <div class="word_name">{{item.word_name}}</div>
            <div class="word_des">{{item.word_des}}</div>
          </div>
          <div class="time">{{item.time}}</div>
        </div>
      </li>
    </ul>
  </div>
  <div class="kong"></div>
</div>
</template>

<script>
    export default {
        name: "MessageMid",
      props:{
          message:Array
      }
    }
</script>

<style scoped lang="stylus">
  *{
    touch-action: pan-y;
    touch-action: pan-x;
  }
  .mess_mid
    margin-top -1.2rem
    .mui-content
      margin-top -1rem
      .mui-table-view
        background-color #f6f6f6
        .mui-table-view-cell
          .mui-slider-handle
            background-color #f6f6f6
            height 3.5rem
            .img
              display inline-block
              position relative
              top -.5rem
              .img_dou
                border-radius  50%
                width 3rem
                height 3rem
                overflow hidden
            .word
              width 14.5rem
              overflow hidden
              display inline-block
              .word_name
                font-family '黑体'
              .word_des
                font-size .5rem
                color: #7f7f7f
            .time
              display inline-block
              float right
              color: #7f7f7f
    .kong
      height 2rem
      padding-top 3em
</style>
