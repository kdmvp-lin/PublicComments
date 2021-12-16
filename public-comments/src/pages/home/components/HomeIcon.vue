<template>
  <div class="mui-content">
<!--    先清楚上一个页面的浮动-->
    <svg class="iconfont icon" aria-hidden="true">
      <use xlink:href="item.logo"></use>
    </svg>
    <div style="clear:both;"></div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide >
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <router-link tag="li"  to="/"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <svg class="iconfont icon" aria-hidden="true"><use xlink:href="#icon-shiwu"></use></svg>
            <div class="mui-media-body">美食</div></a>
          </router-link>
          <router-link tag="li"  to="/"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <svg class="iconfont icon" aria-hidden="true"><use xlink:href="#icon-maoyandianying"></use></svg>
            <div class="mui-media-body">猫眼电影</div></a>
          </router-link>
          <router-link tag="li"  to="/"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <svg class="iconfont icon" aria-hidden="true"><use xlink:href="#icon-KTV"></use></svg>
            <div class="mui-media-body">KTV</div></a>
          </router-link>
          <router-link tag="li"  to="/"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <svg class="iconfont icon" aria-hidden="true"><use xlink:href="#icon-meituanwaimai"></use></svg>
            <div class="mui-media-body">美团外卖</div></a>
          </router-link>
          <router-link tag="li"  to="/"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <svg class="iconfont icon" aria-hidden="true"><use xlink:href="#icon-youleyuan"></use></svg>
            <div class="mui-media-body">游乐园</div></a>
          </router-link>
          <router-link tag="li"  to="/"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <svg class="iconfont icon" aria-hidden="true"><use xlink:href="#icon-jianshen"></use></svg>
            <div class="mui-media-body">健身</div></a>
          </router-link>
          <router-link tag="li"  to="/"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <svg class="iconfont icon" aria-hidden="true"><use xlink:href="#icon-jiudian"></use></svg>
            <div class="mui-media-body">酒店</div></a>
          </router-link>
          <router-link tag="li"  to="/"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <svg class="iconfont icon" aria-hidden="true"><use xlink:href="#icon-xianhua"></use></svg>
            <div class="mui-media-body">鲜花</div></a>
          </router-link>
          <router-link tag="li"  to="/"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <svg class="iconfont icon" aria-hidden="true"><use xlink:href="#icon-xiuxian"></use></svg>
            <div class="mui-media-body">休闲</div></a>
          </router-link>
          <router-link tag="li"  to="/"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <svg class="iconfont icon" aria-hidden="true"><use xlink:href="#icon-xiyu"></use></svg>
            <div class="mui-media-body">洗浴</div></a>
          </router-link>
        </ul>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
    export default {
      name: "HomeIcon",

      data(){
        return{
          swiperOption:{
          },
        }
      },
      //图片轮播方法
      computed:{
        pages(){
          var pages=[];
          this.iconList.forEach((item,index) =>{
            var page=Math.floor(index/10);
            if(!pages[page]){
              pages[page]=[];
            }
            pages[page].push(item)
          })
          return pages
        }
      }
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
