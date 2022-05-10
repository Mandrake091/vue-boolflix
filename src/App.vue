<template>
  <div id="app">
    <app-header/>
    <app-grid/>
  </div>
    

</template>

<script>
import AppGrid from './components/AppGrid.vue'
import AppHeader from './components/AppHeader.vue'


export default {
  name: 'App',
  components: {
    AppHeader,
    AppGrid,
  }
}
</script>

<style lang="scss">
@import "./style/generals.scss";

#app{
  background-color: $bg-main;
}

</style>
