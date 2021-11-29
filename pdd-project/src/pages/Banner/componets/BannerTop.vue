<template>
  <div class="mui-content">
    <div style="padding: 10px 10px;">
      <div id="segmentedControl" class="mui-segmented-control">
        <a class="mui-control-item mui-active" href="#item1">
          正在疯抢
        </a>
        <a class="mui-control-item" href="#item2">
          即将开始
        </a>
        <a class="mui-control-item" href="#item3">
          明日预告
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "BannerTop"
    }
</script>
<style scoped lang="stylus">
  .mui-content
    background-color white
    position fixed
    .mui-segmented-control
      border none
      .mui-control-item
        color black
        border none
      .mui-active
        background-color white
        color #e02e24
        border-bottom .1rem solid
        border-bottom-color #e02e24
        font-weight bold;
</style>
