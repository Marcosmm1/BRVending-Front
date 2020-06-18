<template>
  <v-app-bar app height="110px" color="deep-orange accent-4" dark>
    <v-toolbar-title class="display-3 font-weight-medium pb-1 mt-4">
      BR
      <v-icon class="mr-n2 ml-n5 mb-2" size="80px">mdi-alpha-v-box</v-icon
      >ending
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click="logout">
      <v-icon size="60px" class="mr-4">mdi-exit-to-app</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    }
  }
};
</script>
