<template>
  <div class="col-5 d-flex flex-wrap justify-content-center pb-5 mb-5">
    <h3 class="text-center m-3 w-100">Movies</h3>
    <div
      v-for="item in movies"
      :key="item.id"
      class="card text-center"
      style="width: 9rem"
    >
      <app-loader v-if="loading" />

      <img
        :src="'https://image.tmdb.org/t/p/w500/' + item.poster_path"
        class="card-img-top h-50"
        alt=""
      />
      <div class="card-body">
        <h6 class="card-title m-0">{{ item.title }}</h6>
      </div>
      <ul class="list-group list-group-flush border-0 text-decoration-none">
        <li class="list-group-item m-3 p-0">
          <country-flag
            :country="
              item.original_language === 'en'
                ? (item.original_language = 'it')
                : item.original_language
            "
            size="small"
          />
        </li>
        <p class="text-warning text-decoration-none m-0 m-2">
          <i
            v-for="index in voteNumber(item.vote_average)"
            :key="index"
            class="fa-solid fa-star"
          ></i>
        </p>
      </ul>
    </div>
  </div>
</template>

<script>
import store from "../store.js";
import axios from "axios";
import AppLoader from "./AppLoader.vue";
import CountryFlag from "vue-country-flag";

export default {
  name: "AppMovies",
  props: ["movies"],
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
  width: 100%;
  color: rgb(69, 69, 69);
  text-shadow: (1px 1px 5px rgba(0, 0, 0, 0.534));
}
.col-5 {
  border-radius: 20px;
  box-shadow: 0px 0px 20px rgba(179, 10, 10, 0.568),
    inset 0px 0px 20px rgba(179, 10, 10, 0.568);

  row-gap: 20px;
  column-gap: 20px;
}
.card {
  height: 380px;
  max-height: 500px;
  filter: drop-shadow(0 3px 5px rgb(0, 0, 0));
  color: antiquewhite;
}
.card-body {
  filter: drop-shadow(0 3px 5px black);
  box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.393);
  background: #330003b9;
  border-radius: 0 0 30px 30px;
}
</style>
