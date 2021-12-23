<template>
  <div>
    <message-top></message-top>
    <message-mid :message="message"></message-mid>
    <message-foot></message-foot>
  </div>

</template>

<script>
    import MessageTop from "./components/MessageTop";
    import MessageMid from "./components/MessageMid";
    import axios from 'axios'
    import MessageFoot from "./components/MessageFoot";
    export default {
        name: "Message",
      components: {
        MessageFoot,
        MessageMid,
          MessageTop
        },
      data(){
          return{
            message:[]
          }
      },
      methods:{
        // 配置get方法，在页面加载时发起get请求，获取index.json
        getHomeData(){
          axios.get('/static/data/index.json')
            .then(this.getHomeDataSucc)
        },
        // 当前获取成功，将获取到的json文件中data赋予到全局data变量中
        getHomeDataSucc(res){
          res=res.data
          if(res.ret && res.data){
            var data =res.data
            this.message=data.message

          }

        }
      },
      mounted(){
        this.getHomeData()
      }
    }
</script>

<style scoped>

</style>
