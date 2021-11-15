<template>
  <div class="mui-content">
    <div id="slider" class="mui-slider ">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
            首页
          </a>
          <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
            热门关注
          </a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
            数据榜
          </a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
            特殊磨损
          </a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
            金贴专区
          </a>
          <a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
            近期降价
          </a>
          <a class="mui-control-item" href="#item7mobile" data-wid="tab-top-subpage-7.html">
            四连金贴
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
    color: #eaab17 !important;
  }
</style>

