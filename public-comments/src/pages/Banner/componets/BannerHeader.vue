<template>
   <div class="top">
     <router-link class="name" to="/">< 美食</router-link>
     <div id="box">
       <input type="search" name="search" placeholder="搜索你想要的美食">
     </div>
     <div class="tubiao1">
        <div class="iconfont icon">&#xe758</div>
        <div class="icon-name">地图</div>
     </div>
     <div class="tubiao2">
       <div class="iconfont icon">&#xe74f</div>
     </div>
   </div>
</template>

<script>
    export default {
        name: "BannerHeader"
    }
</script>
<style scoped lang="stylus">
 .top
   margin-top 5px;
   margin-bottom 10px;
   .name
     color black;
     font-size 25px;
     font-weight bold
     display inline-block
   #box
     display inline-block
     input
      border 1px solid #808080
      background-color white
      border-radius 20px;
   .tubiao1
     position absolute
     top 3px;
     right 35px;
     display inline-block
     .icon
       font-size 25px;
     .icon-name
       font-size 15px;
   .tubiao2
     display inline-block
     .icon
       font-size 35px;
       position absolute;
       top 10px;
       right 0px;
</style>
