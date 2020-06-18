<template>
  <v-footer height="110px" color="deep-orange accent-4 headline" absolute>
    <v-row justify="center" no-gutters>
      <!-- <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">{{ link }}</v-btn> -->
      <v-col
        class="deep-orange accent-4 headline text-center white--text"
        cols="12"
      >
        <strong>
          @BR
          <v-icon class="ml-n2 mr-n1 mb-1" size="28px" dark
            >mdi-alpha-v-box</v-icon
          >ending, La app de los comerciales
        </strong>
      </v-col>
      <span class="github">
        <a class="gitacc" href="https://github.com/adrianrdguez"
          >@adrianrdguez</a
        >
        <v-icon x-large dark class="mx-4">mdi-github</v-icon>
        <a class="gitacc" href="https://github.com/marcosmm1">@marcosmm1</a>
      </span>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.github {
  color: white;
  font-size: 20px;
  margin-top: 10px;
  font-weight: 600;
}
.gitacc {
  color: white;
  margin-top: 15px;
}
a:link,
a:visited,
a:active {
  text-decoration: none;
}
</style>
