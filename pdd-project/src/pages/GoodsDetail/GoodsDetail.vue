<template>
  <div>
    <goods-swiper></goods-swiper>
    <goods-footer></goods-footer>
    <goods-middle></goods-middle>
  </div>
</template>

<script>
  import GoodsSwiper from "./componets/GoodsSwiper";
  import GoodsFooter from "./componets/GoodsFooter";
  import GoodsMiddle from "./componets/GoodsMiddle";
    export default {
        name: "GoodsDetail",
        components:{
          GoodsMiddle,
          GoodsFooter,
          GoodsSwiper
        }
    }
</script>

<style scoped>

</style>
