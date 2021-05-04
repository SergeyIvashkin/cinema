<template >
  <div class="container">
    <b-button
      v-if="scrollTop"
      class="back"
      variant="outline-primary"
      @click="$router.go(-1)"
      >back</b-button
    >
    <div class="film-page" ref="scrollTop">
      <h1>{{ film.title }}</h1>
      <img :src="film.img" alt="" />
      <div class="section">
        <p class="section__title">Немного о сюжете:</p>
        <p class="section__text">{{ film.description }}</p>
      </div>
      <div class="section">
        <p class="section__title">Актерский состав:</p>
        <p class="section__text">{{ film.actors.join(", ") }}</p>
      </div>
      <div class="section">
        <p class="section__title">Режисеры:</p>
        <p class="section__text">{{ film.directors.join(",") }}</p>
      </div>
    </div>
  </div>
</template>



<script>
import films from "../mocks/films";

export default {
  data() {
    return {
      film: null,
      scrollTop: false,
    };
  },
  methods: {
    handleScroll() {
      let { top } = this.$refs.scrollTop.getBoundingClientRect();
      this.scrollTop = top < 0;
    },
  },
  created() {
    const film = films.find((item) => item.id == this.$route.params.id);
    this.film = film;
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>


<style lang="scss" scoped>
.back {
  position: fixed;
  top: 0;
}
.film-page {
  text-align: left;
}
h1 {
  color: #ffffff;
  margin-bottom: 30px;
  padding-bottom: 15px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    background: linear-gradient(90deg, #eb5804 0%, rgba(0, 0, 0, 0) 90%);
  }
}
img {
  object-fit: cover;
  border-radius: 10px;
  width: 100%;
  height: 600px;
  margin-bottom: 30px;
}
.section {
  &__title {
    color: #eb5804;
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 10px;
  }
  &__text {
    color: #ffffff;
    font-size: 18px;
    line-height: 30px;
  }
}
</style>