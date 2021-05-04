import VueRouter from "vue-router";

import MainPage from "../pages/v-main-page.vue";
import allFilms from "../pages/v-all-films-page.vue";
import filmPage from "../pages/v-film-page.vue";
import filmLayout from "../pages/v-film-layout.vue";
import NotFound from "../pages/NotFound.vue";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "MainPage",
      component: MainPage,
    },

    {
      path: "/allFilms",
      name: "filmLayout",
      component: filmLayout,
      children: [
        {
          path: "",
          name: "allFilms",
          component: allFilms,
        },
        { path: ":id/*", redirect: "/allFilms" },
        {
          path: ":id",
          name: "filmPage",
          component: filmPage,
          beforeEnter: (to, from, next) => {
            if (localStorage.getItem("auth")) {
              next();
            } else {
              next({ name: "allFilms" });
            }
          },
        },
      ],
    },

    {
      path: "*",
      name: "notFound",
      component: NotFound,
      // redirect: { name: "notFound" },
    },
  ],
});
