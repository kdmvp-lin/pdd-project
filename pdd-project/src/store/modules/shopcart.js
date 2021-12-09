function setItem(name,item) {
  localStorage.setItem(name,JSON.stringify(item))
}
function getItem(name) {
  return JSON.parse(localStorage.getItem(name)||'[]')
}
export default {
  state:{
    //cart:[{id:商品id，count:购买数量,selected:商品是否被选中},{},.....]
    cart:getItem('cart'),
    //buy数组中存放的是被选中的商品
    buy:getItem('buy')
  },
  mutations:{
    //添加商品到购物车
    addShopcart(state,goodsInfo){
      //如果购物车中已经有goodsInfo对应商品，那么进行商品数量增加的操作
      //否则表示购物车中没有对应的商品，就应该把goodsInfo添加到购物车中
      let flag = false//当flag为false时表示购物车中没有相同的商品，反之则有
      //判断购物车中是否有对应商品
      state.cart.some(item => {
        if(item.id === goodsInfo.id){
          item.count += parseInt(goodsInfo.count)
          flag = true
          return true
        }
      })

      if(!flag){
        //购物车中没有相同的商品
        state.cart.push(goodsInfo)
      }

      //调用setItem方法将购物车数据保存到localStorage
      setItem('cart',state.cart)

    },
    //修改商品数量
    updateGoodsInfo(state,goodsInfo){
      state.cart.some(item => {
        if(parseInt(item.id) === parseInt(goodsInfo.id)){
          item.count = parseInt(goodsInfo.count)
          return true
        }
      })
      setItem('cart',state.cart)
    },
    //修改商品的选中状态
    updateGoodsSelected(state,goodsInfo){
      state.cart.some(item => {
        if(parseInt(item.id) === parseInt(goodsInfo.id)){
          item.selected = goodsInfo.selected
        }
      })
      setItem('cart',state.cart)
    },
    //根据id删除对应的商品
    removeShopcart(state,id){
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
  getters:{
    // 获取商品数量
    getGoodsCount (state) {
      var goods = {}
      state.cart.forEach(item => {
        goods[item.id] = item.count
      })
      return goods
    },
    // 获取商品有没有选中的状态值（selected）
    getGoodsSelected (state) {
      var goods = {}
      state.cart.forEach(item => {
        goods[item.id] = item.selected
      })
      return goods
    },
    // 获取选中的商品的件数
    getSelectedCount (state) {
      var count = 0
      state.cart.forEach(item => {
        if (item.selected) {
          count += item.count
        }
      })
      return count
    },
    // 获取选中的商品
    getSelectedGoods (state) {
      var goods = {}
      state.cart.forEach(item => {
        if (item.selected) {
          goods[item.id] = item
        }
      })
      return goods
    },
    // 获取要购买的商品
    getBuy (state) {
      var goods = {}
      state.buy.forEach(item => {
        goods[item.id] = item
      })
      return goods
    }

  },
  namespaced:true
}
