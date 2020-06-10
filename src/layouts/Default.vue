<template>
  <div>
    <Navbar />
    <v-content app>
      <router-view></router-view>
    </v-content>
    <Footer />
  </div>
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
