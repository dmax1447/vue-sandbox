import Vue from 'vue';
import VueWait from 'vue-wait';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(VueWait);

new Vue({
  router,
  store,
  vuetify,
  wait: new VueWait({
    useVuex: true,
    registerComponent: true,
    registerDirective: true,
  }),
  render: (h) => h(App),
}).$mount('#app');
