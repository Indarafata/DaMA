import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

// Admin
import AdminDashboard from "../view/admin/Dashboard.vue";
import AdminDataMahasiswa from "../view/admin/DataMahasiswa.vue";
import AdminDataPengaduan from "../view/admin/DataPengaduan.vue";
import Login from "../view/auth/Login.vue";

// Mahasiswa
import MahasiswaDashboard from "../view/mahasiswa/Dashboard.vue";
import MahasiswaPengaduanSarana from "../view/mahasiswa/PengaduanSarana.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
    meta: {
      guest: true,
    },
  },
  
  {
    path: "/admin",
    name: "admin.dashboard",
    component: AdminDashboard,
    meta: {
      auth: true,
      isAdmin: true,
    },
  },
  {
    path: "/admin/data-mahasiswa",
    name: "admin.datamahasiswa",
    component: AdminDataMahasiswa,
    meta: {
      auth: true,
      isAdmin: true,
    },
  },
  {
    path: "/admin/data-pengaduan-sarana",
    name: "admin.datapengaduansarana",
    component: AdminDataPengaduan,
    meta: {
      auth: true,
      isAdmin: true,
    },
  },

  {
    path: "/mahasiswa",
    name: "mahasiswa.dashboard",
    component: MahasiswaDashboard,
    meta: {
      auth: true,
      isMahasiswa: true,
    },
  },
  {
    path: "/mahasiswa/pengaduan-sarana",
    name: "mahasiswa.pengaduansarana",
    component: MahasiswaPengaduanSarana,
    meta: {
      auth: true,
      isMahasiswa: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters["auth/checkAuth"]) next({ name: "login" });
  else next();

  if (to.meta.guest && store.getters["auth/checkAuth"]) {
    if (store.getters["auth/checkUser"].profile.role == "admin")
      next({ name: "admin.dashboard" });
    else next({ name: "mahasiswa.dashboard" });
  } else next();
});

export default router;
