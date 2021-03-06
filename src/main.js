import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueRouter from "vue-router";
import router from "./router/index";
import Simplert from "vue2-simplert-plugin";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/styles/main.scss";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Simplert);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  el: "#app",
  router,
});
