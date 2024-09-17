import useAuth from "src/composables/useAuth";

const Auth = useAuth();

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        meta: {
          transition: {
            enter: "animated slideInRight",
            leave: "animated slideOutLeft",
          },
        },
      },
      {
        path: "login",
        component: () => import("pages/LoginPage.vue"),
      },
      {
        path: "sync",
        component: () => import("layouts/SyncLayout.vue"),
        children: [
          {
            path: "kegiatan",
            component: () => import("pages/SyncKegiatanPage.vue"),
            meta: {
              requiresAuth: true,
              transition: {
                enter: "animated slideInRight",
                leave: "animated slideOutLeft",
              },
            },
          },
          {
            path: "surveyjs",
            component: () => import("pages/SyncSurveyJsPage.vue"),
            meta: {
              requiresAuth: true,
              transition: {
                enter: "animated slideInRight",
                leave: "animated slideOutLeft",
              },
            },
          },
        ],
        meta: {
          requiresAuth: true,
          transition: {
            enter: "animated slideInRight",
            leave: "animated slideOutLeft",
          },
        },
      },
      {
        path: "nav",
        component: () => import("layouts/NavLayout.vue"),
        children: [
          {
            path: "kegiatan-pilih",
            component: () => import("pages/FormSyncKegiatanPage.vue"),
            meta: {
              requiresAuth: true,
              transition: {
                enter: "animated slideInRight",
                leave: "animated slideOutLeft",
              },
            },
          },
          {
            path: "kegiatans/:kegiatan_id",
            component: () => import("pages/DashboardKegiatanPage.vue"),
            meta: {
              title: "Periode",
              requiresAuth: true,
              transition: {
                enter: "animated slideInRight",
                leave: "animated slideOutLeft",
              },
            },
          },
          {
            path: "kegiatans/:kegiatan_id/list-level-1",
            component: () => import("pages/DaftarRekapLevel1Page.vue"),
            meta: {
              title: "Daftar Wilayah",
              requiresAuth: true,
              transition: {
                enter: "animated slideInRight",
                leave: "animated slideOutLeft",
              },
            },
          },
          {
            path: "kegiatans/:kegiatan_id/:level_1_id",
            component: () => import("pages/DaftarResponden.vue"),
            meta: {
              title: "Daftar Assignment",
              requiresAuth: true,
              transition: {
                enter: "animated slideInRight",
                leave: "animated slideOutLeft",
              },
            },
          },
        ],
        meta: {
          requiresAuth: true,
          transition: {
            enter: "animated slideInRight",
            leave: "animated slideOutLeft",
          },
        },
      },
      {
        path: "home",
        component: () => import("layouts/HomeLayout.vue"),
        children: [
          {
            path: "beranda",
            component: () => import("pages/BerandaPage.vue"),
            meta: {
              title: "Beranda",
              requiresAuth: true,
              transition: {
                enter: "animated slideInRight",
                leave: "animated slideOutLeft",
              },
            },
          },
        ],
        meta: {
          requiresAuth: true,
          transition: {
            enter: "animated slideInRight",
            leave: "animated slideOutLeft",
          },
        },
      },
      {
        path: "form",
        component: () => import("layouts/FormLayout.vue"),
        children: [
          {
            path: "kegiatans/:kegiatan_id/respondens/:responden_id",
            component: () => import("pages/FormPage.vue"),
            meta: {
              requiresAuth: true,
              transition: {
                enter: "animated slideInRight",
                leave: "animated slideOutLeft",
              },
            },
          },
        ],
        meta: {
          requiresAuth: true,
          transition: {
            enter: "animated slideInRight",
            leave: "animated slideOutLeft",
          },
        },
      },
    ],
  },

  {
    path: "/auth/google/callback",
    component: () => import("pages/GoogleCallback.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
    meta: {
      requiresAuth: true,
      transition: {
        enter: "animated slideInRight",
        leave: "animated slideOutLeft",
      },
    },
  },
];
// Navigation guard
function guard(to, from, next) {
  console.log("Guarding");
  Auth.initToken().then(() => {
    Auth.isAuthenticated().then((value) => {
      let isAuthenticated = value;
      console.log("isAuthenticated:", value);
      console.log("to.path:", to.path);
      if (to.path === "/") {
        next("/home/beranda");
      } else if (to.meta.requiresAuth && !isAuthenticated) {
        next("/login");
      } else if (to.path === "/login" && isAuthenticated) {
        next("/home/beranda");
      } else {
        next();
      }
    });
  });
}

// Apply the guard to each route
routes.forEach((route) => {
  route.beforeEnter = guard;
});
export default routes;
