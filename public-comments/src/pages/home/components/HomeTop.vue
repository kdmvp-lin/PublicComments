<template>
  <div class="top">
    <div class="mui-content">
        <ul class="mui-table-view">
          <li class="mui-table-view-cell mui-collapse">
            <a class="mui-navigate-right">温州</a>
            <div class="mui-collapse-content">
              <p>杭州</p>
              <p>绍兴</p>
              <p>宁波</p>
              <p>金华</p>
              <p>丽水</p>
              <div class="mui-button-row">
                <button class="mui-btn mui-btn-primary" type="button" onclick="return false;" >确认</button>&nbsp;&nbsp;
              </div>
            </div>
          </li>
        </ul>

    </div>
    <div class="search">
      <input type="text" placeholder="搜索商户名、地址等" class="search_input">
      <a class="search_word">搜索</a>
    </div>
    <div style="clear:both;"></div>
  </div>
</template>

<script>
  import mui from '../../../mui/js/mui.min'
  mui('.accordion').scroll({
    deceleration: 0.0005
  });

  export default {
    name: "HomeTop"
  }
</script>

<style scoped lang="stylus">
  .top
    width 100%
    height 3rem
    margin-top -15px

    .mui-content
        display inline-block
        float left
        width 6rem
        position absolute
        z-index 10
        .mui-table-view
          width 100%
          .mui-table-view-cell,.mui-collapse,.mui-active
            background-color white
            .mui-collapse-content
              .mui-button-row
                .mui-btn
                  vertical-align middle
                  margin-left  -1.5rem
                  width 3rem
                  height 1.5rem

    .search
      display inline-block
      padding-top 1rem
      float right
      .search_input
        width 13rem
        border-style:solid;
        border-color: #ff6b37
      .search_word
          display inline-block
          background-color #ff6b37
          width 4.7rem
          height 2.5rem
          text-align center
          float right
          margin-left -5px;
          color white
          padding-top .6rem



</style>
