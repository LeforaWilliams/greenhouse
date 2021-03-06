import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { sync } from "vuex-router-sync";
import store from "./store/store";

// C O M P O N E N T S
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

Vue.config.productionTip = false;

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
