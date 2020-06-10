import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

import Default from "./layouts/Default.vue";
import NoNavbar from "./layouts/NoNavbar";

Vue.config.productionTip = false;

Vue.component("default-layout", Default);
Vue.component("no-navbar-layout", NoNavbar);

new Vue({
  router,
  vuetify,
  watch: {
    $route: {
      immediate: true,
      handler() {
        document.title = "BRVending";
      }
    }
  },
  render: h => h(App)
}).$mount("#app");
