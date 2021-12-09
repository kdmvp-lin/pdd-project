<template>
  <div class="footer">
    <div class="footer-box" v-for="item in goodsInfo" :key="item.id">
      <div class="more">
        <div class="iconfont icon">&#xe7e3;</div>

        <div class="word">更多</div>
      </div>
      <div class="more">
        <div class="iconfont icon">&#xe669;</div>
        <div class="word">收藏</div>
      </div>
      <div class="more">
        <div class="iconfont icon">&#xe7fd;</div>
        <div class="word">客服</div>
      </div>

      <div class="price1" @click="addCart">
        <div>{{this.goodsInfo[0].price}}</div>
        <div>发起拼单</div>
      </div>
      <div class="price2" @click="addCart">
        <div>{{this.goodsInfo[0].yuanjia}}</div>
        <div>单独购买</div>

      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "GoodsFooter",
        props:{
            goodsInfo: Array
          },
        methods: {
          addCart(){
            this.$store.commit('shopcart/addShopcart',{
              id:this.goodsInfo[0].id,
              name:this.goodsInfo[0].name,
              price:this.goodsInfo[0].price,
              img:this.goodsInfo[0].pic,
              count:1,
              selected:true
            })
          }

        }
        }
</script>


<style scoped lang="stylus">
  .footer
    position fixed
    bottom 0
    height 0
    padding-bottom 15%
    overflow hidden
    background-color white
    .footer-box
      .more
        display inline-block
        margin-left .6rem
        font-size .7rem
        text-align center
        margin-top .5rem
        .icon
          font-size 1.5rem
  .price1,.price2
    float right
    width 8rem
    height 4rem
    background-color #f3aba7
    text-align center
    color white
    padding-top 0.5rem
  .price1
    background-color #e02e24
  .price2
    margin-left 0.5rem;
</style>
