import Vue from "vue";
import Router from "vue-router";
import Layout from "../components/Layout.vue";
import Mains from "../components/Mains.vue";
import User from "../components/User.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Layout",
      component: Layout,
      children: [
        {
          path: "/",
          name: "Mains",
          component: Mains
        }
      ]
    },
    {
      path: "/user",
      name: "User",
      component: User
    }
  ]
});
