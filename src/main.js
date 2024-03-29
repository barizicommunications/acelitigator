
import Vue from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import DefaultLayout from './layouts/Default.vue'
import DashboardLayout from './layouts/Dashboard.vue'
import DashboardRTLLayout from './layouts/DashboardRTL.vue'
import router from './router'
import VueSocialSharing from 'vue-social-sharing'

// import './plugins/click-away'

import './scss/app.scss';
import '../public/home/css/style.css'
import '../public/home/css/nice-select.css'
import "../public/home/js/main.js"
import '../public/home/css/themify-icons.css'
import '../public/home/css/elegant-icons.css'

import store from './store'
import { auth } from "./firebase";

Vue.use(Antd);
Vue.use(VueSocialSharing);

Vue.config.productionTip = false

// Adding template layouts to the vue components.
Vue.component("layout-default", DefaultLayout);
Vue.component("layout-dashboard", DashboardLayout);
Vue.component("layout-dashboard-rtl", DashboardRTLLayout);

let app;
auth.onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
  if (user) {
    store.dispatch("fetAllAdvocates")
  }
  store.dispatch("fetAllAdvocates")
  store.dispatch("fetchUserProfile")
});