<template>
  <div>
    <h2>Выбери фильм на свой вкус</h2>
    <films-list :films="films" />
  </div>
</template>

<script>
import films from "../mocks/films";
import FilmsList from "../components/v-films-list.vue";

export default {
  components: {
    FilmsList,
  },
  data() {
    return {
      films,
    };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 40px;
  color: #ffffff;
  margin-bottom: 30px;
}
</style>