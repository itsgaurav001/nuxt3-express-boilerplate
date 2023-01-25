import { defineNuxtPlugin } from "#app";
import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";

/* 
const myAllBlackTheme: ThemeDefinition = {
    dark: false,
    colors: {
      background: '#000000',
      surface: '#000000',
      primary: '#000000',
      'primary-darken-1': '#000000',
      secondary: '#000000',
      'secondary-darken-1': '#000000',
      error: '#000000',
      info: '#000000',
      success: '#000000',
      warning: '#000000',
    }
  } */

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // Replaces new Vuetify(...)
    theme: {
      defaultTheme: "light",
    },
    customVariables: ["~/assets/variables.scss"],
    // defaultAssets: false,
  });
  app.vueApp.use(vuetify);
});
