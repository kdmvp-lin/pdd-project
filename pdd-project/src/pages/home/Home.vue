<template>
  <div>
    <home-header></home-header>
    <home-footer></home-footer>
    <home-swipper></home-swipper>
    <Home-icons></Home-icons>
  </div>

</template>


<script>
  import HomeHeader from "./components/HomeHeader";
  import HomeFooter from "./components/HomeFooter";
  import HomeSwipper from "./components/HomeSwipper";
  import HomeIcons from "./components/HomeIcons";
    export default {
        name: "Home",
        components:{
          HomeHeader,
          HomeFooter,
          HomeSwipper,
          HomeIcons
        }
    }
</script>

<style scoped >

</style>
