<template>
  <div class="mui-content">
    <div id="slider" class="mui-slider ">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
            关注
          </a>
          <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
            推荐
          </a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
            美食
          </a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
            玩乐
          </a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
            购物
          </a>
          <a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
            酒店
          </a>
          <a class="mui-control-item" href="#item7mobile" data-wid="tab-top-subpage-7.html">
            亲子
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeTitle"
    }
</script>

<style scoped>
  *{
    touch-action: pan-y;

    touch-action: pan-x;
  }
  .mui-scroll{
    background-color: white;
  }
  .mui-active{
    color: #ff6b37 !important;
  }
</style>

