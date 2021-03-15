<template>
  <a-layout class="touchless-home">
    <a-layout-header>
      <div class="touchless-home-header">
        <a-card :bordered="false">
          <img src="../../public/img/icons/atlas-logo.png" alt="Logo" />
        </a-card>
      </div>
    </a-layout-header>
    <slot />
    <a-layout-footer>
      <h5>© ATLASVM 2021. All Rights Reserved</h5>
    </a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  name: "AppLayoutHome"
};
</script>
