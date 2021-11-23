<template>
    <div class="wrapper">
      <div class="top">
        <span class="price">￥3799</span>
        <span class="yuanjia">￥3999</span>
        <span class="pindan">已拼7612件</span>
        <span class="desc">华为荣耀50Pro 100W超级快充5G手机 1亿像素超清镜头高通骁龙778G</span>
        <span class="tuihuo">退货包运费</span>
      </div>
    </div>

</template>
<script>
    export default {
        name: "GoodsMiddle"
    }
</script>

<style scoped lang="stylus">
  .wrapper
    padding 1rem
    .top
      height 0
      padding-bottom 40%

      overflow hidden
      position relative
      margin-top .5rem

      .price

        font-size 1.5rem
        color #e02e24
        float left
      .yuanjia
        float left
        font-size .7rem
        color #cccccc
        text-decoration line-through
        margin-top .2rem
      .pindan
        float right
        font-size .8rem
      .desc

        margin-top 1.6
        font-weight bold
        display inline-block
      .tuihuo
        position absolute
        right 4.3rem
        top 3rem
        background-color #25b513
        color white
        font-size .8rem
        padding-left 0.3rem
        padding-right 0.3rem

</style>
