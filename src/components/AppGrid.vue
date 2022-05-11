<template>
<section> 
    <app-loader v-if="loading"/>
    <div class="container p-0">
         <h1 class="p-0">Serie</h1>
       <div class="row flex-nowrap justify-content-around">
           <div class="col-6 d-flex flex-wrap justify-content-around">
             <div v-for="item in series" :key="item.id" class="card text-center" style="width: 8rem;">
  <img :src="'https://image.tmdb.org/t/p/w500/'+ item.poster_path" class="card-img-top h-50" alt="...">
  <div class="card-body ">
    <h6 class="card-title">{{item.name}}</h6>
  </div>
  <ul class="list-group list-group-flush  border-0">
    <li class="list-group-item m-3 p-0">
        <country-flag :country='item.original_language === "en" ? item.original_language = "it" : item.original_language' size='small'/></li>
    <li class="list-group-item">Voto: {{item.vote_average}}</li>
  </ul>

<!-- 
             <img :src="'https://image.tmdb.org/t/p/w500/'+ item.poster_path" alt="">
           {{item.title ? item.title : item.name}}
           {{item.original_language}}
           {{item.original_title ? item.original_title : item.original_name}}
           {{item.vote_average}} -->
         </div>
       
           </div>


           <div class="col-6">
<h1>film</h1>
         <div class="text-white" v-for="item in movies" :key="item.id">
             <img :src="'https://image.tmdb.org/t/p/w500/'+ item.poster_path" alt="">
           {{item.title ? item.title : item.name}}
           {{item.original_language}}
           {{item.original_title ? item.original_title : item.original_name}}
           {{item.vote_average}}
         </div>
        </div>
    </div>  
    </div>
</section>
</template>

<script>
import store from '../store.js';
import axios from 'axios';

import AppLoader from './AppLoader.vue';
import CountryFlag from 'vue-country-flag'

export default {
    name: "AppGrid",
    props:['series','movies','popular'],
    components: { AppLoader , CountryFlag },
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

<style lang="scss" scoped>
h1{
    color: antiquewhite;
}
.col-6{
    row-gap: 20px;
    column-gap: 20px;
}
.card{
    filter: drop-shadow(0 3px 5px rgb(0, 0, 0));
    color: antiquewhite;
}
.card-body{
    filter: drop-shadow(0 3px 5px black);
     box-shadow: inset 0px 0px 20px 5px rgba(0, 0, 0, 0.393);
    background: #68050a;   
    border-radius: 0 0 30px 30px; 
}
   

</style>