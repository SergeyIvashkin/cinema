<template>
  <div>
    <!-- <router-link></router-link> -->
    <div class="header">
      <div class="container">
        <div class="header__title">
          <div class="mr-5 header__cinema">Кинотеатр</div>
          <div class="header__films">Фильмы</div>
        </div>

        <div class="header__door">
          <b-button
            @click="changeAuthorization"
            variant="outline-primary"
            size="lg"
          >
            {{ door ? "Выйти" : "Войти" }}</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      door: "false",
    };
  },
  methods: {
    changeAuthorization() {
      if (this.door) {
        localStorage.removeItem("auth");
        this.$router.push({ name: "MainPage" });
      } else {
        this.door = true;
        localStorage.setItem("auth", "true");
      }
    },
  },
  created() {
    this.door = localStorage.getItem("auth") !== null;
  },
};
</script>



<style lang="scss" scoped>
.header {
  background-color: #0c0c0c;
  .container {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  &__title {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  &__cinema {
    color: #eb5804;
    font-size: 30px;
  }
  &__films {
    text-decoration: none;
    font-weight: 700;
    color: #ffffff;
    font-size: 25px;
  }
}
</style>