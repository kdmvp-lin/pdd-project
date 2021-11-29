<template>
  <div>
    <banner-top></banner-top>
    <banner-middle :miaosha_goods="miaosha_goods"></banner-middle>
    <banner-footer></banner-footer>
  </div>
</template>

<script>
  import BannerTop from "./componets/BannerTop";
  import BannerMiddle from "./componets/BannerMiddle";
  import BannerFooter from "./componets/BannerFooter";
  import axios from 'axios'
    export default {
        name: "Banner",
      components:{
        BannerFooter,
        BannerMiddle,
        BannerTop,
      },
      data(){
        return{
          miaosha_goods:[]
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
            this.miaosha_goods=data.miaosha_goods
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
