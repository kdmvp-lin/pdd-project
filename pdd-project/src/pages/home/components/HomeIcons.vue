<template>
  <div class="mui-content">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <router-link tag="li"  to="/Banner"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="item in page" :key="item.id"><a href="#">
            <img class="icon-img" :src="item.imgUrl" alt="">
            <div class="mui-media-body">{{item.content}}</div></a></router-link>
        </ul>
      </swiper-slide>
    </swiper>
  </div>

</template>

<script>
    export default {
        name: "HomeIcons",
      props:{
        iconList:Array

      },
        data(){
          return{
            swiperOption:{
            },

          }
        },
        computed:{
          pages(){
            var pages=[];
            this.iconList.forEach((item,index) =>{
                var page=Math.floor(index/10);
                if(!pages[page]){
                  pages[page]=[];
                }
                pages[page].push(item)
            })
            return pages
          }
      }
    }

</script>

<style scoped lang="stylus">
  .mui-content .mui-table-view
     margin-top .1rem
  .mui-content .mui-grid-view.mui-grid-9
    background white
    border 0
  .mui-content .mui-grid-view.mui-grid-9 .mui-table-view-cell
    border 0
    padding 0
  .mui-content .mui-grid-view.mui-grid-9 .mui-col-xs-4
    width 20%
  .mui-content >>>.icon-img
    width 50%
  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body
    margin-top 0
    text-align center
    font-size 50%

</style>
<!--github&&gitee-->
