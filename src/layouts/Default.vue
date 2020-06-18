<template>
  <v-container>
    <v-row>
      <v-col>
        <Navbar />
        <v-content>
          <router-view></router-view>
        </v-content>
        <Footer />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  data() {
    return {
      menu: false,
      selected: "",
      dates: [],
      search: true
    };
  },
  components: {
    Footer,
    Navbar
  }
};
</script>
