<template>
  <a-layout-content>
    <div style="background:#FFFFFF;" class="touchless-location">
      <a-card :bordered="false" v-if="loading">
        <a-skeleton :paragraph="{ rows: 2 }" active />
      </a-card>
      <a-card :bordered="false" v-else>
        <h3 class="font-18">{{ machineInformation.MachineLocation }}</h3>
        <p class="text-grey font-14">
          {{ machineInformation.MachineAddress }}
        </p>
        <span
          class="touchless-status status-online"
          v-if="machineInformation.MachineOnlineStatus === true"
        >
          Online
        </span>
        <span class="touchless-status status-offline" v-else>Offline</span>
      </a-card>
    </div>
    <div class="touchless-catalog-list">
      <a-card :bordered="false" style="background: none;">
        <a-space class="touchless-menu-category">
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
            :span="24"
            v-if="isEmpty"
            class="text-center touchless-empty-product"
          >
            <img src="/img/img-vm-empty.png" alt="produk tidak tersedia" />
            <h3 class="mb-16">Produk Tidak Tersedia</h3>
            <p>Maaf, produk belum tersedia di kota kamu :(</p>
          </a-col>
          <a-col
            :span="12"
            v-for="(item, index) in listProduct"
            :key="index"
            class="pb-13"
            v-else
          >
            <a-card
              hoverable
              align="left"
              style="height: 100%; border: 0"
              @click="handleClickProduct(item.BarCode)"
            >
              <img
                slot="cover"
                :alt="item.ProductName"
                :src="item.ProductImage"
                onerror="if (this.src != '/img/img-placeholder.png') this.src = '/img/img-placeholder.png';"
              />
              <a-card-meta>
                <template slot="title">
                  <p class="m-0 font-14">{{ item.ProductName }}</p>
                </template>
                <template slot="description">
                  <span class="text-red-text font-16">{{
                    item.ProductPrice | currency
                  }}</span>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
        </a-row>
        <a-row :gutter="16" v-else>
          <a-col :span="12" v-for="(item, index) in 10" :key="index">
            <a-card hoverable class="mb-20" align="left">
              <a-skeleton
                class="touchless-skeleton-w-img"
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
import { mapActions } from "vuex";

export default {
  name: "Catalog",
  data() {
    return {
      loading: false,
      param: this.$route.params.id,
      category: ["All"],
      product: [],
      selectedCategory: "All",
      machineInformation: {
        MachineAddress: "",
        MachineLocation: "",
        MachineOnlineStatus: false
      },
      isEmpty: true
    };
  },
  computed: {
    listProduct() {
      const data = this.product;
      let result = [];

      if (this.selectedCategory !== "All") {
        result = data.filter(
          item => item.CategoryParent === this.selectedCategory
        );
      } else {
        result = data;
      }

      return result;
    }
  },
  watch: {
    listProduct(val) {
      if (val.length) {
        this.isEmpty = false;
      } else {
        this.isEmpty = true;
      }
    }
  },
  mounted() {
    this.getDataVm(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getVmData"]),
    async getDataVm(vmId) {
      try {
        this.loading = true;
        const { data } = await this.getVmData({ deviceCode: vmId });
        this.machineInformation = data.machine;
        this.product = data.products;
        this.category.push(...data.categories);
      } catch (error) {
        this.$message.error("Data tidak ditemukan", 10);
        throw error;
      } finally {
        this.loading = false;
      }
    },
    handleCategory(val) {
      this.selectedCategory = val;
    },
    handleClickProduct(barcode) {
      const data = this.product;
      const result = data.filter(
        item => item.BarCode.toUpperCase() === barcode.toUpperCase()
      );

      localStorage.setItem("productDetail", JSON.stringify(...result));
      localStorage.setItem("vmCode", this.param);
      localStorage.setItem("productTid", this.machineInformation.TID);
      localStorage.removeItem("responseStatus");
      localStorage.removeItem("catalogData");
      this.$router.push("/checkout");
    }
  }
};
</script>
