import Vue from 'vue'
import Router from 'vue-router'
import Home from "../pages/home/Home";
import Collection from "../pages/collection/Collection";
import Message from "../pages/message/Message";
import FoodDetail from "../pages/fooddetail/FoodDetail";
import Banner from "../pages/Banner/Banner";
import Mine from "../pages/Mine/Mine";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Collection',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/Message',
      name: 'Message',
      component: Message
    },
    {
      path: '/FoodDetail/:id',
      props:true,
      name: 'FoodDetail',
      component:FoodDetail
    },
    {
      path: '/Banner',
      name: 'Banner',
      component: Banner
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
