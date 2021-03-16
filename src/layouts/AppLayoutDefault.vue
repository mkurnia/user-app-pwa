<template>
  <a-layout :class="`${classLayout}`">
    <slot />
  </a-layout>
</template>
<script>
export default {
  name: "AppLayoutDefault",
  data() {
    return {
      classLayout: this.$route.meta.class
    };
  }
};
</script>
