<template>
  <a-layout :class="classLayout">
    <a-affix>
      <a-layout-header>
        <a-page-header class="touchless-page-heading" @back="() => null">
          <template slot="backIcon">
            <router-link to="/" @click.native="handleBack">
              <a-icon type="arrow-left" />
            </router-link>
          </template>
          <template slot="title">
            <h4 class="m-0 font-16">{{ routeName }}</h4>
          </template>
        </a-page-header>
      </a-layout-header>
      <a-divider class="m-0" />
    </a-affix>
    <slot />
  </a-layout>
</template>

<script>
export default {
  name: "AppLayoutCatalog",
  data() {
    return {
      routeName: this.$route.name,
      classLayout: this.$route.meta.class,
      vmCode: localStorage.getItem("vmCode")
    };
  },
  methods: {
    handleBack() {
      if (this.classLayout === "checkout-layout") {
        this.$router.push(`/catalog/${this.vmCode}`);
      } else {
        this.$router.push("/");
      }
    }
  }
};
</script>
