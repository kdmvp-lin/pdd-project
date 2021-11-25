<template>
    <div class="wrapper">
      <div class="top">
        <span class="price">￥3799</span>
        <span class="yuanjia">￥3999</span>
        <span class="pindan">已拼7612件</span>
        <span class="desc">华为荣耀50Pro 100W超级快充5G手机 1亿像素超清镜头高通骁龙778G</span>
        <span class="tuihuo">退货包运费</span>
      </div>
      <div class="box">
        <span>顺丰包邮 · 七天退货 · 48小时发货 · 假一赔十</span>
        <span class="arrow"> > </span>
      </div>
      <div class="box2">
        <span class="fontcolor">163人正在拼单,可直接参与</span>
        <span class="arrow2"> 查看更多> </span>
      </div>
      <div class="pindanp" v-for="item in people" :key="item.id">
        <div class="left_img">
          <img class="people_img" :src="item.img">
        </div>
        <span class="name">{{item.name}}</span>
        <span class="gopin">去拼单</span>
        <span class="num">还差{{item.num}}人拼成</span>

      </div>
      <div class="box2">
        <span class="fontcolor">商品评价（1175）</span>
        <span class="arrow2"> 查看更多> </span>
      </div>
      <div class="pinglun">
        <div class="pinlun_top">
          <div class="good green">正品（115）</div>
          <div class="good">系统流畅（158）</div>
          <div class="good">手机很好（141）</div>
        </div>
        <div class="pinglun_peo" v-for="item in pinglun_pp" :key="item.id">
          <div class="pinglun_peoimg">
            <img class="pinglun_peoimgimg" :src="item.img">
            <span class="name">{{item.name}}</span>
          </div>
          <div class="xinghao">{{item.xinghao}}</div>
          <div class="words">{{item.words}}</div>
        </div>
      </div>
      <div class="goodsmiaoshu">
        <div class="spxq">商品详情</div>
        <img class="goods-img" src="https://img-1.pddpic.com/mms-material-img/2021-08-11/e1e110da-5f8e-4692-b634-39d6a558b801.jpeg.a.jpeg?imageView2/2/w/1300/q/80">
        <img class="goods-img" src="https://img-1.pddpic.com/mms-material-img/2021-08-11/7b9b93da-72f9-46b1-aff2-116733b57cf4.jpeg.a.jpeg?imageView2/2/w/1300/q/80">
        <img class="goods-img" src="https://img-1.pddpic.com/mms-material-img/2021-08-11/d76f2b68-9b93-4953-b578-b02154f306ad.jpeg.a.jpeg?imageView2/2/w/1300/q/80">
        <img class="goods-img" src="https://img-1.pddpic.com/mms-material-img/2021-08-11/8de86ee1-367f-4719-bd52-b9cefddc8f79.jpeg.a.jpeg?imageView2/2/w/1300/q/80">
        <img class="goods-img" src="https://img-1.pddpic.com/mms-material-img/2021-08-11/21e01cbc-c435-4dd1-8485-66224b879693.jpeg.a.jpeg?imageView2/2/w/1300/q/80">
        <img class="goods-img" src="https://img-1.pddpic.com/mms-material-img/2021-08-11/b3d2fb2b-a10c-406f-9968-ae488da1a47d.jpeg.a.jpeg?imageView2/2/w/1300/q/80">
        <img class="goods-img" src="https://img-1.pddpic.com/mms-material-img/2021-08-11/bf15aa2b-fa55-47aa-8b7d-1ce0780ee0f0.jpeg.a.jpeg?imageView2/2/w/1300/q/80">
        <img class="goods-img" src="https://img-1.pddpic.com/mms-material-img/2021-08-11/d93b4616-9aac-4b3b-8799-f4660f585c4b.jpeg.a.jpeg?imageView2/2/w/1300/q/80">
        <img class="goods-img" src="https://img-1.pddpic.com/mms-material-img/2021-08-11/504103af-3050-490f-b1b9-80361ffe8ff5.jpeg.a.jpeg?imageView2/2/w/1300/q/80">
        <img class="goods-img" src="https://img-1.pddpic.com/mms-material-img/2021-08-11/b63d1361-89a0-484e-9353-9af38e0ff85a.jpeg.a.jpeg?imageView2/2/w/1300/q/80">
        <img class="goods-img" src="https://img-1.pddpic.com/mms-material-img/2021-08-11/7b2f4ccf-a36a-4784-80ce-eabd8aa67009.jpeg.a.jpeg?imageView2/2/w/1300/q/80">
        <img class="goods-img" src="https://img-1.pddpic.com/mms-material-img/2021-08-11/64ba9b96-4837-4471-b3f7-e650e07f9e69.jpeg.a.jpeg?imageView2/2/w/1300/q/80">
        <img class="goods-img" src="https://img-1.pddpic.com/mms-material-img/2021-08-11/3c4cb211-ac98-466e-9f2e-41f7b8aa67bd.jpeg.a.jpeg?imageView2/2/w/1300/q/80">

      </div>
      <div class="kong"></div>
    </div>

</template>
<script>
    export default {
        name: "GoodsMiddle",
      props:{
        people:Array,
        pinglun_pp:Array

      },
      data(){
          return{

          }
      }
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
/*test3*/
</style>
