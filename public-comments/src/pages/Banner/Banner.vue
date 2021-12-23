<template>
  <div>
    <banner-header></banner-header>
    <banner-top></banner-top>
    <banner-middle></banner-middle>
    <banner-goods :foodsList="foodsList"></banner-goods>
    <banner-footer></banner-footer>
  </div>
</template>

<script>
    import BannerTop from "./componets/BannerTop";
    import BannerMiddle from "./componets/BannerMiddle";
    import BannerFooter from "./componets/BannerFooter";
    import BannerHeader from "./componets/BannerHeader";
    import BannerGoods from "./componets/BannerGoods";
    import axios from 'axios'
    export default {
      name: "Banner",
      components: {
        BannerGoods,
        BannerHeader,
          BannerFooter,
          BannerMiddle,
          BannerTop
        },
      methods:{
        getHomeData(){
          axios.get('/static/data/index.json')
            .then(this.getHomeDataSucc)
        },
        getHomeDataSucc(res){
          res = res.data
          if(res.ret && res.data){
            var data=res.data
            this.foodsList=data.foodsList
          }
        }
      },
      mounted() {
        this.getHomeData()
      },
      data(){
        return{
          foodsList:[]
        }
      },
    }
</script>

<style scoped>

</style>
