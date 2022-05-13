<template>
  <div id="app">
    <header>
      <app-header @performSearch="search" />
    </header>
    <main>
      <app-popular :popular="popular" title="popular" />
      <div class="container">
        <div class="row justify-content-around align-items-start pt-3 m-auto">
          <app-select :genre="genre" @myGenre="genreId" />
          <app-movies :movies="filteredMovieList" title="Movie" />
          <app-series :series="filteredSeriesList" title="Series" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import AppMovies from "./components/AppMovies.vue";
import AppSeries from "./components/AppSeries.vue";
import AppHeader from "./components/AppHeader.vue";
import AppPopular from "./components/AppPopular.vue";
import AppSelect from "./components/AppSelect.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppSeries,
    AppMovies,
    AppPopular,
    AppSelect,
  },
  data() {
    return {
      apiKey: "6853d87823c5e52e6b967b2482fca241",
      apiPath: "https://api.themoviedb.org/3/",
      apiTypeMovie: "movie/",
      apiTypeTv: "tv",
      apiTypePopular: "popular",
      apiSearch: "search/",
      apiLanguageIt: "&language=it-IT",
      movies: [],
      series: [],
      popular: [],
      genre: [],
      genereId: "",
    };
  },
  computed: {
    filteredMovieList() {
      console.log(this.movies);
      if (this.genereId === "") {
        return this.movies;
      } else {
        return this.movies.filter((el) => el.genre_ids.includes(this.genereId));
      }
    },
    filteredSeriesList() {
      console.log(this.movies);
      if (this.genereId === "") {
        return this.series;
      } else {
        return this.series.filter((el) => el.genre_ids.includes(this.genereId));
      }
    },
  },
  methods: {
    getSeries(queryParams) {
      axios
        .get(this.apiPath + this.apiSearch + "tv", queryParams)
        .then((res) => {
          console.log(res.data.results);
          this.series = res.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getMovies(queryParams) {
      axios
        .get(this.apiPath + this.apiSearch + "movie", queryParams)
        .then((res) => {
          console.log(res.data.results);
          this.movies = res.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    search(text) {
      const queryParams = {
        params: {
          api_key: this.apiKey,
          query: text,
          language: "it-IT",
        },
      };
      this.getMovies(queryParams);
      this.getSeries(queryParams);
    },
    genreId(txt) {
      this.genereId = txt;
      console.log(txt);
    },
  },
  mounted() {
    axios
      .get(
        this.apiPath +
          this.apiTypeMovie +
          this.apiTypePopular +
          "?api_key=" +
          this.apiKey +
          this.apiLanguageIt
      )
      .then((res) => {
        console.log(this.popular);
        this.popular = res.data.results;
      })
      .catch((error) => {
        console.log(error);
      }),
      axios
        .get(
          this.apiPath +
            "genre/" +
            this.apiTypeMovie +
            "list?api_key=" +
            this.apiKey +
            this.apiLanguageIt
        )
        .then((res) => {
          this.genre = res.data.genres;
          console.log(this.genre);
        })
        .catch((error) => {
          console.log(error);
        });
  },
};
</script>

<style lang="scss">
@import "./style/generals.scss";

#app {
  background-color: $bg-main;
}
main {
  height: calc(100vh - 80px);
}
</style>
