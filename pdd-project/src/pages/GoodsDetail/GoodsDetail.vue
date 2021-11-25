<template>
  <div>
    <goods-swiper></goods-swiper>
    <goods-footer></goods-footer>
    <goods-middle :people="people" :pinglun_pp="pinglun_pp"></goods-middle>
  </div>
</template>

<script>
  import GoodsSwiper from "./componets/GoodsSwiper";
  import GoodsFooter from "./componets/GoodsFooter";
  import GoodsMiddle from "./componets/GoodsMiddle";
  import axios from "axios";
    export default {
        name: "GoodsDetail",
        components:{
          GoodsMiddle,
          GoodsFooter,
          GoodsSwiper
        },
      data(){
        return{
          people:[],
          pinglun_pp:[]
        }
      },
      methods:{
        // 配置get方法，在页面加载时发起get请求，获取index.json
        getHomeData(){
          axios.get('/static/data/index.json')
            .then(this.getHomeDataSucc)
        },
        // 当前获取成功，将获取到的json文件中data赋予到全局data变量中
        getHomeDataSucc(res){
          res=res.data
          if(res.ret && res.data){
            var data =res.data
            this.people=data.people
            this.pinglun_pp=data.pinglun_pp
          }

        }
      },
      mounted(){
        this.getHomeData()
      }

    }

</script>

<style scoped>

</style>
