<template>
  <div>
    <nav class="mui-bar mui-bar-tab">
      <router-link tag="a" to="/" class="mui-tab-item ">
        <span class="mui-icon iconfont icon">&#xe691;</span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link tag="a" to="/Collection" class="mui-tab-item">
        <span class="mui-icon iconfont icon">&#xe79d;</span>
        <span class="mui-tab-label ">收藏</span>
      </router-link>
      <router-link tag="a" to="/Message"  class="mui-tab-item mui-active">
        <span class="mui-icon iconfont icon"><span class="mui-badge">13</span>&#xe749;</span>
        <span class="mui-tab-label">消息</span>
      </router-link>
      <router-link tag="a" to="/" class="mui-tab-item">
        <span class="mui-icon iconfont icon">&#xe779;</span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
  import mui from '../../../mui/js/mui'
  mui('body').on('tap','a',function(){
    window.top.location.href=this.href
  })
    export default {
        name: "MessageFoot"
    }
</script>

<style scoped>
  *{
    touch-action: none;
  }

  .mui-bar-tab .mui-tab-item.mui-active{
    color: #ff6b37
  }
  .mui-bar-tab
  {
    background-color: white;
    margin-bottom: -5px;
  }
</style>
