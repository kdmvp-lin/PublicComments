<template>
    <div>
<!--        <home-top></home-top>-->
        <home-foot></home-foot>
<!--        <home-icon></home-icon>-->
<!--        <home-click></home-click>-->
<!--        <home-title></home-title>-->
<!--        <home-food :food="food"></home-food>-->
    </div>
</template>

<script>
  import HomeTop from "./components/HomeTop";
  import HomeFoot from "./components/HomeFoot";
  import HomeIcon from "./components/HomeIcon";
  import HomeClick from "./components/HomeClick";
  import HomeTitle from "./components/HomeTitle";
  import HomeFood from "./components/HomeFood";
  import axios from 'axios'
    export default {
        name: "home",
      components:{
            HomeFood,
            HomeTitle,
            HomeTop,
            HomeFoot,
            HomeIcon,
            HomeClick,


      },
      data(){
        return{
          food:[]
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
            this.food=data.food

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
