<template>
  <div id="app">
    <header>
      <app-header @performSearch="search"/>
    </header>
    <main>
        <h1>Popular</h1>
        <app-popular :popular="popular" title="popular"/>
        <h1>Film</h1>
       <app-grid :movies="movies" title="Movies"/> 
        <h1>Serie</h1>
      <app-grid :series="series" title="Series"/> 
       
     
    </main>
  </div>
</template>

<script>
import AppGrid from './components/AppGrid.vue'
import AppHeader from './components/AppHeader.vue'
import axios from 'axios';
import AppPopular from './components/AppPopular.vue';
export default {
  name: 'App',
  components: {
    AppHeader,
    AppGrid,
    AppPopular,
  }, 
  data(){
    return {
      apiKey:'6853d87823c5e52e6b967b2482fca241',
      apiPath:'https://api.themoviedb.org/3/',
      apiTypeMovie:'movie/',
      apiTypeTv:'tv',
      apiTypePopular:'popular',
      apiSearch:'search/',
      apiLanguageIt:'&language=it-IT',
      movies:[],
      series:[],
      popular:[],
    }
  },
  methods:{
    getSeries(queryParams){
      axios.get(this.apiPath + this.apiSearch + 'tv', queryParams).then((res)=>{
        console.log(res.data.results)
        this.series = res.data.results
      }).catch((error)=>{
        console.log(error)
      })
    },
    getMovies(queryParams){
      axios.get(this.apiPath + this.apiSearch + 'movie', queryParams).then((res)=>{
        console.log(res.data.results)
        this.movies = res.data.results
      }).catch((error)=>{
        console.log(error)
      })
    },
    search(text){
       const queryParams = {params:{
        api_key: this.apiKey,
        query:text
      }}
      console.log(text)
      this.getMovies(queryParams)
      this.getSeries(queryParams)
    }
  },
   mounted(){
      axios.get(this.apiPath + this.apiTypeMovie + this.apiTypePopular + '?api_key=' + this.apiKey + this.apiLanguageIt).then((res)=>{
        console.log(this.popular)
        this.popular = res.data.results
      }).catch((error)=>{
        console.log(error)
      })
  },

}
</script>

<style lang="scss">
@import "./style/generals.scss";

#app{
  background-color: $bg-main;
}
</style>
