import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // path to vuetify export
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import VueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(CoolLightBox);
Vue.use(VueSmoothScroll);

new Vue({
  el: '#app',
  vuetify,
  render: h => h(App)
})
