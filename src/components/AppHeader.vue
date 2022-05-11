<template>
    <header class="container-fluid ">
        <div class="row align-items-center justify-content-between h-100">
            <div class="col-5">
                 <img class="" src="../assets/images/Logonetflix.png" alt="">  
            </div>
           <div class="col-5 col-md-3">
                <div class="input-group input-group-sm d-flex justify-content-end ">
  <input type="text" class="form-control" placeholder="Cerca per titolo" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="search" @keyup.enter="$emit('performSearch',search)">
  <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="find">Cerca</button>
        </div>
        </div> 
</div>

    </header>
</template>
<script>


export default {
    components: {  },
    name: "AppHeader",
    data(){
        return{
            search:""
        } 
    },
     methods:{      
            find(){
            this.$emit('performSearch', this.search)
            this.search = ''
        }
    },
    computed:{

    }
}
</script>

<style lang="scss">
@import "../style/generals.scss";

img{
    height: 40px; 
}

header{
    height: 80px;
    background-color: $bg-navbar;
    box-shadow: 5px 10px 20px #0000006b;
}
</style>