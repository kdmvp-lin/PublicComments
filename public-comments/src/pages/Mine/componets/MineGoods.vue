<template>
    <div>
      <div class="mui-content">
        <div id="segmentedControl" class="mui-segmented-control">
          <a class="mui-control-item mui-active" href="#item1">
            动态
          </a>
          <a class="mui-control-item" href="#item2">
            笔记
          </a>
          <a class="mui-control-item" href="#item3">
            评价
          </a>
          <a class="mui-control-item" href="#item4">
            相册
          </a>
          <a class="mui-control-item" href="#item5">
            打卡
          </a>
          <a class="mui-control-item" href="#item6">
            地点
          </a>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "MineGoods"
    }
</script>

<style scoped lang="stylus">
  .mui-content
    background-color white
    .mui-segmented-control
      border none
      font-size 18px;
      font-weight bold
      .mui-control-item
        border none
        color black
        background-color white
      .mui-active
        color red
        font-weight bold
        border-bottom 3px solid red
</style>
