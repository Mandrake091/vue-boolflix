<template>
    <header class="d-flex justify-content-between align-items-center px-3">
         <img class="h-50" src="../assets/images/Logonetflix.png" alt="">  
         <app-input/>
    </header>
</template>

<script>
import AppInput from './AppInput.vue'
export default {
    components: { AppInput },
    name: "AppHeader"
}
</script>

<style lang="scss">
@import "../style/generals.scss";

img{
    height: 100%
}

header{
    height: 80px;
    background-color: $bg-navbar;
    box-shadow: 5px 10px 20px #0000006b;
}
</style>