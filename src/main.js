import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // path to vuetify export
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import axios from "axios"

async function detailL() {
  let d = [];
  d = await axios
    .get("./src/assets/details.json")
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      return data;
    });

  Vue.use(CoolLightBox);


  new Vue({
    el: '#app',
    vuetify,
    template: '<App v-bind:det="detailLs" />',
    components: { App },
    data: { detailLs: d }
  });
}

detailL();