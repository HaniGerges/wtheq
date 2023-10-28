<template>
  <div class="m-4">
    <h1>
      {{ $t(`home.${title}`) }}
    </h1>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
<style lang="scss" scoped>
h1 {
  font-family: sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0.5rem;
}
</style>