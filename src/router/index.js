import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Catalog from "../views/Catalog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "AppLayoutHome"
    }
  },
  {
    path: "/catalog/:id",
    name: "Detail Vending Machine",
    component: Catalog,
    meta: {
      layout: "AppLayoutCatalog"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
