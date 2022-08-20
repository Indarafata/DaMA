import Vue from "vue";

import "../imports/ui/plugins";
import router from "../imports/ui/router";
import store from "../imports/ui/store";

import App from "../imports/ui/App.vue";

Meteor.startup(() => {
  new Vue({
    el: "#app",
    store,
    router,
    ...App,
  });
});
