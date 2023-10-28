<template>
  <header class="p-2">
    <div class="flex justify-end">
      <img
        src="@/assets/logo/logo.png"
        class="w-12 mx-auto"
        alt=""
        @click="$router.push(localePath('/'))"
      />

      <div>
        <a
          class="mx-2 pointer"
          @click="changeLocale('ar')"
          :class="getTextColor('ar')"
        >
          {{ $t(`home.ar`) }}
        </a>
        <a
          class="mx-2 pointer"
          @click="changeLocale('en')"
          :class="getTextColor('en')"
        >
          {{ $t(`home.en`) }}
        </a>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    changeLocale(locale: string) {
      this.$i18n.locale = locale;
      this.$router
        .replace({
          path: this.localePath(this.$route.path),
          query: this.$route.query,
        })
        .catch((err: any) => {});
      document.dir = locale == "ar" ? "rtl" : "ltr";
    },
    getTextColor(locale: string) {
      return this.$i18n.locale == locale ? "text-cyan-600" : "text-black";
    },
  },
});
</script>
