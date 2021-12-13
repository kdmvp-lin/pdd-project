<template>
  <div>
    <goods-swiper :swiperList="swiperList"></goods-swiper>
    <goods-footer  :goodsInfo="goodsInfo" v-if="goodsInfo.length"></goods-footer>
    <goods-middle :goodsInfo="goodsInfo" :pinglun_pp="pinglun_pp"></goods-middle>
  </div>
</template>

<script>
  import GoodsSwiper from "./componets/GoodsSwiper";
  import GoodsFooter from "./componets/GoodsFooter";
  import GoodsMiddle from "./componets/GoodsMiddle";
  import axios from "axios";
    export default {
        name: "GoodsDetail",
        props:['id'],
        created() {
          this.getGoodsInfo()
        },
      components:{
          GoodsMiddle,
          GoodsFooter,
          GoodsSwiper
        },
      data(){
        return{
          pinglun_pp:[],
          goodsInfo:[],
          iconfontList:[],
          swiperList:[],
        }
      },
      methods:{
        // 配置get方法，在页面加载时发起get请求，获取index.json
        getHomeData(){
          axios.get('/static/data/goodsInfo/goods'+this.id+'.json')
            .then(this.getHomeDataSucc)
        },
        // 当前获取成功，将获取到的json文件中data赋予到全局data变量中
        getHomeDataSucc(res){
          res=res.data
          if(res.ret && res.data){
            var data =res.data
            this.goodsInfo=data.goodsInfo
            this.pinglun_pp=data.pinglun_pp
            this.swiperList=data.swiperList
            this.pric=data.pric
          }

        },
        getGoodsInfo(){
          console.log(this.id)
        }
      },
      mounted(){
        this.getHomeData()
      }

    }

</script>

<style scoped>

</style>
