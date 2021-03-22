import Vue from "vue";
import Vuex from "vuex";
import * as axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    errorStatus: false
  },
  mutations: {
    errorStatus(state, data) {
      state.errorStatus = data;
    }
  },
  actions: {
    async getVmData(context, params) {
      const config = {
        url: `${process.env.VUE_APP_API_URL}/scan/`,
        params,
        method: "GET"
      };

      try {
        const { data } = await axios(config);
        context.commit("errorStatus", false);
        return data;
      } catch (error) {
        context.commit("errorStatus", true);
        throw error;
      }
    },
    async showQr(context, data) {
      const config = {
        url: `${process.env.VUE_APP_PAYMENT_URL}/payment/touchless/show-qr`,
        data,
        method: "POST"
      };

      try {
        const { data } = await axios(config);
        context.commit("errorStatus", false);
        return data;
      } catch (error) {
        context.commit("errorStatus", true);
        throw error;
      }
    }
  },
  modules: {}
});
