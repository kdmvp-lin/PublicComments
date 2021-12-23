<template>
    <div class="top">
      <router-link tag="div" class="tubiao1" to="/">
        <div class="iconfont icon">&#xe744</div>
      </router-link>
      <div class="tubiao2">
        <div class="iconfont icon">&#xe74f</div>
      </div>
    </div>
</template>

<script>
  import mui from '../../../mui/js/mui'
  mui('body').on('tap','a',function () {
    window.top.location.href = this.href
  })
    export default {
        name: "MineTop"
    }



</script>

<style scoped lang="stylus">
.top
  position fixed
  top 20px;
  .tubiao1
    display inline-block
    .icon
      font-size 50px;
  .tubiao2
    margin-left 260px;
    display inline-block
    .icon
      font-size 50px;
</style>
