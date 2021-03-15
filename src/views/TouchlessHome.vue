<template>
  <a-layout-content>
    <div class="touch-home-content">
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
          <a-input size="large" placeholder="Contoh: SKN02***" />
        </div>
        <p class="touch-code-link mb-20">
          Belum nemu kode uniknya? <a href="#">Klik disini</a>
        </p>
        <a-button
          type="warning"
          class="ant-btn-warning font-16 touch-home-button mt-20"
          disabled
        >
          Lanjut
        </a-button>
      </a-card>
    </div>
  </a-layout-content>
</template>

<script>
export default {
  name: "Home"
};
</script>
