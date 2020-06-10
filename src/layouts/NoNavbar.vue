<template>
  <div>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";

export default {
  components: {
    Footer
  }
};
</script>
