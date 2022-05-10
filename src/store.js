import Vue from "vue";

const store = {
    state: Vue.observable({
        search: '',
        species: []
    }),
    setSearch(text) {
        this.state.search = text;
        console.log(text)
    },
    setSpecies(species) {
        this.state.species = species;
    }
}
export default store;