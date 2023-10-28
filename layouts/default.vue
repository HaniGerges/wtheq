<template>
    <div class="flex flex-col h-screen">
      <Loading v-if="isLoading == true" />
      <div class="flex flex-row min-h-full">
        <Sidebar />
        <main class="bg-gray-100 w-full">
          <TopNav class="bg-white h-10" />
          <CustomTitle :title="$route.name.split(`___${$i18n.locale}`)[0]" />
          <div class="bg-gray-100 min-h-full pb-5">
            <Nuxt class="" />
          </div>
          <Footer class="" />
        </main>
      </div>
    </div>
  </template>
  <script lang="ts">
  import Vue from "vue";
  import Sidebar from "@/components/Nav/Sidebar.vue";
  import TopNav from "@/components/Nav/TopNav.vue";
  import Footer from "@/components/Nav/Footer.vue";
  import Loading from "@/components/Loading.vue";
  export default Vue.extend({
    name: "Default",
    components: { Sidebar, Footer, TopNav, Loading },
    data() {
      return {};
    },
  
    computed: {
      isLoading() {
        return this.$store.getters["isLoading"];
      },
    },
    mounted() {},
  });
  </script>
  