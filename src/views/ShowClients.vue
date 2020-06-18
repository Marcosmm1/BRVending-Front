<template>
  <v-container>
    <v-breadcrumbs :items="items" large></v-breadcrumbs>
    <ClientShow v-for="(clients, i) in clients" :key="i" :client="clients" />
  </v-container>
</template>

<script>
import ApiService from "@/services/api.js";
import ClientShow from "@/components/Clients";

export default {
  data() {
    return {
      clients: [],
      items: [
        {
          text: "HOME",
          disabled: false,
          href: "/home"
        },
        {
          text: "CLIENTES",
          disabled: true
        }
      ]
    };
  },
  components: {
    ClientShow
  },
  methods: {
    async getClients() {
      await ApiService.getAllClients().then(
        clients => (this.clients = clients)
      );
    }
  },
  mounted() {
    this.getClients();
  }
};
</script>
