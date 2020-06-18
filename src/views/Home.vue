<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-space-around">
        <router-link v-for="(icon, i) in icons" :key="i" :to="icon.to">
          <HomeButton :data="icon" />
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import HomeButton from "@/components/HomeButton.vue";

export default {
  name: "home",
  data() {
    return {
      icons: [
        {
          to: "/ventas",
          name: "Ventas",
          src:
            "https://cdn.jim-nielsen.com/ios/512/job-estimate-invoice-maker-2019-07-22.png",
          srcset:
            "https://cdn.jim-nielsen.com/ios/1024/job-estimate-invoice-maker-2019-07-22.png 2x"
        },
        {
          to: "/clients",
          name: "Clients",
          src: "https://cdn.jim-nielsen.com/ios/512/cardhop-2019-04-16.png",
          srcset:
            "https://cdn.jim-nielsen.com/ios/1024/cardhop-2019-04-16.png 2x"
        }
      ]
    };
  },
  components: {
    HomeButton
  }
};
</script>

<style lang="scss" scoped>
a:link,
a:visited,
a:active {
  text-decoration: none;
}
</style>
