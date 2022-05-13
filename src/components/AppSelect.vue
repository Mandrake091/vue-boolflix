<template>
  <select
    class="form-select w-75 m-5"
    aria-label="Default select example"
    v-model="inputFilter"
    @change="setGenre"
  >
    <option value="">Seleziona Genere:</option>
    <option :value="genere.id" v-for="genere in genre" :key="genere.id">
      {{ genere.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "AppSelect",
  data() {
    return {
      inputFilter: "",
    }
  },
  props: ["genre"],
  methods: {
    setGenre() {
      this.$emit("myGenre", this.inputFilter);
    },
  },
};
</script>
<style>
</style>
