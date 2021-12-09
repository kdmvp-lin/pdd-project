<template>
    <div class="wrapper" >

    <div v-for="item in goodsInfo" :key="item.id">
      <div class="top">
        <span class="price">{{item.top_pr}}</span>
        <span class="yuanjia">{{item.top_yuan}}</span>
        <span class="pindan">{{item.top_pin}}</span>
        <span class="desc">{{item.top_desc}}</span>
        <span class="tuihuo">退货包运费</span>
      </div>
      <div class="box">
        <span>顺丰包邮 · 七天退货 · 48小时发货 · 假一赔十</span>
        <span class="arrow"> > </span>
      </div>
      <div class="box2">
        <span class="fontcolor">{{item.box2}}</span>
        <span class="arrow2"> 查看更多> </span>
      </div>

      <div class="pindanp" v-for="(item2,index2) in item.people" :key="index2">
        <div class="left_img">
          <img class="people_img" :src="item2.img">
        </div>
        <span class="name">{{item2.name}}</span>
        <span class="gopin">去拼单</span>
        <span class="num">还差{{item2.num}}人拼成</span>
      </div>

      <div class="box2">
        <span class="fontcolor">精选晒图（29）</span>
        <span class="arrow2"> 查看更多> </span>
      </div>
      <!--      不显示-->
      <div class="shaitu " >
        <div v-for="(item3,index3) in item.shaitu" :key="index3" class="shaitu_imgdiv">
          <img class="shaitu_img" :src="item3.url">
        </div>
        <div class="img_num">{{item.shaitu_num}}</div>
      </div>
      <div style="clear:both;"></div>
      <div class="box2">
        <span class="fontcolor">商品评价（1175）</span>
        <span class="arrow2"> 查看更多> </span>
      </div>
      <div class="pinglun">
        <div class="pinlun_top">
          <div class="good green">{{item.pinglun_green}}</div>
          <div class="good">{{item.pinglun_two}}</div>
          <div class="good">{{item.pinglun_th}}</div>
        </div>
        <div class="pinglun_peo" v-for="(item4,index4) in pinglun_pp" :key="index4" >
          <div class="pinglun_peoimg">
            <img class="pinglun_peoimgimg" :src="item4.img">
            <span class="name">{{item4.name}}</span>
          </div>
          <div class="xinghao">{{item4.xinghao}}</div>
          <div class="words">{{item4.words}}</div>
        </div>
      </div>
      <!--      不显示-->
      <div class="goodsmiaoshu" >
        <div class="spxq">商品详情</div>
        <div v-for="(item5,index5) in item.imgurl" :key="index5">
          <img class="goods-img" :src="item5.src">
        </div>
      </div>
      <div class="kong"></div>
    </div>
    </div>

</template>
<script>
    export default {
        name: "GoodsMiddle",
      props:{
        goodsInfo:Array,
        pinglun_pp:Array,
        people:Array,
        shaitu:Array,
        imgurl:Array,

      },

    }
</script>

<style scoped lang="stylus">
  .wrapper
    padding 1rem
    .top
      height 0
      padding-bottom 40%

      overflow hidden
      position relative
      margin-top .5rem

      .price

        font-size 1.5rem
        color #e02e24
        float left
      .yuanjia
        float left
        font-size .7rem
        color #cccccc
        text-decoration line-through
        margin-top .2rem
      .pindan
        float right
        font-size .8rem
      .desc

        margin-top 1.6
        font-weight bold
        display inline-block
      .tuihuo
        position absolute
        right 4.3rem
        top 3rem
        background-color #25b513
        color white
        font-size .8rem
        padding-left 0.3rem
        padding-right 0.3rem
    .box
      height 0
      overflow hidden
      padding-bottom 8%
      border-bottom .07rem solid #eeeeee
      font-size 1rem
      color #9c9c9c
      margin-top .3rem
      .arrow
        float right
        font-size .7rem
        color #9c9c9c
    .box2
      height 0
      overflow hidden
      padding-bottom 8%
      font-size 1rem
      margin-top .3rem
      .arrow2
        float right
        font-size .7rem
        color #9c9c9c
      .fontcolor
        color black
    .pindanp
      padding-bottom 1rem
      .left_img
        display inline-block
        margin-left 0.5rem
        .people_img
          border-radius  50%
          width 1.8rem
          height 1.8rem
      .name
        padding-left .5rem
      .num
        float right
        padding-right .5rem
      .gopin
        border-radius  10%
        float right
        width 4rem
        height 1.8rem
        background-color #e02e24
        text-align center
        color white
        padding-top 0.3rem

    .pinglun
      .pinlun_top
        padding-bottom 1rem
        .good
          height 2rem
          width 6rem
          text-align center
          font-size .7rem
          font-weight bold
          margin .5rem 0 1.5
          float left
          background-color #fceae9
          line-height 2rem
          margin-left 1rem
          border-radius .4rem
        .green
          background-color #daf8cd
    .kong
      height 4rem
      padding-top 5rem
    .pinglun_peo
      padding-top 2rem
      .pinglun_peoimg
        display inline-block
        margin-left 0.5rem
        .pinglun_peoimgimg
          border-radius  50%
          width 1.5rem
          height 1.5rem
      .xinghao
        color #9c9c9c
        font-size .3rem
    .goodsmiaoshu
      margin-top 1rem
      border-top .6rem solid #eeeeee
      .spxq
        padding-top .5rem
        padding-left .5rem
        padding-bottom .5rem
      .goods-img
        width 100%
        margin-top -5px;
    .shaitu
      margin-top 1.5rem
      .shaitu_imgdiv
        display inline-block
        width 24%
        height 5rem
        margin-left .1rem
        margin-right .1rem
        .shaitu_img
          width 100%
          height 100%

      .img_num
        z-index 20
        background-color #323232
        color white
        float right
        display inline-block
        font-size .01rem
        margin-right .4rem
        position relative
        bottom 1.5rem
        opacity 70%

/*test3*/
</style>
