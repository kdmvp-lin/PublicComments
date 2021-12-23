<template>
  <div>
    <div class="mui-content">
      <div id="segmentedControl" class="mui-segmented-control">
        <a class="mui-control-item mui-active" href="#item1">
          美食餐厅
        </a>
        <a class="mui-control-item" href="#item2">
          优惠套餐
        </a>
        <a class="mui-control-item" href="#item3">
          种草好店
        </a>
        <a class="mui-control-item" href="#item4">
          发现好菜
        </a>
      </div>
    </div>
    <div class="md-top">
      <div class="title1">
        <div class="icon-name">附近</div>
        <div class="iconfont icon">&#xe7b2</div>
      </div>
      <div class="title2">
        <div class="icon-name">美食</div>
        <div class="iconfont icon">&#xe7b2</div>
      </div>
      <div class="title3">
        <div class="icon-name">智能排序</div>
        <div class="iconfont icon">&#xe7b2</div>
      </div>
      <div class="title4">
        <div class="icon-name">筛选</div>
        <div class="iconfont icon">&#xe7b2</div>
      </div>
    </div>
    <div class="mui-middle">
      <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div class="mui-scroll">
            <a class="mui-control-item" href="#item1mobile" data-wid="tab-top-subpage-1.html">
              附近1km
            </a>
            <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
              餐饮品质
            </a>
            <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
              营业中
            </a>
            <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
              回头客推荐
            </a>
            <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
              火锅
            </a>
            <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
              人气餐厅
            </a>
            <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
              团购特惠
            </a>
            <a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
              性价比高
            </a>
            <a class="mui-control-item" href="#item7mobile" data-wid="tab-top-subpage-7.html">
              味道赞
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
  import mui from '../../../mui/js/mui.min'
  mui('.mui-scroll-wrapper').scroll({
    deceleration:0.0005//减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  })
    export default {
        name: "BannerMiddle"
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
  .md-top
    position: relative;
    top 10px;
    .title1
      margin-left 25px;
      display inline-block
      .icon-name
        display inline-block
      .icon
        display inline-block
    .title2
      margin-left 25px;
      display inline-block
      .icon-name
        display inline-block
      .icon
        display inline-block
    .title3
      margin-left 25px;
      display inline-block
      .icon-name
        display inline-block
      .icon
        display inline-block
    .title4
      margin-left 25px;
      display inline-block
      .icon-name
        display inline-block
      .icon
        display inline-block
  .mui-middle
    margin-top 20px;
    .mui-control-item
      height 30px;
      text-align center;
      line-height 30px;
      background-color #F5F5F5
      border-radius 50px;
</style>
