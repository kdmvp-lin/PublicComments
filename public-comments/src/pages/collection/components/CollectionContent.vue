<template>
  <div class="all">
    <div class="top">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left ret"></a>
      <input class="left_box" placeholder="搜索">
      <div class="iconfont icon">&#xe752;</div>
      <div class="iconfont icon">&#xe74f;</div>
    </div>
    <div class="mui-content" v-for="item in foodlist" :key="item.id">
      <ul id="OA_task_1" class="mui-table-view" >
        <li class="mui-table-view-cell">
          <div class="mui-slider-right mui-disabled">
            <span class="mui-btn mui-btn-red" @click.prevent="remove(item.id)">删除</span>
          </div>
          <div class="mui-slider-handle">
            <div class="left">
              <img :src="item.img">
            </div>
            <div class="right">
              <div class="name">{{item.name}}</div>
              <div class="user">
                <img :src="item.userimg" class="userimg">
                <div class="username">{{item.username}}</div>
              </div>
              <div class="xinxin" v-for="item2 in xingxing" :key="item2.id">
                <img :src="item2.xxImg" class="xx">
              </div>

            </div>
            <div class="right_bot">
              <div class="iconfont icon logo">&#xe743;</div>
              <div class="city">义乌</div>
            </div>
          </div>
        </li>
      </ul>
  </div>
  </div>
</template>

<script>

  import {mapState,mapGetters} from 'vuex'
    export default {
      name: "CollectionContent",
      computed:{
        //通过mapState函数的使用，找到shopcart模块中的car属性，将他制作为computed属性
        //数组中的cart作为计算属性的名称
        ...mapState('collection',['cart']),
      },
      data(){
        return{
          foodlist:[],
          xingxing: [
            {
              "id": "1",
              "xxImg": "https://promotion-3.pddpic.com/upload/2020-04-21/46e1fd46-df2b-40eb-8446-cfe5f5d732ab.png?imageView2/2/w/1300/q/80"
            },{
              "id": "2",
              "xxImg": "https://promotion-3.pddpic.com/upload/2020-04-21/46e1fd46-df2b-40eb-8446-cfe5f5d732ab.png?imageView2/2/w/1300/q/80"
            },{
              "id": "3",
              "xxImg": "https://promotion-3.pddpic.com/upload/2020-04-21/46e1fd46-df2b-40eb-8446-cfe5f5d732ab.png?imageView2/2/w/1300/q/80"
            },{
              "id": "4",
              "xxImg": "https://promotion.pddpic.com/upload/2020-04-21/005acc1c-ef80-408d-8da7-9ec78cad21c7.png?imageView2/2/w/1300/q/80"
            },{
              "id": "5",
              "xxImg": "https://promotion-3.pddpic.com/upload/2020-04-21/7c3dc04f-c14c-4617-a2ba-49b2cf999cfe.png?imageView2/2/w/1300/q/80"
            }
          ],
        }
      },
      created() {
        this.getFoodList()
      },
      methods:{
        getFoodList(){
          // console.log(this.cart)
          const foodArr = []
          this.cart.forEach(item => foodArr.push(item))
          //   // console.log(foodArr)
          this.foodlist = foodArr
          console.log(this.cart)
        },
        remove(id){
          //删除goodsList中商品数据
          this.foodlist.some((item,index) => {
            if(parseInt(item.id) === parseInt(id)){
              this.foodlist.splice(index,1)
              return true
            }
          })
          //根据id参数删除vuex里的数据的操作
          this.$store.commit('collection/removeCollection/',id)
        }
      }
    }
</script>

<style scoped lang="stylus">
  *{
    touch-action: pan-y;
    touch-action: pan-x;
  }
.all
  .top
    margin-top 1rem
    .ret
      color #808080
    .left_box
      display inline-block
      border-radius 25px
      border-color #ececec
      width 12rem
      height 2rem
      margin-left 1.5rem
      border solid 0.01em
      border-color #f1f1f1
      font-size 15px
      background-color #f1f1f1
      margin-right 2rem
    div
      display inline-block
      font-size 1.8rem
  .mui-content
    width 94%
    margin-left .8rem
  .mui-table-view
    .mui-slider-handle
      .left
        display inline-block
        img
          width 6rem
          height 6rem
      .right
        margin-left 1rem
        display inline-block
        .name
          font-weight bold
        .user
          margin-top 1.6rem
          .userimg
            width 1.5rem
            height 1.5rem
            border-radius 50%
            display inline-block
          .username
            display inline-block
            font-size 1rem
            color #c7c7c7
        .xinxin
          display inline-block
          .xx
            display inline-block
            width .8rem
            height .8rem
      .right_bot
        display inline-block

        .logo
          color #c7c7c7
        .city
          color #c7c7c7
</style>
