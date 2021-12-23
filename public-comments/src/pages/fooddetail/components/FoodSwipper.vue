<template>
  <div class="swipper-box">
    <swiper :options="swiperOption" ref="mySwiper" >
      <!--slides-->
      <swiper-slide v-for="item in swipperList" :key="item.id" >
        <img :src="item.imgurl" alt="" class="swipper-img">
      </swiper-slide>

      <!--Optionalcontrols-->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
    export default {
        name: "FoodSwipper",
      props:{
        swipperList:Array

      },
      data(){
        return{
          swiperOption:{
            pagination:{
              el:'.swiper-pagination'
            },
            loop:true
          },

        }

      },
    }
</script>

<style scoped lang="stylus">
  .swipper-box{
    height: 20rem;
    padding-bottom:60%;
    overflow:hidden;
  }
  .swipper-img{
    width:100%;
    height 20rem
  }
  .swiper-pagination{
    text-align: center;

  }
  .swipper-box >>> .swiper-pagination-bullet
    background white
    opacity 1
  .swipper-box >>> .swiper-pagination-bullet-active
    background #df2127
  .swipper-box{
    height :20rem;
    padding-bottom: 53%;
    overflow:hidden;
  }
</style>
