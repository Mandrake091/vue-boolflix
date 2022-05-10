<template>
<section> 
    <app-loader v-if="loading"/>
    <!-- <app-select v-if="!loading" @performSearch="mySearch" :genreList="genre" :authorsList="authors"/> -->
    <div class="row w-75 justify-content-center py-5 m-auto">
        <div class="col-12 col-sm-4 col-md-3 col-lg-2 p-0"
        v-for="(album, index) in albumList" :key="index">
        <app-card :item="album"/>
      
        </div>
    </div>
  
</section>
</template>

<script>
import axios from 'axios';

import AppCard from './AppCard.vue'
import AppLoader from './AppLoader.vue';


export default {
    name: "AppGrid",
    components: { AppCard, AppLoader },
    data(){
        return {
            albumList:[],
            api:'https://api.themoviedb.org/3/search/movie?api_key=6853d87823c5e52e6b967b2482fca241&language=it-IT&query=',
            apiKey:'6853d87823c5e52e6b967b2482fca241',
            apiSearch:'&language=it-IT&query=',
            loading:false,
            genre:[],
            authors:[],
            searchText:"shutter",
        }
    },

    methods:{
        mySearch(text){
            this.loading=true
        setTimeout(()=>{
               this.searchText = text; 
               this.loading=false
            },1000)
        }  
    },
       computed:{
       },
    created(){
        this.loading = true;
        setTimeout(()=>{
            this.loading = false
            axios.get(this.api + this.searchText).then((res)=>{
            this.albumList = res.data.results;
            // this.albumList.forEach((el)=>{
            //     if(!this.genre.includes(el.genre)){
            //         this.genre.push(el.genre)
            //     }else if (!this.authors.includes(el.author)){
            //         this.authors.push(el.author)
            //     } 
            // })
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
section{
    height: calc(100vh - 80px);
}


.row{
    column-gap: 20px;
    row-gap: 20px;
}

</style>