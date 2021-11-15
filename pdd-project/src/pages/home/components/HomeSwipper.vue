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
      data(){
          return{
            swiperOption:{
              pagination:{
                el:'.swiper-pagination'
              },
              loop:true
            },
            swipperList:[
              {
                'id':'001',
                'imgUrl':'/static/pic/simple.png'
              },
              {
                'id':'002',
                'imgUrl':'/static/pic/bit.png'
              },
              {
                'id':'003',
                'imgUrl':'/static/pic/electronic.png'
              },
              {
                'id':'004',
                'imgUrl':'/static/pic/perfect.png'
              },
              {
                'id':'005',
                'imgUrl':'/static/pic/boombl4.png'
              },
            ]
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
</style>
