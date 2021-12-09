<template>
  <div>
    <nav class="my-bar my-bar-tab">
      <router-link to="/Home" class="my-tab-item">
        <span class="iconfont icon">&#xe6b8;</span>
        <span class="my-tab-label">
        首页
      </span>
      </router-link>
      <router-link to="/Category" class="my-tab-item">
        <span class="iconfont icon">&#xe6bc;</span>
        <span class="my-tab-label">
        分类
      </span>
      </router-link>
      <router-link to="/ShopCart" tag="a" class="my-tab-item  my-active">
        <span class="iconfont icon">&#xe6af;<span class="my-badge">{{$store.getters['shopcart/getSelectedCount']}}</span></span>
        <span class="my-tab-label">
        购物车
      </span>
      </router-link>
      <router-link to="/" class="my-tab-item">
        <span class="iconfont icon">&#xe6b7;</span>
        <span class="my-tab-label">
        个人中心
      </span>
      </router-link>
    </nav>
  </div>
</template>

<script>
    export default {
        name: "ShopcartFooter"
    }
</script>

<style scoped lang="stylus">
  .my-bar
    z-index 10
    background-color white
    position fixed
    right 0
    left 0
    height 44px
    padding-right 10px
    padding-left 10px
    border-bottom 0
    backface-visibility hidden
  .my-bar-tab
    display table
    bottom 0
    width 100%
    height 50px
    box-shadow 0 0 1px rgba(0,0,0,.85)
    .my-tab-item
      display table-cell
      overflow hidden
      width 1%
      height 50px
      text-align center
      vertical-align middle
      white-space nowrap
      text-overflow ellipsis
      color #929292
      padding-top .4rem
      .icon
        font-size 1.1rem
        position relative
        .my-badge
          font-size 10px
          line-height 1.4
          position absolute
          top -7px
          left 100%
          margin-left -10px
          padding 1px 7px
          color: white
          background red
          border-radius 50%
      .my-tab-label
        font-size 11px
        display block
        overflow hidden
        text-overflow ellipsis
    .my-active
      color #df2127
</style>
