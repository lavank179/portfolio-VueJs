import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // path to vuetify export
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import axios from "axios"
import VueSmoothScroll from 'vue2-smooth-scroll'

async function detailL() {
  let d = [];
  d = await axios
    .get("https://lavan-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/0.json")
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      return data;
    });

  Vue.use(CoolLightBox);
  Vue.use(VueSmoothScroll, {
    duration: 2000,
    updateHistory: false
  });


  new Vue({
    el: '#app',
    vuetify,
    template: '<App v-bind:det="detailLs" />',
    components: { App },
    data: { detailLs: d }
  });
}

detailL();