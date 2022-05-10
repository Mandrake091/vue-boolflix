<template>
    <header class="d-flex justify-content-between align-items-center px-3">
         <img class="h-50" src="../assets/images/Logonetflix.png" alt="">  
         <div class="col-10 col-md-6 col-lg-4">
            <div class="input-group">
            <input type="text" class="form-control form-control-sm " placeholder="Search Movie" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="inputText">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="search">Search</button>
        </div>

        </div>
    </header>
</template>
<script>

import store from '../store.js';
export default {
    components: {  },
    name: "AppHeader",
    data(){
        return{
            inputText:""
        } 
    },
     methods:{      
        search(){
            store.setSearch(this.inputText)
        }
    },
    computed:{

    }
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