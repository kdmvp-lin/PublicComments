<template>
  <div class="mui-content">
    <!--    先清楚上一个页面的浮动-->

    <div style="clear:both;"></div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide >
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <router-link tag="li"  to="/"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <svg class="iconfont icon" aria-hidden="true"><use xlink:href="#icon-caipinpaihangbang"></use></svg>
            <div class="mui-media-body">美食排行</div></a>
          </router-link>
          <router-link tag="li"  to="/"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <svg class="iconfont icon" aria-hidden="true"><use xlink:href="#icon-miaosha"></use></svg>
            <div class="mui-media-body">限时秒杀</div></a>
          </router-link>
          <router-link tag="li"  to="/"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <svg class="iconfont icon" aria-hidden="true"><use xlink:href="#icon-zaocan"></use></svg>
            <div class="mui-media-body">早餐</div></a>
          </router-link>
          <router-link tag="li"  to="/"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <svg class="iconfont icon" aria-hidden="true"><use xlink:href="#icon-dingzuo"></use></svg>
            <div class="mui-media-body">订座</div></a>
          </router-link>
          <router-link tag="li"  to="/"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <svg class="iconfont icon" aria-hidden="true"><use xlink:href="#icon-meituanwaimai"></use></svg>
            <div class="mui-media-body">美团外卖</div></a>
          </router-link>
          <router-link tag="li"  to="/"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <svg class="iconfont icon" aria-hidden="true"><use xlink:href="#icon-shiwu"></use></svg>
            <div class="mui-media-body">人气菜品</div></a>
          </router-link>
          <router-link tag="li"  to="/"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <svg class="iconfont icon" aria-hidden="true"><use xlink:href="#icon-dukan"></use></svg>
            <div class="mui-media-body">新店</div></a>
          </router-link>
          <router-link tag="li"  to="/"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <svg class="iconfont icon" aria-hidden="true"><use xlink:href="#icon-3"></use></svg>
            <div class="mui-media-body">网红店</div></a>
          </router-link>
          <router-link tag="li"  to="/"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <svg class="iconfont icon" aria-hidden="true"><use xlink:href="#icon-_xican"></use></svg>
            <div class="mui-media-body">西餐</div></a>
          </router-link>
          <router-link tag="li"  to="/"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <svg class="iconfont icon" aria-hidden="true"><use xlink:href="#icon-naicha"></use></svg>
            <div class="mui-media-body">奶茶</div></a>
          </router-link>
        </ul>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
    export default {
        name: "BannerTop",
      data(){
        return{
          swiperOption:{
          },
        }
      },
      //图片轮播方法
    }
</script>

<style scoped lang="stylus">
  .mui-content
    margin-top -20px
  .mui-content .mui-table-view
    margin-top .1rem
  .mui-content .mui-grid-view.mui-grid-9
    background white
    border 0
  .mui-content .mui-grid-view.mui-grid-9 .mui-table-view-cell
    border 0
    padding 0
  .mui-content .mui-grid-view.mui-grid-9 .mui-col-xs-4
    width 20%
  .mui-content >>>.icon-img
    width 50%
  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body
    margin-top 0
    text-align center
    font-size 50%
  .icon
    width: 2em;
    height: 2em;
    vertical-align: -0.15em
    fill: currentColor
    overflow: hidden

</style>
