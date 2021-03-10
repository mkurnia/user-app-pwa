<template>
  <a-layout class="touch-atlas">
    <a-layout-header>
      <a-page-header class="touch-page-heading" @back="() => null">
        <template slot="backIcon">
          <router-link to="/"><a-icon type="arrow-left"/></router-link>
        </template>
        <template slot="title"><h4 class="m-0 font-16">Detail Vending Machine</h4></template>
      </a-page-header>
    </a-layout-header>
    <a-divider class="m-0" />
    <a-layout-content>
      <div style="background:#FFFFFF;" class="touch-location">
        <a-card :bordered="false">
          <h3 class="font-18">D'Arcici Hotel Sunter</h3>
          <p class="text-grey font-14">
            Jl. Sunter Permai Raya No.A1, RT.2/RW.12, Sunter Agung, Paradise,
            Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14350
          </p>
          <span class="touch-status status-online">Online</span>
        </a-card>
      </div>
      <div class="touch-catalog-list">
        <a-card :bordered="false" style="background: none;">
          <a-row :gutter="16" v-if="!loading" type="flex">
            <a-col
              :span="12"
              v-for="(item, index) in 10"
              :key="index"
              class="pb-13"
            >
              <router-link to="/">
                <a-card hoverable align="left" style="height: 100%; border: 0">
                  <!-- -->
                  <img
                    slot="cover"
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                  <a-card-meta>
                    <template slot="title">
                      <p class="m-0 font-14">Europe Street beat</p>
                    </template>
                    <template slot="description">
                      <span class="text-red-text font-16">{{
                        "13000" | currency
                      }}</span>
                    </template>
                  </a-card-meta>
                </a-card>
              </router-link>
            </a-col>
          </a-row>
          <a-row :gutter="16" v-else>
            <a-col :span="12" v-for="(item, index) in 10" :key="index">
              <a-card hoverable class="mb-20" align="left">
                <a-skeleton
                  class="touch-skeleton-w-img"
                  :paragraph="{ rows: 2 }"
                  active
                />
              </a-card>
            </a-col>
          </a-row>
        </a-card>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
export default {
  name: "Catalog",
  data() {
    return {
      loading: false
    };
  }
};
</script>
