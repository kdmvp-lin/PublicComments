<template>
    <div class="mess_top">
      <div class="mess_word">消息</div>
      <div class="logo">
        <div class="iconfont icon logo_sym">&#xe603;</div>
        <div class="logo_word">清除未读</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "MessageTop"
    }
</script>

<style scoped lang="stylus">
  .mess_top
    border-bottom solid 2px
    border-color #e8e4e4
    width 100%
    height 2.5rem
    margin-top 1.5rem
    .mess_word
      font-size 2rem
      display inline-block
      margin-left 9rem
    .logo
      display inline-block
      margin-left 5rem
      .logo_sym
        display inline-block
      .logo_word
        font-size 1rem
        display inline-block
        font-size .6rem
</style>
