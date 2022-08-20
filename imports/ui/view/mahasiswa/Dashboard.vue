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
          to="/mahasiswa"
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">DaMA</div>
        </router-link>

        <!-- Divider -->
        <hr class="sidebar-divider my-0" />

        <!-- Nav Item - Dashboard -->
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'mahasiswa.dashboard' }">
            <i class="fas fa-fw fa-user-alt"></i>
            <span>Profile Mahasiswa</span></router-link
          >
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider" />

        <!-- Heading -->
        <div class="sidebar-heading">Layanan</div>

        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'mahasiswa.pengaduansarana' }"
          >
            <i class="fas fa-briefcase"></i>
            <span>Pengaduan Sarana</span></router-link
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
            <h1 class="h3 mb-4 text-gray-800">Profile Mahasiswa</h1>

            <div class="row">
              <div class="col-6">
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <th class="pr-5">Nama</th>
                      <td>{{ mahasiswa[0].nama }}</td>
                    </tr>
                    <tr>
                      <th class="pr-5">NRP</th>
                      <td>{{ mahasiswa[0].nrp }}</td>
                    </tr>
                    <tr>
                      <th class="pr-5">Nomer Telepon</th>
                      <td>{{ mahasiswa[0].nomer_telp }}</td>
                    </tr>
                    <tr>
                      <th class="pr-5">E-Mail</th>
                      <td>{{ mahasiswa[0].email }}</td>
                    </tr>
                    <tr>
                      <th class="pr-5">Alamat</th>
                      <td>{{ mahasiswa[0].alamat }}</td>
                    </tr>
                  </tbody>
                </table>
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
import Mahasiswa from "../../../api/collections/Mahasiswa";
import { Meteor } from "meteor/meteor";
import { mapGetters, mapMutations } from "vuex";
export default {
  meteor: {
    $subscribe: {
      mahasiswa: [],
    },
    mahasiswa() {
      return Mahasiswa.find({_id: this.user.profile.id_mahasiswa}).fetch();
    },
  },
  computed: {
    ...mapGetters({
      user: "auth/checkUser",
    }),
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
  },
};
</script>

<style>
</style>
