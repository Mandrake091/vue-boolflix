<template>
<section> 
    <app-loader v-if="loading"/>
    
    <carousel paginationPosition="bottom-overlay" :speed="1500" :centerMode="true" :autoplay="true" :autoplayTimeout="5000" :per-page="4" class="m-auto">
        <slide class="text-center" v-for="item in popular" :key="item.id">
        <div class="card m-auto" style="width: 10rem;">
  <img class="h-25" :src="'https://image.tmdb.org/t/p/w500/'+ item.poster_path" alt="">
    <div class="card-body d-flex flex-column justify-content-between">
    <p class="card-text">{{item.title}}</p>
       <p class="card-text">{{item.vote_average}}</p>

  </div>
</div>
             
          {{item.title ? item.title : item.name}}
           {{item.original_language}}
           {{item.original_title ? item.original_title : item.original_name}}
           {{item.vote_average}}
       
        </slide>
    </carousel>
     
        
</section>
</template>

<script>
import store from '../store.js';
import axios from 'axios';
import { Carousel, Slide } from 'vue-carousel';

import AppLoader from './AppLoader.vue';

export default {
    name: "AppPopular",
    props:['popular'],
    components: { AppLoader, Carousel, Slide },
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
h1{
    color: antiquewhite;
}
.card{
    min-height: 400px;
    }



</style>