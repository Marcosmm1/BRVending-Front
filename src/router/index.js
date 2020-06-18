import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Auth",
    meta: {
      layout: "no-navbar"
    },
    component: () => import(/* webpackChunkName: "Auth" */ "../views/Auth")
  },
  {
    path: "/home",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home"),

    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/clients",
    name: "ClientsInfo",
    component: () =>
      import(/* webpackChunkName: "Clients" */ "../views/ShowClients"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/ventas",
    name: "VentasClients",
    component: () =>
      import(/* webpackChunkName: "VentasClients" */ "../views/VentasClients"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/ShowProducts/:clientId",
    name: "ShowProducts",
    component: () =>
      import(/* webpackChunkName: "ShowProducts" */ "../views/ShowProducts"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/clients/:client",
    name: "Clients",
    component: () =>
      import(/* webpackChunkName: "ShowClient" */ "../views/ShowClient"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/ShowOrders",
    name: "ShowOrders",
    component: () =>
      import(/* webpackChunkName: "ShowOrders" */ "../views/ShowOrders"),
    meta: {
      requiresAuth: true
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.token) {
      next({
        name: "Auth",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
