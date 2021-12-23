<template>
  <div>
    <div class="md-top">
       <div class="userImg">
         <img class="user_Img" src="https://tse1-mm.cn.bing.net/th/id/R-C.da66b5a0d8d1e2285ad050d179cbaf4a?rik=6GBu%2bXwa7sf0yw&riu=http%3a%2f%2fimg.crcz.com%2fallimg%2f202003%2f22%2f1584887863755552.jpg&ehk=X7rGa%2fhQAwLqvOtPhypCUW5DEebl9dVLiBO9lIqiNFw%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1">
       </div>
       <div class="userInfo">
         <span class="name">Jay Chou</span>
         <div class="position">上海</div>
         <div class="china"><img class="chinaImg" src="https://tse1-mm.cn.bing.net/th/id/R-C.ba2c800f13dec8cabc5114125e602b4b?rik=dEcSc7mDwyqF6Q&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160717%2f1190119748412719_b.jpg&ehk=OoZKMno9nyZlWXwNhKdTWtEgs%2buNzNZZQqCgknHXbio%3d&risl=&pid=ImgRaw&r=0"></div>
         <div class="chinaInfo">去过一个国家，两个城市 ></div>
       </div>
    </div>
    <div class="md-middle">
      <div class="grjj">添加个人简介，让大家更好地认识你</div>
      <div class="iconfont icon">&#xe642</div>
    </div>
    <div class="md-bottom">
      <div class="fensi">
        <h3 class="num">0</h3>
        <span class="neirong">粉丝</span>
      </div>
      <div class="guanzhu">
        <h3 class="num">0</h3>
        <span class="neirong">关注</span>
      </div>
      <div class="iconfont icon">&#xe6ef</div>
      <div class="text">编辑资料</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MineMiddle"
    }
</script>

<style scoped lang="stylus">
  .md-top
    margin-top 4rem;
    .userImg
      width 25%;
      display inline-block
      margin-left 1rem
      .user_Img
        border 5px solid #DCDCDC
        width 90px;
        height 90px;
        border-radius 50%;
    .userInfo
      width 65%;
      display inline-block
      .name
        font-size 20px;
        font-weight bold
      .position
        margin-top 1rem;
        background-color #DCDCDC
        font-size 10px;
        text-align center
        width 2rem;
      .china
        margin-top 1rem;
        display inline-block
        .chinaImg
          width 25px;
          height 25px;
          border-radius 50%;
      .chinaInfo
        font-size 15px;
        position relative;
        top -.6rem;
        display inline-block
  .md-middle
    margin-left 10px;
    margin-top 5px;
    .grjj
      display inline-block;
      font-size 15px;
      color #808080;
    .icon
      display inline-block;
  .md-bottom
    border-bottom 1px solid #DCDCDC;
    .fensi
      display inline-block
      .num
        padding-left 2.5rem;
      .neirong
        padding-left 1rem;
        font-size 15px;
        color #808080;
    .guanzhu
      display inline-block
      .num
        padding-left 1rem;
      .neirong
        font-size 15px;
        color #808080;
        padding-left 1rem;
    .icon
      position relative;
      top:-10px;
      display inline-block
      font-size 35px;
      color #808080
    .text
      position relative;
      top:-15px;
      display inline-block
      width 225px;
      height 40px;
      line-height 40px
      border 1px solid #DCDCDC;
      text-align center
      border-radius 20px;
      font-weight bold;
      font-size 18px;

</style>
