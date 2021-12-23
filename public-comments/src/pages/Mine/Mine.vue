<template>
    <div>
      <mine-top></mine-top>
      <mine-middle></mine-middle>
      <mine-goods></mine-goods>
      <mine-foot></mine-foot>
      <mine-bottom></mine-bottom>
    </div>
</template>

<script>
    import MineTop from "./componets/MineTop";
    import MineMiddle from "./componets/MineMiddle";
    import MineFoot from "./componets/MineFoot";
    import MineGoods from "./componets/MineGoods";
    import MineBottom from "./componets/MineBottom";
    export default {
        name: "Mine",
      components: {
        MineBottom,
        MineGoods,
          MineFoot,
        MineMiddle,
        MineTop
        }
    }
</script>

<style scoped>

</style>
