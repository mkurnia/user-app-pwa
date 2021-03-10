<template>
  <a-layout-content>
    <a-affix>
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
    </a-affix>
    <div class="touch-catalog-list">
      <a-card :bordered="false" style="background: none;">
        <a-space class="touch-menu-category">
          <a-button
            :class="[
              selectedCategory === item ? 'ant-btn-danger' : 'ant-btn-link'
            ]"
            class="text-grey"
            v-for="(item, index) in category"
            :key="index"
            @click="handleCategory(item)"
          >
            {{ item }}
          </a-button>
        </a-space>
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
</template>

<script>
export default {
  name: "Catalog",
  data() {
    return {
      loading: false,
      param: this.$route.params.id,
      category: ["All", "Minuman", "Makanan", "Masker", "Snack", "Medic", "Susu", "Mie", "Sayur", "Dll"],
      selectedCategory: "All"
    };
  },
  methods: {
    handleCategory(val) {
      this.selectedCategory = val;
    }
  }
};
</script>
