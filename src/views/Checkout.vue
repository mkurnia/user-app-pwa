<template>
  <a-layout-content>
    <div class="touchless-loading" v-if="loading">
      <span class="loading-spin"></span>
    </div>
    <div style="background:#FFFFFF;" class="touchless-checkout mb-10">
      <a-card :bordered="false">
        <a-card-meta>
          <a-avatar
            style="border-radius: unset;width: 128px;height: auto;"
            slot="avatar"
            :src="product.ProductImage"
          />
          <template slot="title">
            <p class="m-0 font-16">{{ product.ProductName }}</p>
          </template>
          <template slot="description">
            <span class="text-red-text font-16">{{
              product.ProductPrice | currency
            }}</span>
          </template>
        </a-card-meta>
      </a-card>
    </div>
    <div style="background:#FFFFFF;" class="touchless-checkout-footer">
      <a-card :bordered="false">
        <a-row>
          <a-col :span="12"><p class="m-0">Total</p></a-col>
          <a-col :span="12" class="text-right">
            <span class="text-red-text font-16">{{
              product.ProductPrice | currency
            }}</span>
          </a-col>
        </a-row>
      </a-card>
      <a-button
        type="danger"
        class="ant-btn-danger font-16"
        @click="handleSubmit"
      >
        Bayar Dengan QRIS
      </a-button>
    </div>
  </a-layout-content>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Checkout",
  data() {
    return {
      loading: false,
      product: {}
    };
  },
  mounted() {
    this.getDetailData();
  },
  methods: {
    ...mapActions(["showQr"]),
    getDetailData() {
      this.product = JSON.parse(localStorage.getItem("productDetail"));
    },
    async handleSubmit() {
      const payload = {
        TID: localStorage.getItem("productTid"),
        BarCode: this.product.BarCode
      };
      try {
        this.loading = true;
        await this.showQr(payload);
        this.$router.push("/success");
      } catch (error) {
        this.$message.error("Pembayaran gagal", 10);
        throw error;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
