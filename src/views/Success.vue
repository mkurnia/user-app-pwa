<template>
  <a-layout-content class="touchless-default-layout">
    <div class="touchless-container pt-0">
      <a-card :bordered="false" class="text-center">
        <img src="../../public/img/scan-qr.gif" alt="QR Code" class="mb-0" />
        <h3 class="mb-16">Tinggal selangkah lagi!</h3>
        <p>
          Scan QR yang muncul di layar mesin vending di depanmu dan lakukan
          pembayaran menggunakan aplikasi e-Wallet yang kamu punya
        </p>
        <a-row type="flex" align="middle">
          <a-col span="8" class="text-left">
            <router-link :to="`/catalog/${vmCode}`" class="text-cyan font-12">
              Back to <br />
              Catalog Page
            </router-link>
          </a-col>
          <a-col span="16" class="text-right">
            <img
              src="../../public/img/atlas-logo-color.png"
              alt="Atlas Logo Color"
              class="mb-0 mr-16"
            />
            <img
              src="../../public/img/qris-logo.png"
              alt="Atlas Logo Color"
              class="mb-0"
            />
          </a-col>
        </a-row>
      </a-card>
    </div>
  </a-layout-content>
</template>

<script>
export default {
  name: "Success",
  data() {
    return {
      vmCode: this.$route.params.id
    };
  }
};
</script>
