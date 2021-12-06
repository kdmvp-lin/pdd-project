<template>
<div>
  <router-link tag="div" v-for="item in goods" :key="item.id" :to="{name:'GoodsDetail',params:{id:item.id}}" class="goods-box" >
<!--    商品图片-->

    <div class="left-img">
      <img class="goods-img" :src="item.pic_url">
    </div>
    <div class="right-content">
<!--      商品信息-->
      <div class="goods-desc">
        <span>{{item.goods_desc}}</span>
      </div>
      <div class="goods-price">
        <span class="money">{{item.money}}</span>
        <span class="pindan">{{item.pindan}}</span>
<!--        拼单头像-->
        <div class="user-img">
          <img class="img-one" :src="item.user_imgone">
          <img class="img-two" :src="item.user_imgtwo">
        </div>
      </div>
    </div>
  </router-link>
  <div class="kong"></div>
</div>
</template>

<script>
    export default {
        name: "HomeGoods",
      props:{
        goods:Array
      },
      data(){
        return{

        }
      },
    }
</script>

<style scoped lang="stylus">
  .kong
    height 4rem
    padding-top 5rem
  .goods-box
    height 0
    padding-bottom 45%
    overflow hidden
    padding-top .5rem
    padding-left .3rem
    .left-img
      width 10rem
      height 10rem
      display inline-block
      float left
    .goods-img
      width 10rem
      height 10rem
    .right-content
      width 13rem
      height 10rem
      float right
      .goods-desc
        width 13rem
        height 2.4rem
        overflow hidden
        margin-bottom 6.5rem
        font-size .9rem
      .goods-price
        .money
          float left
          margin-left .3rem
          margin-right .3rem
          color #e02e24
          font-weight bold
          font-size 1.2rem
        .pindan
          font-size .8rem
          float left
          margin-top .1rem
          color #9c9c9c
        .user-img
          display inline-block
          margin-left 0.5rem
          .img-one,.img-two
            border-radius  50%
            width 1.5rem
            height 1.5rem
          .img-one
            position relative
            right -14px
</style>
