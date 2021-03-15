import Vue from "vue";
import Vuex from "vuex";
import * as axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async getVmData(context, params) {
      const config = {
        url: `${process.env.VUE_APP_API_URL}/scan/`,
        params,
        method: "GET"
      };

      try {
        const { data } = await axios(config);

        return data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  },
  modules: {}
});
