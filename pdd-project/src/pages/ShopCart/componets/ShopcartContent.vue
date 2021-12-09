<template>
  <div class="shopcar-container">
    <div class="goods-list">
<!--      购物车商品列表-->
      <div class="mui-card">
        <div class="mui-card-content" v-for="(item) in goodslist" :key="item.id">
          <div class="mui-card-content-inner flex">
            <!-- 复选框 -->
            <div class="mui-input-row mui-checkbox mui-left">
              <label>&nbsp;</label>
              <input type="checkbox" v-model="getGoodsSelected[item.id]" @change="selectChanged(item.id,getGoodsSelected[item.id])">
            </div>
            <!-- 中间商品图片 -->
            <img :src="item.img">
            <!-- 右侧部分 -->
            <div class="info">
              <h1>{{ item.name }}</h1>
              <p class="flex">
                <span class="price">￥{{ item.price }}</span>
<!--                加入NumBox组件-->
                <num-box :initcount="item.count" :goodsid="item.id" :size="'small'"
                @count="countChanged"></num-box>
                <a href="#" @click.prevent="remove(item.id)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
<!--      结算区域-->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner balance">
            <div class="left">
              <p>总计（不含运费）：</p>
              <p>已勾选商品<span class="red">{{getSelectedCount}}</span>件，
              总价<span class="red">￥{{getSelectedAmount}}</span>元</p>
            </div>
            <button class="mui-btn mui-btn-primary">去结算</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    import {mapState,mapGetters} from 'vuex'
    import NumBox from "../../tools/NumBox";
    export default {
        name: "ShopcartContent",
        components:{
          NumBox
        },
        computed:{
          //通过mapState函数的使用，找到shopcart模块中的car属性，将他制作为computed属性
          //数组中的cart作为计算属性的名称
          ...mapState('shopcart',['cart']),
          //获取商品选中状态
          ...mapGetters('shopcart',['getGoodsSelected','getSelectedCount','getSelectedGoods']),
          //计算商品总价
          getSelectedAmount(){
            const selectedGoods= this.getSelectedGoods
            let amount = 0
            this.goodslist.forEach(item => {
              //判断选中的商品才会执行求总价的操作
              if(selectedGoods[item.id]){
                amount += item.price * selectedGoods[item.id].count
              }
            })
            return amount
          }
        },
        data(){
          return{
            goodslist:[]
          }
        },
        created() {
          this.getGoodsList()
        },
        methods: {
          //获取vuex中购物车的数据
         getGoodsList(){
           // console.log(this.cart)
           const goodsArr = []
           this.cart.forEach(item => goodsArr.push(item))
           // console.log(goodsArr)
           this.goodslist = goodsArr
         },
         countChanged(goodsinfo){
            // console.log(goodsinfo)
           this.$store.commit('shopcart/updateGoodsInfo',goodsinfo)
         },
         selectChanged(id,selected){
           this.$store.commit('shopcart/updateGoodsSelected',{
             id: id,
             selected: selected
           })
         },
          remove(id){
           //删除goodsList中商品数据
            this.goodslist.some((item,index) => {
              if(parseInt(item.id) === parseInt(id)){
                this.goodslist.splice(index,1)
                return true
              }
            })
           //根据id参数删除vuex里的数据的操作
            this.$store.commit('shopcart/removeShopcart',id)
          }
        }
    }
</script>

<style scoped lang="stylus">
  .flex
    display flex
  .shopcar-container
    overflow hidden
    .goods-list
      .balance
        display flex
        justify-content space-between
        align-items center
        .red
          color red
          font-weight bold
          font-size 16px
      .mui-card-content-inner
        align-items center
        padding 10px
        .mui-checkbox.mui-left input[type='checkbox']
          left: 0px
        .mui-radio.mui-left label, .mui-checkbox.mui-left label
          padding-left 20px
          padding-right 35px
          padding-bottom 22px
      img
        width 60px
      .info
        margin-left 10px
        width 100%
        overflow hidden
        box-sizing border-box
        h1
          font-size 13px
          font-weight bold
          line-height 20px
          padding-top 10px
        p
          display flex
          flex-direction row
          align-items center
          justify-content space-between
          .price
            text-align left
            font-size 16px
            font-weight 700
            color red
            flex 1
          a
            line-height 25px
</style>
