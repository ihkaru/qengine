const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
    ]
  },
  {
    path: '/sync',
    component: () => import('layouts/SyncLayout.vue'),
    children: [
      { path: 'kegiatan', component: () => import('pages/SyncKegiatanPage.vue') },
      { path: 'surveyjs', component: () => import('pages/SyncSurveyJsPage.vue') },
    ]
  },
  {
    path: '/nav',
    component: () => import('layouts/NavLayout.vue'),
    children: [
      { path: 'kegiatan-pilih', component: () => import('pages/FormSyncKegiatanPage.vue') },
      { path: 'kegiatans/:kegiatan_id', component: () => import('pages/DashboardKegiatanPage.vue') },
      { path: 'kegiatans/:kegiatan_id/list-level-1', component: () => import('pages/DaftarRekapLevel1Page.vue') },
      { path: 'kegiatans/:kegiatan_id/:level_1_id', component: () => import('pages/DashboardKegiatanPage.vue') },
    ]
  },
  {
    path: '/home',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: 'beranda', component: () => import('pages/BerandaPage.vue') },
    ]
  },
  {
    path: '/form',
    component: () => import('layouts/FormLayout.vue'),
    children: [
      { path: 'kegiatans/:kegiatan_id/respondens/:responden_id', component: () => import('pages/BerandaPage.vue') },
    ]
  },
  {
    path: '/auth/google/callback',
    component: () => import('pages/GoogleCallback.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
