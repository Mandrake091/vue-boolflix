<template>
<section> 
    <button @click="mySearch">ciao</button>
    <app-loader v-if="loading"/>
   
    <div class="row w-75 justify-content-center py-5 m-auto">
        <div class="col-12 col-sm-4 col-md-3 col-lg-2 p-0"
        v-for="(album, index) in searchedMovies" :key="index">
        <app-card :item="album"/>
        </div>
    </div>
  
</section>
</template>

<script>
import store from '../store.js';
import axios from 'axios';
import AppCard from './AppCard.vue'
import AppLoader from './AppLoader.vue';


export default {
    name: "AppGrid",
    components: { AppCard, AppLoader },
    data(){
        return {
            lastPopular:[],
            api:'https://api.themoviedb.org/3/search/movie?api_key=6853d87823c5e52e6b967b2482fca241&language=it-IT&query=',
            apiKey:'6853d87823c5e52e6b967b2482fca241',
            apiSearch:'&language=it-IT&query=',
            apiLastPopular:'https://api.themoviedb.org/3/movie/popular?api_key=6853d87823c5e52e6b967b2482fca241&language=it-IT&page=1',
            loading:false,
            searchedMovies:[],
            authors:[],
            searchText:"",
        }
    },
    methods:{
        mySearch(text){
            this.loading=true
        setTimeout(()=>{
            axios.get(this.api + store.state.search).then((res)=>{
            this.searchedMovies = res.data.results;
            console.log(this.albumList)
            console.log(this.authors)
        }).catch((error) => {
            console.log(error)
        })
               this.searchText = text; 
               this.loading=false
            },1000)
        },
        myfind(){
            console.log(store.state.search)
            return store.state.searchText
        }
    },
       computed:{
       },
    created(){
        this.loading = true;
        setTimeout(()=>{
            this.loading = false,
            axios.get(this.apiLastPopular).then((res)=>{
            this.lastPopular = res.data.results;
            console.log(this.albumList)
            console.log(this.genre)
            console.log(this.authors)
        }).catch((error) => {
            console.log(error)
        }) 
        },2000)
    },    
}
</script>

<style lang="scss">


.row{
    column-gap: 20px;
    row-gap: 20px;
}

</style>