function setItem(name,item) {
  localStorage.setItem(name,JSON.stringify(item))
}
function getItem(name) {
  return JSON.parse(localStorage.getItem(name)||'[]')
}
export default {
  state:{
    //cart:[{id:店铺id,selected:商品是否被选中}]
    cart:getItem('cart'),
    //用于存放被收藏的店铺
    collect:getItem('collect')
  },
  mutations:{
    //添加商品到收藏夹
    addCollection(state,foodInfo){
      //如果收藏夹中已经有foodInfo对应商品，不再增加忽视此次操作
      //否则表示收藏夹中没有对应的商品，就应该把foodInfo添加到收藏中
      let flag = false//当flag为false时表示收藏夹中没有相同的商品，反之则有
      //判断购物车中是否有对应商品

      state.cart.some(item => {
        if(item.id === foodInfo.id){
          item.count += parseInt(foodInfo.count)
          flag = true
          return true
        }
      })

      if(!flag){
        //收藏夹中没有相同的商品
        state.cart.push(foodInfo)
      }

      //调用setItem方法将收藏夹数据保存到localStorage
      setItem('cart',state.cart)

    },
    removeCollection(state,id){
      state.cart.some((item,index) => {
        if(parseInt(item.id) === parseInt(id)){
          state.cart.splice(index,1)
          return true
        }
      })
      setItem('cart',state.cart)
    }
  },
  actions:{},
  getters:{},
  namespaced:true
}
