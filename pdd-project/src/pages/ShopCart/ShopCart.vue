<template>
    <div>
      <shopcart-foot></shopcart-foot>
      <shopcart-content></shopcart-content>
    </div>
</template>

<script>
    import ShopcartFoot from "./componets/ShopcartFoot";
    import ShopcartContent from "./componets/ShopcartContent";
    export default {
        name: "ShopCart",
        components:{
          ShopcartFoot,
          ShopcartContent
        }
    }
</script>

<style scoped>

</style>
