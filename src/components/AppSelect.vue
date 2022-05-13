<template>
  <select
    class="form-select w-25 my-5"
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
    };
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
.form-select {
  margin: 0 600px;
}
</style>
