<template>
  <div>
    <category-foot></category-foot>
    <category-content :tagList="tagList"></category-content>
  </div>

</template>

<script>
    import CategoryFoot from "./componets/CategoryFoot";
    import CategoryContent from "./componets/CategoryContent";
    import axios from "axios"
    export default {
        name: "Category",
        components: {
          CategoryContent,
          CategoryFoot
        },
      data(){
        return{
          tagList:[],
        }
      },
      methods:{
        // 配置get方法，在页面加载时发起get请求，获取index.json
        getHomeData(){
          axios.get('/static/data/category.json')
            .then(this.getHomeDataSucc)
        },
        // 当前获取成功，将获取到的json文件中data赋予到全局data变量中
        getHomeDataSucc(res){
          res=res.data
          if(res.ret && res.data){
            var data =res.data
            this.tagList=data.tagList
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
