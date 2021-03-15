import Vue from "vue";
import VueRouter from "vue-router";
import TouchlessHome from "../views/TouchlessHome.vue";
import Catalog from "../views/Catalog.vue";
import Checkout from "../views/Checkout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: TouchlessHome,
    meta: {
      layout: "AppLayoutHome"
    }
  }
  {
    path: "/catalog/:id",
    name: "Detail Vending Machine",
    component: Catalog,
    meta: {
      layout: "AppLayoutCatalog"
    }
  },
  {
    path: "/checkout/:id",
    name: "Detail Pesanan",
    component: Checkout,
    meta: {
      layout: "AppLayoutCatalog"
    }
  }
];

const router = new VueRouter({
  // mode: "history",
  routes
});

export default router;
