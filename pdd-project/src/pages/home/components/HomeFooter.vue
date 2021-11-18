<template>
<div>

  <nav class="mui-bar mui-bar-tab">
    <a class="mui-tab-item mui-active" href="#tabbar">
      <span class="mui-icon mui-icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </a>
    <a class="mui-tab-item" href="#tabbar-with-chat">
      <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
      <span class="mui-tab-label">直播</span>
    </a>
    <a class="mui-tab-item" href="#tabbar-with-contact">
      <span class="mui-icon mui-icon-contact"></span>
      <span class="mui-tab-label">分类</span>
    </a>
    <a class="mui-tab-item" href="#tabbar-with-map">
      <span class="mui-icon mui-icon-gear"></span>
      <span class="mui-tab-label">个人中心</span>
    </a>
  </nav>
</div>
</template>

<script>

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
