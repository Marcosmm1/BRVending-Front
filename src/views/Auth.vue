<template>
  <v-container class="fill-height pt-0" fluid>
    <v-row class="bg_auth">
      <v-col class="pa-0">
        <v-card color="orange darken-4" dark>
          <v-card-title
            class="py-10 text-center justify-center display-4 font-weight-bold"
          >
            BR
            <v-icon class="ma-n3" size="110px">mdi-alpha-v-box</v-icon>ending
          </v-card-title>
          <v-tabs
            cols="2"
            class="justify-center d-flex"
            v-model="tab"
            background-color="transparent"
          >
            <v-tab
              v-for="item in items"
              :key="item"
              class="display-1 font-weight-black"
              >{{ item }}</v-tab
            >
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <Login />
            </v-tab-item>
            <v-tab-item>
              <Signup />
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Login from "../components/Login.vue";
import Signup from "../components/Sign.vue";

export default {
  data() {
    return {
      tab: null,
      items: ["Login", "Sign Up"]
    };
  },
  components: {
    Login,
    Signup
  }
};
</script>

<style lang="scss" scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.card {
  margin: auto;
}
.basil {
  background-color: rgba(230, 107, 25, 0.808) !important;
}
.basil--text {
  color: #ffffff !important;
}
.bg_auth {
  min-height: calc(100vh - 8vh);
}
</style>
