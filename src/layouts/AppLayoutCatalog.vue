<template>
  <a-layout class="touch-atlas">
    <a-layout-header>
      <a-page-header class="touch-page-heading" @back="() => null">
        <template slot="backIcon">
          <router-link to="/"><a-icon type="arrow-left"/></router-link>
        </template>
        <template slot="title">
          <h4 class="m-0 font-16">{{ routeName }}</h4>
        </template>
      </a-page-header>
    </a-layout-header>
    <a-divider class="m-0" />
    <slot />
    <a-layout-footer>
      <h5>© ATLASVM 2021. All Rights Reserved</h5>
    </a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  name: "AppLayoutCatalog",
  data() {
    return {
      routeName: this.$route.name
    };
  }
};
</script>
