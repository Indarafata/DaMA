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
            <h1 class="h3 text-gray-800">Data Mahasiswa</h1>
            <div class="d-flex mb-4">
              <button
                class="btn btn-primary rounded"
                data-toggle="modal"
                data-target="#modalTambahMahasiswa"
              >
                Tambah Mahasiswa
              </button>
            </div>
            <div class="row">
              <div class="col-md-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>NRP</th>
                      <th>Nama Mahasiswa</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in mahasiswa" :key="item._id">
                      <td>{{ index + 1 }}</td>
                      <td>{{ item.nrp }}</td>
                      <td>{{ item.nama }}</td>
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
                            class="btn btn-sm rounded btn-warning mx-2"
                            data-toggle="modal"
                            data-target="#modalEditMahasiswa"
                            @click.prevent="handlingGetEdit(item)"
                          >
                            Edit
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
                          <th class="pr-5">Nama Mahasiswa</th>
                          <td>{{ detailMhs.nama }}</td>
                        </tr>
                        <tr>
                          <th class="pr-5">NRP</th>
                          <td>{{ detailMhs.nrp }}</td>
                        </tr>
                        <tr>
                          <th class="pr-5">E-Mail</th>
                          <td>{{ detailMhs.email }}</td>
                        </tr>
                        <tr>
                          <th class="pr-5">Alamat</th>
                          <td>{{ detailMhs.alamat }}</td>
                        </tr>
                        <tr>
                          <th class="pr-5">Nomer Telepon</th>
                          <td>{{ detailMhs.nomer_telp }}</td>
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

            <!-- Modal Tambah Mahasiswa -->
            <div
              class="modal fade"
              id="modalTambahMahasiswa"
              tabindex="-1"
              aria-labelledby="modalTambahMahasiswaLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Tambah Mahasiswa
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
                  <form autocomplete="false">
                    <div class="modal-body">
                      <div class="mb-3">
                        <label for="nama">Nama Mahasiswa</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.nama"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="nama">NRP</label>
                        <input
                          type="number"
                          class="form-control"
                          v-model="form.nrp"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="nama">Nomer Telepon</label>
                        <input
                          type="number"
                          class="form-control"
                          v-model="form.nomer_telp"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="nama">E-Mail</label>
                        <input
                          type="email"
                          class="form-control"
                          v-model="form.email"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="nama">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          v-model="form.password"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="nama">Alamat</label>
                        <textarea
                          type="text"
                          class="form-control"
                          rows="3"
                          v-model="form.alamat"
                        ></textarea>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                        @click.prevent="handlingClose"
                      >
                        Tutup
                      </button>
                      <button
                        type="submit"
                        class="btn btn-success"
                        data-dismiss="modal"
                        @click.prevent="handlingCreate"
                      >
                        Simpan Data
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <!-- Modal Edit Mahasiswa -->
            <div
              class="modal fade"
              id="modalEditMahasiswa"
              tabindex="-1"
              aria-labelledby="modalEditMahasiswaLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Edit Data Mahasiswa
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
                  <form autocomplete="false">
                    <div class="modal-body">
                      <div class="mb-3">
                        <label for="nama">Nama Mahasiswa</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.nama"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="nama">NRP</label>
                        <input
                          type="number"
                          class="form-control"
                          v-model="form.nrp"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="nama">Nomer Telepon</label>
                        <input
                          type="number"
                          class="form-control"
                          v-model="form.nomer_telp"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="nama">Alamat</label>
                        <textarea
                          type="text"
                          class="form-control"
                          rows="3"
                          v-model="form.alamat"
                        ></textarea>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                        @click.prevent="handlingClose"
                      >
                        Tutup
                      </button>
                      <button
                        type="submit"
                        class="btn btn-success"
                        data-dismiss="modal"
                        @click.prevent="handlingEdit"
                      >
                        Edit Data
                      </button>
                    </div>
                  </form>
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
            <a class="btn btn-primary" href="#" @click.prevent="handleLogOut" data-dismiss="modal"
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
  computed: {
    ...mapGetters({
      user: "auth/checkUser",
    }),
  },
  data() {
    return {
      id: "",
      form: {
        nrp: "",
        nama: "",
        alamat: "",
        nomer_telp: "",
        email: "",
        password: "",
      },
      detailMhs: {
        nama: "",
        nrp: "",
        alamat: "",
        nomer_telp: "",
        email: "",
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
    handlingClose() {
      this.id = "";
      this.form.nama = "";
      this.form.nrp = "";
      this.form.alamat = "";
      this.form.nomer_telp = "";
    },
    handlingDetail(mahasiswa) {
      this.detailMhs.nama = mahasiswa.nama;
      this.detailMhs.nrp = mahasiswa.nrp;
      this.detailMhs.alamat = mahasiswa.alamat;
      this.detailMhs.nomer_telp = mahasiswa.nomer_telp;
      this.detailMhs.email = mahasiswa.email;
    },
    handlingGetEdit(mahasiswa) {
      this.id = mahasiswa._id;
      this.form.nama = mahasiswa.nama;
      this.form.nrp = mahasiswa.nrp;
      this.form.alamat = mahasiswa.alamat;
      this.form.nomer_telp = mahasiswa.nomer_telp;
    },
    handlingEdit() {
      Meteor.call(
        "editMahasiswa",
        this.id,
        this.form.nrp,
        this.form.nama,
        this.form.alamat,
        this.form.nomer_telp,
        (error) => {
          if (error) console.log(error);
          else {
            this.id = "";
            this.form.nama = "";
            this.form.nrp = "";
            this.form.alamat = "";
            this.form.nomer_telp = "";
          }
        }
      );
    },
    handlingCreate() {
      Meteor.call(
        "tambahMahasiswa",
        this.form.nrp,
        this.form.nama,
        this.form.alamat,
        this.form.nomer_telp,
        this.form.email,
        this.form.password,
        (error) => {
          if (error) console.log(error);
          else {
            this.form.nama = "";
            this.form.nrp = "";
            this.form.alamat = "";
            this.form.nomer_telp = "";
            this.form.email = "";
            this.form.password = "";
          }
        }
      );
    },
    handlingDelete(id) {
      Meteor.call("hapusMahasiswa", id);
    },
  },
  meteor: {
    $subscribe: {
      mahasiswa: [],
    },
    mahasiswa() {
      return Mahasiswa.find({}).fetch();
    },
  },
};
</script>

<style>
</style>
