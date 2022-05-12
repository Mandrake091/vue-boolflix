<template>
  <div class="col-5 d-flex flex-wrap justify-content-center">
    <h3 class="w-100 text-center m-3">Series</h3>
    <div
      v-for="item in series"
      :key="item.id"
      class="card text-center"
      style="width: 9rem"
    >
      <app-loader v-if="loading" />

      <img v-if ="item.poster_path !== null" 
        :src="'https://image.tmdb.org/t/p/w500/' + item.poster_path"
        class="card-img-top h-50"
        alt=""
      />
      <img class="not-image" v-else src="../assets/images/notfound.jpg" alt="">
      <div class="card-body">
        <h6 class="card-title">{{ item.name }}</h6>
      </div>
      <ul class="list-group list-group-flush border-0">
        <li class="p-0">
          <country-flag
            :country="
              item.original_language === 'en'
                ? (item.original_language = 'it')
                : item.original_language
            "
            size="normal"
          />
        </li>
        <p class="text-warning m-0 m-2">
          <i
            v-for="index in voteNumber(item.vote_average)"
            :key="index"
            class="fa-solid fa-star"
          ></i>
        </p>
      </ul>
      <div class="card_description">
        <p>
          <em><strong>Trama: </strong></em>
          {{ item.overview }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store.js";
import axios from "axios";
import AppLoader from "./AppLoader.vue";
import CountryFlag from "vue-country-flag";

export default {
  name: "AppGrid",
  props: ["series", "movies", "popular"],
  components: { AppLoader, CountryFlag },
  data() {
    return {
      loading: false,
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
.not-image{
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
.col-5 {
  border-radius: 20px;
  box-shadow: 0px 0px 20px #E50914,
    inset 0px 0px 20px #E50914;
  row-gap: 20px;
  column-gap: 20px;
}
.card {
  background: #56565693;
  filter: brightness(50%);
  position: relative;
  z-index: 0;
  cursor: pointer;
  height: 300px;
  max-height: 500px;
  filter: drop-shadow(0 3px 5px rgb(0, 0, 0));
  color: white;
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
  font-size: 0.8rem;
  padding: 0.7rem;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 15;
  -webkit-box-orient: vertical;

}
.card-body {
  margin: auto;
  filter: drop-shadow(0 3px 5px black);
  box-shadow: inset 0px 0px 20px 5px rgba(0, 0, 0, 0.393);
  background: #330003b9;
  border-radius: 0 0 20px 20px;
  max-height: 80px;
  text-overflow: ellipsis;
  border: 1px solid #000000;
}
.list-group-item {
  background: #56565693;
}
li {
  list-style-type: none;
}
h6 {
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
