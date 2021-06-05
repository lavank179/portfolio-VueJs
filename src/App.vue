<template>
  <v-app id="app">
    <v-card id="navbar">
      <v-toolbar style="background: none" id="toolbar" flat>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-lg-none"
          ><i class="fas fa-bars fa-lg"></i
        ></v-app-bar-nav-icon>

        <v-btn-toggle mandatory tile group class="d-none d-lg-block">
          <v-btn
            v-for="(nav, index) in navs"
            :key="index"
            class="toggle-btns"
            >{{ nav.name }}</v-btn
          >
        </v-btn-toggle>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon id="logo" width="30px"
          ><v-img src="./src/assets/logo.png" width="30px"></v-img
        ></v-app-bar-nav-icon>
      </v-toolbar>
    </v-card>

    <v-navigation-drawer v-model="drawer" absolute temporary id="sidebar">
      <v-card flat outlined class="rounded-0">
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title
              >{{ detail[0].personal.firstName }}
              {{ detail[0].personal.lastName }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item-group active-class="deep-purple--text text--accent-4">
            <v-list-item v-for="(nav, index) in navs" :key="index">
              <v-list-item-icon>
                <v-icon style="font-size: 20px">{{ nav.icons }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ nav.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-main>
      <app-home v-bind:details="detail[0]"></app-home>
      <hr />
      <h2>About Me</h2>
      <app-about v-bind:bio="detail[0].personal.bio"></app-about>
      <hr />
      <h2>Education</h2>
      <app-education v-bind:education="detail[0].education"></app-education>
      <hr />
      <h2>Skills</h2>
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/home/Home.vue";
import About from "./components/about/About.vue";
import Education from "./components/education/Education.vue";
import Footer from "./components/footer/Footer.vue";
import axios from "axios";

export default {
  data() {
    return {
      navs: {
        1: { name: "Home", icons: "fas fa-home fa-sm" },
        2: { name: "About", icons: "far fa-address-card fa-lg" },
        3: { name: "Education", icons: "fas fa-graduation-cap fa-lg" },
        4: { name: "Skills", icons: "fas fa-tags fa-lg" },
        5: { name: "Projects", icons: "fas fa-laptop-code fa-lg" },
        6: { name: "Contact", icons: "far fa-comment-alt fa-lg" },
        7: { name: "Login", icons: "fas fa-sign-in-alt fa-lg" },
      },
      drawer: false,
      detail: [],
    };
  },
  components: {
    appHome: Home,
    appAbout: About,
    appEducation: Education,
    appFooter: Footer,
  },
  created() {
    axios
      .get("./src/assets/details.json")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        this.detail = data;
      });
  },
};
</script>

<style lang="scss" scoped>
@import "./assets/app.scss";
</style>