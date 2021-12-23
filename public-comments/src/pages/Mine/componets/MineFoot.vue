<template>
   <div>
     <div class="dongtai">
       <div class="title">我去喜茶（万象城店）打了五星</div>
       <div class="dongtai-dd">
         <div class="iconfont icon">&#xe758</div>
         <div class="position">喜茶（瓯海万象城店）</div>
       </div>
       <div class="iconfont icon xia">&#xe7b2</div>
       <div class="dongtai-bt">
         <div class="touxiang"><img class="touxiangImg" src="https://tse1-mm.cn.bing.net/th/id/R-C.da66b5a0d8d1e2285ad050d179cbaf4a?rik=6GBu%2bXwa7sf0yw&riu=http%3a%2f%2fimg.crcz.com%2fallimg%2f202003%2f22%2f1584887863755552.jpg&ehk=X7rGa%2fhQAwLqvOtPhypCUW5DEebl9dVLiBO9lIqiNFw%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"></div>
         <div class="name">Jay Chou</div>
         <div class="iconfont icon">&#xe753</div>
       </div>
     </div>

   </div>
</template>

<script>
    export default {
        name: "MineFoot"
    }
</script>

<style scoped lang="stylus">
  .dongtai
    margin-left 10px;
    padding 5px;
    margin-top 10px;
    border 1px solid #DCDCDC;
    width 225px;
    border-radius 10px;
    .title
      margin-top 10px;
    .dongtai-dd
      margin-top 10px;
      display inline-block
      font-size 15px;
      background-color #D3D3D3
      border-radius 8px;
      .icon
        display inline-block
      .position
        display inline-block
    .xia
      display inline-block
    .dongtai-bt
      margin-top 10px;
      .touxiang
        display inline-block
        .touxiangImg
          width 20px;
          height 20px;
          border-radius 50%;
      .name
        font-size 15px;
        position relative
        top -5px;
        display inline-block
      .icon
        margin-left 100px;
        font-size 20px;
        display inline-block
</style>
