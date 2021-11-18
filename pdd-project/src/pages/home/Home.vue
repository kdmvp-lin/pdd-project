<template>
  <div>
    <home-header></home-header>
    <home-footer></home-footer>
    <home-swipper :swipperList="swipperList"></home-swipper>
    <Home-icons :iconList="iconList"></Home-icons>
    <Home-goods></Home-goods>
  </div>

</template>


<script>
  import HomeHeader from "./components/HomeHeader";
  import HomeFooter from "./components/HomeFooter";
  import HomeSwipper from "./components/HomeSwipper";
  import HomeIcons from "./components/HomeIcons";
  import HomeGoods from "./components/HomeGoods";
  import axios from 'axios'
    export default {
        name: "Home",
        components:{
          HomeHeader,
          HomeFooter,
          HomeSwipper,
          HomeIcons,
          HomeGoods,

        },
      data(){
          return{
            swipperList:[],
            iconList:[]
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
            this.swipperList=data.swipperList
            this.iconList=data.iconList
          }

        }
      },
      mounted(){
          this.getHomeData()
      }
    }

</script>

<style scoped >

</style>
