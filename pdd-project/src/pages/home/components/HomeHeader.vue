<template>
  <div class="mui-content">
    <div id="slider" class="mui-slider ">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
            首页
          </a>
          <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
            推荐
          </a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
            女装
          </a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
            箱包
          </a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
            手机
          </a>
          <a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
            食品
          </a>
          <a class="mui-control-item" href="#item7mobile" data-wid="tab-top-subpage-7.html">
            母婴
          </a>
          <!--<a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
            科技
          </a>-->
        </div>
      </div>

    </div>
  </div>
</template>

<script>
    import mui from '../../../mui/js/mui.min'
    mui('.mui-scroll-wrapper').scroll({
        deceleration:0.0005
    });
    export default {
        name: "HomeHeader.vue"
    }
</script>

<style scoped>
    *{
      touch-action: pan-y;

      touch-action: pan-x;
    }
    .mui-scroll{
      background-color: white;
    }
  .mui-active{
    color: #e02e24 !important;
  }
</style>

