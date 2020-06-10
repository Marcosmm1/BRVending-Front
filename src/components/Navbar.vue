<template>
  <div>
    <v-app-bar app height="120px" color="deep-orange accent-4" dark>
      <v-toolbar-title id="title">
        BR
        <span class="icon-title">
          <v-icon class="icon" size="80px">mdi-alpha-v-box</v-icon>
        </span>
        ending
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="logout">
        <v-icon size="60px" class="mr-4">mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "navbar",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
#title {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 60px;
  line-height: 120px;
}
.icon-title {
  margin: 0 -10px;
}
</style>
