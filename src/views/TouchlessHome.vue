<template>
  <a-layout-content>
    <div class="touchless-loading" v-if="loading">
      <span class="loading-spin"></span>
    </div>
    <div class="touchless-home-content">
      <a-card :bordered="false">
        <h1 class="mb-10">
          Mau jajan di mesin vending Atlas tapi takut sentuhan sama layarnya?
        </h1>
        <p>
          Cari dan masukin kode unik yang ada di bagian bawah mesin vending. Ada
          di samping icon sinyal ya! :)
        </p>
        <div class="form-group">
          <label class="mb-10">Kode VM</label>
          <a-input
            size="large"
            placeholder="Contoh: SKN02***"
            v-model="vmCode"
          />
        </div>
        <p class="touchless-code-link mb-20">
          Belum nemu kode uniknya? <router-link to="/">Klik disini</router-link>
        </p>
        <a-button
          type="warning"
          class="ant-btn-warning font-16 touchless-home-button mt-20"
          @click="checkVm"
          :disabled="!vmCode"
        >
          Lanjut
        </a-button>
      </a-card>
    </div>
  </a-layout-content>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      loading: false,
      vmCode: ""
    };
  },
  mounted() {
    localStorage.clear();
  },
  methods: {
    ...mapActions(["getVmData"]),
    async checkVm() {
      try {
        this.loading = true;
        const data = await this.getVmData({ deviceCode: this.vmCode });

        if (data.status === 200) {
          this.$router.push(`catalog/${this.vmCode}`);
        }
      } catch (error) {
        this.$router.push("vm-not-found");
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
