<template>
  <div>
    <collection-content></collection-content>
    <collection-foot></collection-foot>
  </div>

</template>

<script>
    import CollectionContent from "./components/CollectionContent";
    import CollectionFoot from "./components/CollectionFoot";
    export default {
        name: "Collection",
      components: {
          CollectionFoot,
        CollectionContent
        }
    }
</script>

<style scoped>

</style>
