<template>
  <div class="menu">
    <!--                左侧导航               -->
    <div class="menu-left">
      <ul>
        <li class="menu-item" v-for="(item,index) in tagList" :key="index" @click="clickList(index)">
          <p class="text">{{item.name}}</p>
        </li>
      </ul>
    </div>
    <!--                右侧导航               -->
    <div class="menu-right" ref="itemList">
      <ul>
        <li class="cate" v-for="(menu,index1) in tagList":key="index1">
          <h4 class="cate-title">{{menu.name}}</h4>
          <ul class="cate-item">
            <li v-for="(item,index2) in menu.subltem":key="index2" >
              <a href="#" class="cate-item-wrapper">
                <div class="cate-item-img"><img :src="item.url" alt=""></div>
                <span>{{item.name}}</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
    export default {
        name: "CategoryContent",
      props:{
          tagList:Array
      },
      data(){
          return{
            currentIndex:0,
            rightLiTops:[]
          }
      },
      watch:{
          tagList(){
            //页面加载完成后调用
            this.$nextTick(()=>{
              this._initBScroll()
              //记录右侧每个盒子的高度
              this._initRightHeight()
            })
          }
      },
      methods:{
          clickList(index){

            this.currentIndex=index
            const y=-this.rightLiTops[index]
            //根据索引定位右侧盒子的定位值
            this.rightBScroll.scrollTo(0,y)
          },
        _initBScroll(){

          this.leftBScroll=new BScroll('.menu-left',{
            click:true,
            mouseWheel:true
          }),
            this.rightBScroll=new BScroll('.menu-right',{
              click:true,
              mouseWheel:true,
              probeType:3
            })
          this.rightBScroll.on('scroll',pos=>{
            // console.log(pos)
            const scrollY=Math.abs(pos.y)
            console.log(scrollY)
            for(var i=0;i<this.rightLiTops.length-1;i++){
              //判断滚动的y值
              if(scrollY>=this.rightLiTops[i]&&scrollY<this.rightLiTops[i+1]){
                this.currentIndex=i
              }
              /* if(scrollY>=this.rightLiTops[i]&&scrollY<this.rightLiTops[i+1]){
                console.log('min'+this.rightLiTops[i])
                console.log('max'+this.rightLiTops[i+1])
                console.log('我现在滚动到的位置是第'+ i +'个位置')
              } */
            }
          })
        },
        _initRightHeight(){
          const itemArray=[]
          let top=0
          //第一个二级分类的定位值
          itemArray.push(top)
          //获取所有二级分类
          const allList=this.$refs.itemList.getElementsByClassName("cate")
          for(var i=0;i<allList.length;i++){
            top+=allList[i].clientHeight
            itemArray.push(top)
          }
          this.rightLiTops=itemArray
        }
      }
    }
</script>

<style scoped lang="stylus">
  ul
    margin 0
    padding 0
  li
    list-style none
  .menu
    display flex
    position absolute
    text-align center
    top 0px
    bottom 50px
    width 100%
    overflow hidden
    .menu-left
      flex 0 0 80px
      width 80px
      background #f3f5f7
      .menu-item
        height 54px
        width 100%
        .text
          width 100%
          line-height 54px
          margin-bottom 0
      .current
        width 100%
        background #fff
        .text
          color #e02e24
    .menu-right
      flex 1
      background #fff
      .cate
        height 100%
        .cate-title
          margin 0
          text-align left
          font-size 14px
          color #333
          font-weight bold
          padding 10px
        .cate-item
          padding 7px 10px 10px
          display flex
          overflow hidden
          flex-flow row wrap
          li
            width 33.3%
            .cate-item-wrapper
              .cate-item-img
                width 100%
                img
                  width 5rem
                  height 5rem
              span
                display inline-block
                font-size 14px
                color #333

</style>
