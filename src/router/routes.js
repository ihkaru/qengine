// import useAuth from 'src/composables/useAuth';

// const authGuard = (to, from, next) => {
//   const { token } = useAuth();

//   if (!token.value) {
//     next('/login'); // Redirect if not authenticated
//   } else {
//     next(); // Allow access if authenticated
//   }
// };

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
              transition: {
                enter: "animated slideInRight",
                leave: "animated slideOutLeft",
              },
            },
          },
        ],
        meta: {
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
              transition: {
                enter: "animated slideInRight",
                leave: "animated slideOutLeft",
              },
            },
          },
        ],
        meta: {
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
              transition: {
                enter: "animated slideInRight",
                leave: "animated slideOutLeft",
              },
            },
          },
        ],
        meta: {
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
              transition: {
                enter: "animated slideInRight",
                leave: "animated slideOutLeft",
              },
            },
          },
        ],
        meta: {
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
      transition: {
        enter: "animated slideInRight",
        leave: "animated slideOutLeft",
      },
    },
  },
];

export default routes;
