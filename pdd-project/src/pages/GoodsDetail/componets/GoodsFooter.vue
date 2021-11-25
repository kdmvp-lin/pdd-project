<template>
  <div class="footer">
    <div class="footer-box">
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
      <div class="price1">
        <div>3799</div>
        <div>发起拼单</div>
      </div>

      <div class="price2">
        <div>3999</div>
        <div>单独购买</div>

      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "GoodsFooter"
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
