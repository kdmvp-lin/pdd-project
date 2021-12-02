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
    <router-link tag="a" to="/Category" class="mui-tab-item" href="#tabbar-with-contact">
      <span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
      <span class="mui-tab-label">购物车</span>
    </router-link>
    <router-link tag="a" to="/Category" class="mui-tab-item" href="#tabbar-with-map">
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
        name: "HomeFooter"
    }
</script>

<style scoped>
  *{
    touch-action: none;
  }

  .mui-bar-tab .mui-tab-item.mui-active{
    color: #e02e24
  }

</style>
