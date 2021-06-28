import theme from "@nuxt/content-theme-docs";

export default theme({
  ssr: false,
  target: "static",

  server: {
    port: 3010,
  },

  docs: { primaryColor: "#E24F55" },
  loading: { color: "#00CD81" },
  i18n: {},
  buildmodules: [],
});
