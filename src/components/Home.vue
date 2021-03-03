<template>
  <div class="container">
    <header>
      <h3>Detail Vending Machine</h3>
    </header>
    <content>
      <div class="pwa-card">
        <div class="pwa-content-box">
          <div class="app-address">
            <h3>D'Arcici Hotel Sunter</h3>
            <p>Jl. Sunter Permai Raya No.A1, RT.2/RW.12, Sunter Agung, Paradise, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14350</p>
            <span></span>
          </div>
        </div>
      </div>
      <div class="pwa-content-box">
        <div class="row space-between">
          <div class="pwa-col-6" v-for="item in 10" :key="item">
            <router-link to="/">
              <div class="pwa-card mb-20 mt-0">
                <img src="https://cf.shopee.co.id/file/976f89461021e6d837aae1332a3f1bb1" alt="chitato">
                <div class="p-20">
                  <p class="mb-0 mt-0">Chitato</p>
                  <p class="price-red mt-0">Rp 10.500</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </content>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
