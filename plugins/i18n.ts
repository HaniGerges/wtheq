import { Context } from "@nuxt/types";
import { I18N_OPTIONS } from "~/config/i18n";

export default function ({ app }: Context, inject: any) {
  // Get localized path for homepage
  const localePath = app.localePath("index");
  // Get path to switch current route to French
  const switchLocalePath = app.switchLocalePath("ar");
  const dir = () =>
    I18N_OPTIONS.locales.find((x: any) => x.code === app.i18n.locale)?.dir as string;
  console.log("🚀 ~ file: i18n.ts:10 ~ dir:", dir());
  inject("dir", dir());
  window.onNuxtReady(() => {
    document.dir = dir();
    setTimeout(() => {
      document.body.classList.add("default-transition");
    }, 100);
  });
}
