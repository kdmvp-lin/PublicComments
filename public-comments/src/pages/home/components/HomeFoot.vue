<template>
    <div>
      <nav class="mui-bar mui-bar-tab">
        <a class="mui-tab-item mui-active">
          <span class="mui-icon iconfont icon">&#xe691;</span>
          <span class="mui-tab-label">首页</span>
        </a>
        <a class="mui-tab-item">
          <span class="mui-icon iconfont icon">&#xe79d;</span>
          <span class="mui-tab-label ">收藏</span>
        </a>
        <a class="mui-tab-item">
          <span class="mui-icon iconfont icon"><span class="mui-badge">9</span>&#xe749;</span>
          <span class="mui-tab-label">消息</span>
        </a>
        <a class="mui-tab-item">
          <span class="mui-icon iconfont icon">&#xe779;</span>
          <span class="mui-tab-label">我的</span>
        </a>
      </nav>
    </div>
</template>

<script>
    export default {
        name: "HomeFoot"
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
  }
</style>
