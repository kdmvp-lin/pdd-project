<template>
  <div>
    <home-header></home-header>
    <home-footer></home-footer>
    <home-swipper></home-swipper>
  </div>

</template>


<script>
  import HomeHeader from "./components/HomeHeader";
  import HomeFooter from "./components/HomeFooter";
  import HomeSwipper from "./components/HomeSwipper";
    export default {
        name: "Home",
        components:{
          HomeHeader,
          HomeFooter,
          HomeSwipper
        }
    }
</script>

<style scoped>

</style>
