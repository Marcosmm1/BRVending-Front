import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Auth from "../views/Auth.vue";
import Clients from "../views/ShowClients.vue";
import ShowClient from "../views/ShowClient.vue";
import VentasClients from "../views/VentasClients.vue";
import Products from "../views/ShowProducts.vue";
import ShowOrders from "../views/ShowOrders.vue";
// import ShowOrder from "../views/ShowOrder.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Auth",
    meta: {
      layout: "no-navbar"
    },
    component: Auth
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("token")) {
        next({
          name: "Auth"
        });
      }
      next();
    }
  },
  {
    path: "/clients",
    name: "ClientsInfo",
    component: Clients,
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("token")) {
        next({
          name: "Auth"
        });
      }
      next();
    }
  },
  {
    path: "/ventas",
    name: "VentasClients",
    component: VentasClients,
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("token")) {
        next({
          name: "Auth"
        });
      }
      next();
    }
  },
  {
    path: "/ShowProducts/:clientId",
    name: "ShowProducts",
    component: Products,
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("token")) {
        next({
          name: "Auth"
        });
      }
      next();
    }
  },
  {
    path: "/clients/:client",
    name: "Clients",
    component: ShowClient,
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("token")) {
        next({
          name: "Auth"
        });
      }
      next();
    }
  },
  {
    path: "/ShowOrders",
    name: "ShowOrders",
    component: ShowOrders,
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("token")) {
        next({
          name: "Auth"
        });
      }
      next();
    }
  }
  // {
  //   path: "/orders/orderId",
  //   name: "Orders",
  //   component: ShowOrder,
  //   props: true,
  //   beforeEnter(to, from, next) {
  //     if (!localStorage.getItem("token")) {
  //       next({
  //         name: "Auth"
  //       });
  //     }
  //     next();
  //   }
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;
