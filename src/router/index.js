import Vue from "vue";
import VueRouter from "vue-router";
import TouchlessHome from "../views/TouchlessHome.vue";
import VmNotFound from "../views/VmNotFound.vue";
import Success from "../views/Success.vue";
import Catalog from "../views/Catalog.vue";
import Checkout from "../views/Checkout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: TouchlessHome,
    meta: {
      layout: "AppLayoutHome",
      class: "home-layout"
    }
  },
  {
    path: "/success/:id",
    name: "Success",
    component: Success,
    meta: {
      layout: "AppLayoutDefault",
      class: "defaut-layout"
    }
  },
  {
    path: "/vm-not-found",
    name: "VM Not Found",
    component: VmNotFound,
    meta: {
      layout: "AppLayoutDefault",
      class: "defaut-layout"
    }
  },
  {
    path: "/catalog/:id",
    name: "Detail Vending Machine",
    component: Catalog,
    meta: {
      layout: "AppLayoutCatalog",
      class: "catalog-layout"
    }
  },
  {
    path: "/checkout/:id",
    name: "Detail Pesanan",
    component: Checkout,
    meta: {
      layout: "AppLayoutCatalog",
      class: "checkout-layout"
    }
  }
];

const router = new VueRouter({
  // mode: "history",
  routes
});

export default router;
