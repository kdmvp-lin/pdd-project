<template>
  <div>

    <nav class="mui-bar mui-bar-tab">
      <router-link tag="a" to="/" class="mui-tab-item mui-active" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link tag="a" to="/Category" class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">分类</span>
      </router-link>
      <router-link tag="a" to="/ShopCart" class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link tag="a" to="/" class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">个人中心</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
  import mui from '../../../mui/js/mui'
  mui('body').on('tap','a',function(){
    window.top.location.href=this.href
  })
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
