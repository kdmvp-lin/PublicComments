<template>
  <div>
    <food-top :foodtop="foodtop"></food-top>
    <food-swipper :swipperList="swipperList"></food-swipper>
    <food-mid :foodmid="foodmid"></food-mid>
    <food-bottom :foodInfo="foodInfo"></food-bottom>
  </div>

</template>

<script>
    import FoodTop from "./components/FoodTop";
    import axios from "axios";
    import FoodSwipper from "./components/FoodSwipper";
    import FoodMid from "./components/FoodMid";
    import FoodBottom from "./components/FoodBottom";
    export default {
        name: "FoodDetail",
      props:['id'],
      created() {
        this.getFoodInfo()
      },
      components: {
        FoodBottom,
        FoodMid,
        FoodSwipper,
          FoodTop
        },
      data(){
        return{
          foodtop:[],
          swipperList:[],
          foodmid:[],
          foodInfo:[]
        }
      },
      methods:{
        // 配置get方法，在页面加载时发起get请求，获取index.json
        getHomeData(){
          axios.get('/static/data/foodInfo/food'+this.id+'.json')
            .then(this.getHomeDataSucc)
        },
        // 当前获取成功，将获取到的json文件中data赋予到全局data变量中
        getHomeDataSucc(res){
          res=res.data
          if(res.ret && res.data){
            var data =res.data
            this.foodtop=data.foodtop
            this.swipperList=data.swipperList
            this.foodmid=data.foodmid
            this.foodInfo=data.foodInfo

          }

        },
        getFoodInfo(){
          console.log(this.id)
        }
      },
      mounted(){
        this.getHomeData()
      }
    }
</script>

<style scoped>

</style>
