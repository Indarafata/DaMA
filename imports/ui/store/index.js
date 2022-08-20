import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";

Vue.use(Vuex);

const secureLS = new SecureLS({
  encodingType: "aes",
  encryptionSecret: "vue-auth-persist",
});

const authState = createPersistedState({
  key: "auth-persist-state",
  paths: ["auth.user", "auth.authenticated"],
  storage: {
    getItem: (key) => secureLS.get(key),
    setItem: (key, value) => secureLS.set(key, value),
    removeItem: (key) => secureLS.remove(key),
  },
});

export default new Vuex.Store({
  modules: {
    auth,
  },
  plugins: [authState],
});
