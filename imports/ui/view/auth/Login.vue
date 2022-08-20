<template>
  <div class="bg-gradient-primary vh-100">
    <div class="container">
      <!-- Outer Row -->
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <!-- Nested Row within Card Body -->
              <div class="row">
                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form class="user" autocomplete="false" @submit.prevent="handleLogin">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          v-model="email"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          v-model="password"
                        />
                      </div>
                      <button
                        type="submit"
                        class="btn btn-primary btn-user btn-block"
                      >
                        Login
                      </button>
                    </form>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        ...mapMutations({
            setAuth: 'auth/SET_AUTHENTICATED',
            setUser: 'auth/SET_USER',
        }),
        handleLogin() {
            Meteor.loginWithPassword({email: this.email}, this.password, (error) => {
                if(error) console.log(error)
                else {
                    const user = Meteor.user();
                    this.setAuth(true);
                    this.setUser(user);
                    if(user.profile.role == "admin"){
                      this.$router.replace({name: 'admin.dashboard'});
                    } else {
                      this.$router.replace({name: 'mahasiswa.dashboard'});
                    }
                }
            });
        }
    }
};
</script>

<style>
</style>