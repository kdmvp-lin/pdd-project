<template>
  <div class="banner-box">
    <div class="goods-box" v-for="item in miaosha_goods" :key="item.id">
      <div class="left-img">
        <img class="goods-img" :src="item.goods_img">
      </div>
      <div class="right-content">
        <div class="goods-desc">
          <span>{{item.goods_desc}}</span>
        </div>
        <div class="box">
          <span class="left"></span>
          <span class="rate">{{item.per}}</span>
        </div>
        <span class="pindan">{{item.pindan}}</span>
        <div style="clear:both;"></div>
        <div class="goods-price">
          <span class="money">{{item.money}}</span>
        </div>
        <div class="click">马上抢</div>
      </div>
    </div>
    <div class="kong"></div>
  </div>
</template>

<script>
    export default {
        name: "BannerMiddle",
      props:{
        miaosha_goods:Array

      },
      data(){
        return{

        }
      },
    }
</script>

<style scoped lang="stylus">
  .banner-box
    padding-top 4rem
    .kong
        padding-bottom 2rem
    .goods-box
      height 0rem
      padding-bottom 50%
      overflow hidden
      padding-top .2rem
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
          height 1.5rem
          overflow hidden
          margin-bottom 6.5rem
          font-size .9rem
        .box
          margin-top -4rem
          border .07rem solid #e02e24
          height 1.1rem
          width 8rem
          border-radius .3rem
          background-color #f38f71
          color white
          .left
            display inline-block
            height 1rem
            width 3rem
            border-radius .3rem
            background-color #e02e24
        .pindan
          font-size .8rem
          float right
          margin-top -1rem
          color #9c9c9c
        .goods-price
          margin-top 3rem
          .money
            float left
            margin-left .3rem
            margin-right .3rem
            color #e02e24
            font-weight bold
            font-size 1.2rem
        .click
          height 2rem
          width 4rem
          background-color #e02e24
          text-align center
          line-height 2rem
          float right
          margin-top -0.5rem
          margin-right .7rem
          border-radius .3rem
          color white
          font-size .8rem

</style>
