<template>
  <div>
    <div id="dropin-container"></div>

    <button
      type="submit"
      id="submitTransaction"
      class="w-full mt-8 mx-auto"
      v-if="dropinInstance"
      @click="dropinRequestPaymentMethod"
    >
      {{ $t("home.checkout") }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    dropInConfigs: {
      type: Object,
    },
    loaderClass: {
      type: String,
    },
    inputClass: {
      type: String,
    },
    enablePayPal: {
      type: Boolean,
    },
  },
  created() {
    this.dropinCreate();
    this.$parent?.$on("tokenize", () => {
      this.dropinRequestPaymentMethod();
    });
  },
  data() {
    return {
      errorMessage: "" as any,
      dropinInstance: "" as any,
      paymentPayload: "" as any,
      dataCollectorPayload: "" as any,
    };
  },
  methods: {
    dropinCreate() {
      this.$store.commit("SET_LOADER", true);
      const dropin = require("braintree-web-drop-in");

      // setup drop-in options
      const dropinOptions = { ...this.dropInConfigs };

      // if PayPal enabled, add to options settings
      if (this.enablePayPal) {
        dropinOptions.paypal = {
          flow: "vault",
        };
      }

      dropin.create(dropinOptions, (dropinError: any, dropinInstance: any) => {
        if (dropinError) {
          this.errorMessage =
            "There was an error setting up the client instance. Message: " +
            dropinError.message;
          this.$emit("bt.error", this.errorMessage);
          return;
        }

        this.dropinInstance = dropinInstance;
        this.$store.commit("SET_LOADER", false);
      });
    },
    dropinRequestPaymentMethod() {
      this.dropinInstance.requestPaymentMethod(
        (requestErr: any, payload: any) => {
          if (requestErr) {
            this.errorMessage =
              "There was an error setting up the client instance. Message: " +
              requestErr.message;
            this.$emit("bt.error", this.errorMessage);
            return;
          }

          this.paymentPayload = payload;
          console.log(
            "🚀 ~ file: dropIn.vue:100 ~ this.dropinInstance.requestPaymentMethod ~ this.paymentPayload:",
            this.paymentPayload
          );
          this.$store.commit("SET_LOADER", true);
          setTimeout(() => {
            this.$store.commit("SET_LOADER", false);
          }, 5000);

          // do something with the payload/nonce
        }
      );
    },
  },
});
</script>

<style scoped>
button,
input[type="submit"] {
  background-color: #ff6b00;
  display: inline-block;
  border: none;
  padding: 1rem 1.5rem;
  margin: 1px;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
}

button[type="submit"] {
  margin-top: 1rem;
  background-color: #44a948;
}

button[type="submit"]:disabled {
  background-color: #e6e6e6;
}

.line {
  width: 100%;
  display: flex;
  flex-direction: row;
}

button.paypal {
  background-color: #00457c;
  font-weight: 600;
}

button.paypal:disabled {
  background-color: #e6e6e6;
}

button.card {
  background-color: black;
  color: #44a948;
  font-weight: 600;
}

label {
  font-size: 16px;
  display: block;
  text-align: left;
  font-weight: bold;
  padding: 0.25rem;
  width: 100%;
}

.input-field {
  height: 50px;
  box-sizing: border-box;
  width: 100%;
  padding: 0.8rem;
  display: inline-block;
  box-shadow: none;
  font-weight: 600;
  font-size: 0.8rem;
  border-radius: 6px;
  border: 1px solid #dddddd;
  line-height: 1.2;
  background: #fcfcfc;
  margin-top: 0.1rem;
  margin-bottom: 0.8rem;
  background: linear-gradient(to right, white 50%, #fcfcfc 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 300ms ease-in-out;
  font-size: 18px;
  text-align: left;
}
</style>
<style>
[dir="rtl"] {
  [data-braintree-id="methods-edit"] {
    right: 90% !important;
  }
  .braintree-methods--edit .braintree-method__delete-container {
    position: relative;
    right: 90% !important;
  }
}
</style>
