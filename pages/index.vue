<template>
  <div class="md:w-full lg:w-2/3 w-full mx-auto mt-12">
    <div
      class="bg-white p-3 pb-4 min-h-96 shadow-sm rounded-sm border-2 border-gray-100 shadow-lg rounded-xl"
    >
      <div class="flex justify-center space-x-2 rounded-full mb-4">
        <img
          src="@/assets/img/profile.webp"
          class="w-24 h-24 rounded-full border-2 border-gray-100 hover:border-gray-300 transition duration-300 ease-in-out"
          alt=""
        />
      </div>
      <div class="text-gray-700 my-5 py-5">
        <div
          class="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 text-sm "
        >
          <div class="grid md:grid-cols-2 grid-cols-1">
            <div class="px-2 py-2 font-semibold">
              {{ $t(`home.firstName`) }}
            </div>
            <div class="px-2 py-2">{{ userModel.firstName }}</div>
          </div>
          <div class="grid md:grid-cols-2 grid-cols-1">
            <div class="px-2 py-2 font-semibold">{{ $t(`home.lastName`) }}</div>
            <div class="px-2 py-2">{{ userModel.lastName }}</div>
          </div>
          <div class="grid md:grid-cols-2 grid-cols-1">
            <div class="px-2 py-2 font-semibold">{{ $t(`home.gender`) }}</div>
            <div class="px-2 py-2">{{ userModel.gender }}</div>
          </div>
          <div class="grid md:grid-cols-2 grid-cols-1">
            <div class="px-2 py-2 font-semibold">{{ $t(`home.mobile`) }}</div>
            <div class="px-2 py-2">
              <a :href="`tel:${userModel.mobile}`"> {{ userModel.mobile }}</a>
            </div>
          </div>
          <div class="grid md:grid-cols-2 grid-cols-1">
            <div class="px-2 py-2 font-semibold">{{ $t(`home.address`) }}</div>
            <div class="px-2 py-2">{{ userModel.address }}</div>
          </div>
          <div class="grid md:grid-cols-2 grid-cols-1">
            <div class="px-2 py-2 font-semibold">{{ $t(`home.email`) }}</div>
            <div class="px-2 py-2">
              <a class="text-blue-800" :href="`mailto:${userModel.email}`">{{
                userModel.email
              }}</a>
            </div>
          </div>
          <div class="grid md:grid-cols-2 grid-cols-1">
            <div class="px-2 py-2 font-semibold">{{ $t(`home.birthdate`) }}</div>
            <div class="px-2 py-2">{{ userModel.birthdate }}</div>

          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { User } from "@/models/userModel";
export default Vue.extend({
  name: "IndexPage",
  layout: "default",
  data() {
    return {
      userModel: {
        id: "123-456-789",
        firstName: "Hani",
        lastName: "Gerges",
        email: "hany.grges@gmail.com",
        password: "122",
        mobile: "+201208950563",
        birthdate: "Dec 10, 1994",
        address: "Cairo, El-Zytoon",
        gender: 0, //0 for male, 1 for female
      } as User,
    };
  },
  created() {},
});
</script>
