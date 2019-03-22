import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

// C O M P O N E N T S
import Register from "./views/Register";
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
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
