<template>
  <div class="swiper-box">
    <swiper :options="swiperOption" ref="mySwiper" >
      <!--slides-->

        <swiper-slide v-for="item in swiperList" :key="item.id">
          <img :src="item.imgurl" alt="" class="swipper-img">
        </swiper-slide>

<!--      <swiper-slide >-->
<!--        <img src="https://img.pddpic.com/mms-material-img/2021-09-20/1c5fefe7-9dc5-4aa8-a423-faeb009df479.png.a.jpeg" alt="" class="swipper-img">-->
<!--      </swiper-slide>-->
<!--      Optionalcontrols-->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
    export default {
        name: "GoodsSwiper",
      props:{
        swiperList:Array

      },
      data()
      {
        return{
          swiperOption:{
            pagination:{
              el:'.swiper-pagination'
            },
            loop:true
          },
        }
      }
    }
</script>

<style scoped lang="stylus">
  .swiper-box
    height 0
    overflow hidden
    padding-bottom  100%
    .swipper-img
      width 100%
</style>
