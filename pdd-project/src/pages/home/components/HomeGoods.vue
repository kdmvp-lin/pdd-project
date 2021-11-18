<template>
<div>
  <div class="goods-box" v-for="item in goods" :key="item.id">
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
  </div>
</div>
</template>

<script>
    export default {
        name: "HomeGoods",
      data(){
        return{

            goods:[
              {
                'id':'01',
                'pic_url':'https://img.pddpic.com/goods/images/2021-08-01/1ee001d143a1ae852138729044175acc.jpeg?imageView2/2/w/400/q/80',
                'goods_desc':'新品当天发 华为荣耀50/50se全网通5G  一亿像素拍照旗舰手机pro',
                'money':'1839',
                'pindan':'已拼4543万件',
                'user_imgone':'https://avatar2.pddpic.com/a/Q0xuQ0lUUXVIYzFEOVl4SDVzZmN1UkZhc2RkR3NmZjFMQT09djA0-1608906443?imageMogr2/thumbnail/100x',
                'user_imgtwo':'https://avatar2.pddpic.com/a/Q0haczk1S0hSNFFrU25QN2RTUE03OGwwSE1QOEZ2WjJTUT09djA0-1524833601?imageMogr2/thumbnail/100x',
              }
            ]


        }
      },
    }
</script>

<style scoped lang="stylus">
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
