<template>
  <v-container class="pt-0" fluid>
    <v-row>
      <v-col class="pa-0">
        <v-card color="deep-orange accent-4" class="appbar" dark>
          <v-card-title
            class="py-10 text-center justify-center display-4 font-weight-bold"
          >
            BR
            <v-icon class="ma-n3" size="110px">mdi-alpha-v-box</v-icon>ending
            <v-icon size="120px">mdi-notebook</v-icon>
          </v-card-title>
          <v-tabs
            cols="2"
            class="justify-end d-flex"
            v-model="tab"
            background-color="transparent"
          >
            <v-tab v-for="(item, i) in items" :key="i" :class="item.class">{{
              item.name
            }}</v-tab>
          </v-tabs>
          <v-tabs-items class="justify-end d-flex tabs bg_auth" v-model="tab">
            <v-tab-item>
              <Login class="tabs mr-10" />
            </v-tab-item>
            <v-tab-item>
              <Signup class="tabs mr-10" />
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
      items: [
        {
          name: "Login",
          class: "display-1 font-weight-black"
        },
        {
          name: "Sign In",
          class: "display-1 font-weight-black mr-12"
        }
      ]
    };
  },
  components: {
    Login,
    Signup
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  background-color: transparent;
}
.bg_auth {
  background-image: url("../assets/comerciales.jpg");
  background-size: cover;
  min-height: calc(100vh - 26vh);
}
</style>
