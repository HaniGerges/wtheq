<template>
  <div class="">
    <dropIn
      class="md:w-full lg:w-1/2 w-full mx-auto px-4 mt-12"
      :dropInConfigs="dropInConfigs"
      :enablePayPal="enablePayPal"
    >
    </dropIn>
  </div>
</template>

<script lang="ts">
import dropIn from "@/components/payments/dropIn.vue";

export default {
  name: "Payment",
  layout: "default",
  components: {
    dropIn,
  },
  data() {
    return {
      dropInConfigs: {
        authorization:
          "eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJkOWU4ZjQ3MDkwYjVhZGRhMDNhNjAyMTUzNTdmNDhmYWQ3ZGJhZTYxNWNhMWE1MGU1ZmM2ZGJlNTZjMGZkZWZlfGNyZWF0ZWRfYXQ9MjAxNy0wOC0wOVQwNzowNjoyNi4xNjU5NzU0MzgrMDAwMFx1MDAyNmN1c3RvbWVyX2lkPTg5NTQ0NTUwM1x1MDAyNm1lcmNoYW50X2lkPXFwZG5id25qYnJ3MjdrbWpcdTAwMjZwdWJsaWNfa2V5PTM3cmY1ZmR5M2h2a3Z6NDYiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvcXBkbmJ3bmpicncyN2ttai9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbInBvc3RhbF9jb2RlIl0sImVudmlyb25tZW50Ijoic2FuZGJveCIsImNsaWVudEFwaVVybCI6Imh0dHBzOi8vYXBpLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb206NDQzL21lcmNoYW50cy9xcGRuYnduamJydzI3a21qL2NsaWVudF9hcGkiLCJhc3NldHNVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImF1dGhVcmwiOiJodHRwczovL2F1dGgudmVubW8uc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFuYWx5dGljcyI6eyJ1cmwiOiJodHRwczovL2NsaWVudC1hbmFseXRpY3Muc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbS9xcGRuYnduamJydzI3a21qIn0sInRocmVlRFNlY3VyZUVuYWJsZWQiOnRydWUsInBheXBhbEVuYWJsZWQiOnRydWUsInBheXBhbCI6eyJkaXNwbGF5TmFtZSI6IldoaWxkIENhdWdodCIsImNsaWVudElkIjoiQVRsYnV5blItQkg4b0F0c0ZiTFZTdXk4YUpMSjQ4cF9hVXBMNVQyY1dRdXAxRk80bV90RlFEdjM4QXpPQjNEbFBFc1FGOFVGQkF4SC1BclYiLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjpmYWxzZSwiZW52aXJvbm1lbnQiOiJvZmZsaW5lIiwidW52ZXR0ZWRNZXJjaGFudCI6ZmFsc2UsImJyYWludHJlZUNsaWVudElkIjoibWFzdGVyY2xpZW50MyIsImJpbGxpbmdBZ3JlZW1lbnRzRW5hYmxlZCI6dHJ1ZSwibWVyY2hhbnRBY2NvdW50SWQiOiJ3aGlsZGNhdWdodCIsImN1cnJlbmN5SXNvQ29kZSI6IlVTRCJ9LCJtZXJjaGFudElkIjoicXBkbmJ3bmpicncyN2ttaiIsInZlbm1vIjoib2ZmIn0=",
        selector: "#dropin-container",
        styles: {
          direction: this.$i18n.locale == "ar" ? "rtl" : "ltr" as string,
        },
        locale: this.$i18n.locale ?? "en_US",
        vaultManager: true,
        card: {
          vault: {
            allowVaultCardOverride: false,
            vaultCard: true,
          },
          cardholderName: {
            required: true,
          },
        },
      },
      enablePayPal: false,
    };
  },
  methods: {
    btHFError(message: string) {
      console.error(message);
      // do something with the error message
    },
    btHFPayload(payload: any) {
      console.log(payload);
      // do something with the token payload
    },
    submitTransaction() {
      this.$emit("tokenize");
    },
  },
  created() {
    this.submitTransaction();
  },
};
</script>
