<template>
  <div class="swipper-box">
    <swiper :options="swiperOption" ref="mySwiper">
      <!--slides-->
      <swiper-slide v-for="item in swipperList" :key="item.id">
        <img :src="item.imgUrl" alt="" class="swipper-img">
      </swiper-slide>

      <!--Optionalcontrols-->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>


</template>

<script>
    export default {
        name: "HomeSwipper",
        props:{
          swipperList:Array

        },
      data(){
          return{
            swiperOption:{
              pagination:{
                el:'.swiper-pagination'
              },
              loop:true
            },
            //储存轮播图片src的对象数组

          }

      },

    }
</script>

<style scoped lang="stylus">

  .swipper-box{
    height: 0;
    padding-bottom:60%;
    overflow:hidden;
    background-color #282626;
  }
  .swipper-img{
    width:100%;

  }
  .swiper-pagination{
    text-align: center;

  }
  .swipper-box >>> .swiper-pagination-bullet
    background white
    opacity 1
  .swipper-box >>> .swiper-pagination-bullet-active
    background #df2127
  .swipper-box{
    height :0;
    padding-bottom: 31%;
    overflow:hidden;
  }

</style>
