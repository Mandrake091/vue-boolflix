<template>
  <section>
    <app-loader v-if="loading" />
    <div class="container">
      <div class="row">
        <h3 class="">Popular</h3>
      </div>
    </div>

    <carousel
      paginationColor="#E50914"
      paginationPosition="bottom-overlay"
      :speed="2000"
      :autoplay="true"
      :autoplayTimeout="5000"
      :per-page="6"
      class=""
    >
      <slide class="text-center" v-for="item in popular" :key="item.id">
        <div class="card m-auto" style="width: 8rem">
          <img
            :src="'https://image.tmdb.org/t/p/w500/' + item.poster_path"
            alt=""
          />
          <div
            class="card-body d-flex flex-column justify-content-between pb-0"
          >
            <p
              class="card-text d-flex align-items-center justify-content-center m-0"
            >
              <country-flag
                :country="
                  item.original_language === 'en'
                    ? (item.original_language = 'it')
                    : item.original_language
                "
                size="small"
              />
            </p>

            <p class="text-warning m-0 m-2">
              <i
                v-for="index in voteNumber(item.vote_average)"
                :key="index"
                class="fa-solid fa-star"
              ></i>
            </p>
            <div class="card_description">
              <p>
                <em><strong>Trama: </strong></em>
                {{ item.overview }}
              </p>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </section>
</template>

<script>
import store from "../store.js";
import axios from "axios";
import CountryFlag from "vue-country-flag";
import { Carousel, Slide } from "vue-carousel";
import AppLoader from "./AppLoader.vue";

export default {
  name: "AppPopular",
  props: ["popular"],
  components: { AppLoader, Carousel, Slide, CountryFlag },
  data() {
    return {
      lastPopular: [],
      api: "https://api.themoviedb.org/3/search/movie?api_key=6853d87823c5e52e6b967b2482fca241&language=it-IT&query=",
      apiKey: "6853d87823c5e52e6b967b2482fca241",
      apiSearch: "&language=it-IT&query=",
      apiLastPopular:
        "https://api.themoviedb.org/3/movie/popular?api_key=6853d87823c5e52e6b967b2482fca241&language=it-IT&page=1",
      loading: false,
      searchedMovies: [],
      authors: [],
      searchText: "",
    };
  },
  methods: {
    mySearch(text) {
      this.loading = true;
      setTimeout(() => {
        axios
          .get(this.api + store.state.search)
          .then((res) => {
            this.searchedMovies = res.data.results;
            console.log(this.albumList);
            console.log(this.authors);
          })
          .catch((error) => {
            console.log(error);
          });
        this.searchText = text;
        this.loading = false;
      }, 1000);
    },
    myfind() {
      console.log(store.state.search);
      return store.state.searchText;
    },
    voteNumber(number) {
      return Math.round(number / 2);
    },
  },
  computed: {},
  created() {
    this.loading = true;
    setTimeout(() => {
      (this.loading = false),
        axios
          .get(this.apiLastPopular)
          .then((res) => {
            this.lastPopular = res.data.results;
            console.log(this.albumList);
            console.log(this.genre);
            console.log(this.authors);
          })
          .catch((error) => {
            console.log(error);
          });
    }, 2000);
  },
};
</script>

<style lang="scss" scoped>
h3 {
  color: rgb(69, 69, 69);
  text-shadow: (1px 1px 5px rgba(0, 0, 0, 0.534));
}
.card {
  min-height: 200px;
  font-size: 0.8em;

  background: #56565693;
  filter: brightness(50%);
  position: relative;
  z-index: 0;
  cursor: pointer;
  filter: drop-shadow(0 3px 5px rgb(0, 0, 0));
  color: antiquewhite;
  &:hover .card_description {
    opacity: 0.8;
  }
}

.VueCarousel-slide {
  cursor: pointer;
  &:hover .card_description {
    opacity: 0.8;
  }
}
.card_description {
  -webkit-transition: opacity 0.5s ease-in-out;
  -moz-transition: opacity 0.5s ease-in-out;
  -ms-transition: opacity 0.5s ease-in-out;
  -o-transition: opacity 0.5s ease-in-out;
  transition: opacity 0.5s ease-in-out;
  opacity: 0;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.822);
  color: rgb(211, 211, 211);
  font-size: 0.7rem;
  padding: 0.7rem;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 15;
  -webkit-box-orient: vertical;
}
img {
  height: 150px;
}
</style>
