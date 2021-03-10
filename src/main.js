import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import VueCurrencyFilter from "vue-currency-filter";
import AppLayout from "@/layouts/AppLayout";

import "./assets/scss/main.scss";

Vue.component("AppLayout", AppLayout);
Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(VueCurrencyFilter, {
  symbol: "Rp",
  thousandsSeparator: ".",
  fractionCount: 0,
  fractionSeparator: ",",
  symbolPosition: "front",
  symbolSpacing: true,
  avoidEmptyDecimals: undefined
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
