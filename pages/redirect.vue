<template>
  <div id="transaction-div">
    <div class="grid justify-center justify-center mx-auto">
      <img
        :src="
          require(`@/assets/img/${
            $route.query.status == 'Success' ? 'checked' : 'cancel'
          }.png`)
        "
        class="w-48 mt-48 mx-auto"
        alt=""
      />
      <div class="text-center mt-4">
        <b
          :class="
            $route.query.status == 'Success' ? 'text-green-600' : 'text-red-600'
          "
        >
          {{
            $route.query.status == "Success"
              ? $t("home.transactionSuccess")
              : $t("home.transactionFail")
          }}
        </b>
        <br />
        <b
          :class="
            $route.query.status == 'Success' ? 'text-green-600' : 'text-red-600'
          "
        >
          {{ $t(`home.transactionId`) }} :  {{ $route.query.payment }}
        </b>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<style scoped>
@keyframes fadeInfadeOut {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

#transaction-div {
  animation: fadeInfadeOut 3s;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

img {
  animation: rotate 2s linear;
}

</style>