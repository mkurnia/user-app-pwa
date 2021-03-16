<template>
  <a-layout-content>
    <div style="background:#FFFFFF;" class="touchless-checkout mb-10">
      <a-card :bordered="false">
        <a-card-meta>
          <a-avatar
            style="border-radius: unset;width: 128px;height: auto;"
            slot="avatar"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
          <template slot="title">
            <p class="m-0 font-16">Europe Street beat</p>
          </template>
          <template slot="description">
            <span class="text-red-text font-16">{{ "13000" | currency }}</span>
          </template>
        </a-card-meta>
      </a-card>
    </div>
    <div style="background:#FFFFFF;" class="touchless-checkout-footer">
      <a-card :bordered="false">
        <a-row>
          <a-col :span="12"><p class="m-0">Total</p></a-col>
          <a-col :span="12" class="text-right">
            <span class="text-red-text font-16">{{ "13000" | currency }}</span>
          </a-col>
        </a-row>
      </a-card>
      <a-button type="danger" class="ant-btn-danger font-16">
        Bayar Dengan QRIS
      </a-button>
    </div>
  </a-layout-content>
</template>

<script>
export default {
  name: "Checkout",
  data() {
    return {
      loading: false,
      param: this.$route.params.id,
      category: [
        "All",
        "Minuman",
        "Makanan",
        "Masker",
        "Snack",
        "Medic",
        "Susu",
        "Mie",
        "Sayur",
        "Dll"
      ],
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
