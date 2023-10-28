export const I18N_OPTIONS = {
    locales: [
      { code: "en", iso: "en-US", name: "English", file: "en.js", dir: "ltr" },
      { code: "ar", iso: "ar-EG", name: "العربية", file: "ar.js", dir: "rtl" },
    ],
    parsePages: false, // Disable babel parsing
    pages: {
      health: false
    },
    strategy: "prefix", // TODO: locale needs to be prefixed to url path when using $
    lazy: true,
    langDir: "locales/",
    detectBrowserLanguage: false,
    seo: false,
    // rootRedirect: "ar",
    defaultLocale: "ar",
    vueI18n: {
      // locales: ['en', 'ar'],
      fallbackLocale: ["ar", "en"],
      // messages:loadLocaleMessages()
    },
    vuex: {
      // Module namespace
      moduleName: "i18n",
  
      // If enabled, current app's locale is synced with nuxt-i18n store module
      syncLocale: true,
  
      // Mutation to commit to set route parameters translations
      syncRouteParams: true,
    },
  };
  