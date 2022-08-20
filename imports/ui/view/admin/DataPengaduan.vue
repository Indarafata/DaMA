<template>
  <div id="page-top">
    <!-- Page Wrapper -->
    <div id="wrapper">
      <!-- Sidebar -->
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <!-- Sidebar - Brand -->
        <router-link
          class="sidebar-brand d-flex align-items-center justify-content-center"
          to="/admin"
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">DaMA<sup>Admin</sup></div>
        </router-link>

        <!-- Divider -->
        <hr class="sidebar-divider my-0" />

        <!-- Nav Item - Dashboard -->
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'admin.dashboard' }">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></router-link
          >
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider" />

        <!-- Heading -->
        <div class="sidebar-heading">Master Data</div>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'admin.datamahasiswa' }">
            <i class="fas fa-users"></i>
            <span>Data Mahasiswa</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'admin.datapengaduansarana' }"
          >
            <i class="fas fa-briefcase"></i>
            <span>Data Pengaduan Sarana</span></router-link
          >
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block" />
      </ul>
      <!-- End of Sidebar -->

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <!-- Topbar -->
          <nav
            class="
              navbar navbar-expand navbar-light
              bg-white
              topbar
              mb-4
              static-top
              shadow
            "
          >
            <!-- Sidebar Toggle (Topbar) -->
            <button
              id="sidebarToggleTop"
              class="btn btn-link d-md-none rounded-circle mr-3"
            >
              <i class="fa fa-bars"></i>
            </button>

            <!-- Topbar Navbar -->
            <ul class="navbar-nav ml-auto">
              <div class="topbar-divider d-none d-sm-block"></div>

              <!-- Nav Item - User Information -->
              <li class="nav-item dropdown no-arrow">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{
                    user.profile.name
                  }}</span>
                  <img
                    class="img-profile rounded-circle"
                    :src="
                      'https://ui-avatars.com/api/?name=' +
                      user.profile.name +
                      '&background=FFFF00'
                    "
                  />
                </a>
                <!-- Dropdown - User Information -->
                <div
                  class="
                    dropdown-menu dropdown-menu-right
                    shadow
                    animated--grow-in
                  "
                  aria-labelledby="userDropdown"
                >
                  <a
                    class="dropdown-item"
                    href="#"
                    data-toggle="modal"
                    data-target="#logoutModal"
                  >
                    <i
                      class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
                    ></i>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <!-- End of Topbar -->

          <!-- Begin Page Content -->
          <div class="container-fluid">
            <!-- Page Heading -->
            <h1 class="h3 text-gray-800">Data Pengaduan Sarana</h1>
            <div class="row">
              <div class="col-md-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Isi Pengaduan</th>
                      <th>Lokasi Pengaduan</th>
                      <th>Status Pengaduan</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in pengaduan" :key="item._id">
                      <td>{{ index + 1 }}</td>
                      <td>{{ item.isi_pengaduan }}</td>
                      <td>{{ item.lokasi_pengaduan }}</td>
                      <td v-if="item.status">
                        <span class="badge bg-success text-white">Selesai</span>
                      </td>
                      <td v-else>
                        <span class="badge bg-warning text-white"
                          >Belum Selesai</span
                        >
                      </td>
                      <td>
                        <div class="d-flex">
                          <button
                            class="btn btn-sm rounded btn-success"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            @click="handlingDetail(item)"
                          >
                            Detail
                          </button>
                          <button
                            class="btn btn-sm rounded btn-primary mx-2"
                            data-toggle="modal"
                            data-target="#modalEditMahasiswa"
                            v-if="!item.status"
                            @click.prevent="
                              handlingKonfirmasi(item._id, item.status)
                            "
                          >
                            Konfirmasi Selesai
                          </button>
                          <button
                            class="btn btn-sm rounded btn-warning mx-2"
                            data-toggle="modal"
                            data-target="#modalEditMahasiswa"
                            v-if="item.status"
                            @click.prevent="
                              handlingKonfirmasi(item._id, item.status)
                            "
                          >
                            Batal Konfirmasi
                          </button>
                          <button
                            class="btn btn-sm rounded btn-danger"
                            @click="handlingDelete(item._id)"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- Modal Detail -->
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Detail Mahasiswa
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <table>
                        <tbody>
                          <tr>
                            <th class="pr-5">Isi Pengaduan</th>
                            <td>{{ detailPengaduan.isi_pengaduan }}</td>
                          </tr>
                          <tr>
                            <th class="pr-5">Lokasi Pengaduan</th>
                            <td>{{ detailPengaduan.lokasi_pengaduan }}</td>
                          </tr>
                          <tr>
                            <th class="pr-5">Foto Pengaduan</th>
                            <td>{{ detailPengaduan.image }}</td>
                          </tr>
                          <tr>
                            <th class="pr-5">Status Pengaduan</th>
                            <td v-if="detailPengaduan.status">
                              <span class="badge bg-success text-white"
                                >Selesai</span
                              >
                            </td>
                            <td v-else>
                              <span class="badge bg-warning text-white"
                                >Belum Selesai</span
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Tutup
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <footer class="sticky-footer bg-white">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Copyright &copy; DaMA 2021</span>
            </div>
          </div>
        </footer>
        <!-- End of Footer -->
      </div>
      <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div
      class="modal fade"
      id="logoutModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button
              class="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            Select "Logout" below if you are ready to end your current session.
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-secondary"
              type="button"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <a
              class="btn btn-primary"
              href="#"
              @click.prevent="handleLogOut"
              data-dismiss="modal"
              >Logout</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pengaduan from "../../../api/collections/Pengaduan";
import { Meteor } from "meteor/meteor";
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters({
      user: "auth/checkUser",
    }),
  },
  data() {
    return {
      id: "",
      detailPengaduan: {
        isi_pengaduan: "",
        lokasi_pengaduan: "",
        image: "",
        status: "",
      },
    };
  },
  methods: {
    ...mapMutations({
      setAuth: "auth/SET_AUTHENTICATED",
      setUser: "auth/SET_USER",
    }),
    handleLogOut() {
      Meteor.logout((error) => {
        if (error) console.log(error);
        else {
          this.setAuth(false);
          this.setUser([]);
          this.$router.replace({ name: "login" });
        }
      });
    },
    handlingDetail(pengaduan) {
      this.detailPengaduan.isi_pengaduan = pengaduan.isi_pengaduan;
      this.detailPengaduan.lokasi_pengaduan = pengaduan.lokasi_pengaduan;
      this.detailPengaduan.image = pengaduan.image;
      this.detailPengaduan.status = pengaduan.status;
    },
    handlingKonfirmasi(id, status) {
      Meteor.call("konfirmasiPengaduan", id, status, (error) => {
        if (error) console.log(error);
      });
    },
    handlingDelete(id) {
      Meteor.call("hapusPengaduan", id);
    },
  },
  meteor: {
    $subscribe: {
      pengaduan: [],
    },
    pengaduan() {
      return Pengaduan.find({}).fetch();
    },
  },
};
</script>

<style>
</style>
