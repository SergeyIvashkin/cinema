<template>
  <div class="film-list container">
    <FilmCard
      class="film-card mb-5"
      v-for="film in films"
      :film="film"
      :key="film.id"
    />
  </div>
</template>

<script>
import FilmCard from "./v-film-card.vue";

export default {
  components: {
    FilmCard,
  },
  props: {
    films: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
</style>