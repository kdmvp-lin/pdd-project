<template>
<div>

  <nav class="mui-bar mui-bar-tab">
    <a class="mui-tab-item mui-active" href="#tabbar">
      <span class="mui-icon mui-icon-home"></span>
      <span class="mui-tab-label">buff</span>
    </a>
    <a class="mui-tab-item" href="#tabbar-with-chat">
      <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
      <span class="mui-tab-label">发现</span>
    </a>
    <a class="mui-tab-item" href="#tabbar-with-contact">
      <span class="mui-icon mui-icon-contact"></span>
      <span class="mui-tab-label">库存</span>
    </a>
    <a class="mui-tab-item" href="#tabbar-with-map">
      <span class="mui-icon mui-icon-gear"></span>
      <span class="mui-tab-label">我</span>
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
    color: #eaab17
  }

</style>
