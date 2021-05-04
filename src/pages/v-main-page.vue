<template>
  <div class="main-page">
    <h1>Онлайн кинотеатр</h1>
    <router-link :to="{ name: 'allFilms' }">
      <b-button variant="outline-primary"> Перейти к фильмам</b-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MainPage",
};
</script>



<style lang="scss" scoped>
.main-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  h1 {
    color: #ffffff;
    font-size: 70px;
    margin-bottom: 20px;
  }
}
</style>