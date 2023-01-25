<template>
  <v-app>
    <v-navigation-drawer v-model="drawer">
      <!--  -->
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Nuxt 3 & Vuetify 3 Template</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
};
</script>
