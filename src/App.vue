<template>
  <v-app id="app">
    <v-card id="navbar">
      <v-toolbar style="background: none" id="toolbar" flat>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-lg-none"
          ><i class="fas fa-bars fa-lg"></i
        ></v-app-bar-nav-icon>

        <v-btn-toggle mandatory tile group class="d-none d-lg-block">
          <v-btn class="toggle-btns" v-for="(nav, index) in navs" :key="index"
            ><a :href="'#' + nav.name" v-smooth-scroll>
              {{ nav.name }}</a
            ></v-btn
          >
        </v-btn-toggle>
        <v-spacer></v-spacer>
        <div id="logo" width="40px" class="pr-6" :href="'#Home'" v-smooth-scroll 
          ><v-img src="./src/assets/logo1.png" width="40px"></v-img
        ></div>
      </v-toolbar>
    </v-card>

    <v-navigation-drawer v-model="drawer" absolute temporary id="sidebar">
      <v-card flat outlined class="rounded-0">
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="./src/assets/images/lavan.jpeg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ fName }} {{ lName }}</v-list-item-title>
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
                <v-list-item-title :href="'#' + nav.name" v-smooth-scroll>
                  {{ nav.name }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-main id="Home">
      <app-home v-bind:details="detail"></app-home>
      <div id="About"></div>
      <hr />
      <h2>About Me</h2>
      <app-about v-bind:bio="detail.personal" title="Hover to see magic"></app-about>
      <div id="Education"></div>
      <hr />
      <h2>Education</h2>
      <app-education v-bind:education="detail.education"></app-education>
      <div id="Skills"></div>
      <hr />
      <h2>Skills</h2>
      <app-skills v-bind:skillset="detail.skills"></app-skills>
      <div id="Projects"></div>
      <hr />
      <h2>My Projects</h2>
      <app-projects v-bind:projects="detail.projects"></app-projects>
      <div id="Experience"></div>
      <hr />
      <h2>Experience</h2>
      <app-experience v-bind:experience="detail.experience"></app-experience>
      <div id="Contact"></div>
      <hr />
      <h2>Contact</h2>
      <app-contact v-bind:contact="detail.contact"></app-contact>
      <app-footer v-bind:ico="detail.socialAccounts"></app-footer>
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/home/Home.vue";
import About from "./components/about/About.vue";
import Education from "./components/education/Education.vue";
import Skills from "./components/skills/Skills.vue";
import Projects from "./components/projects/Projects.vue";
import Experience from "./components/experience/Experience.vue";
import Contact from "./components/contact/Contact.vue";
import Footer from "./components/footer/Footer.vue";

export default {
  props: ['det'],
  data() {
    return {
      navs: {
        1: { name: "Home", icons: "fas fa-home fa-sm", id: "#home" },
        2: { name: "About", icons: "far fa-address-card fa-lg", id: "#about" },
        3: {
          name: "Education",
          icons: "fas fa-graduation-cap fa-lg",
          id: "#education",
        },
        4: { name: "Skills", icons: "fas fa-tags fa-lg", id: "#skills" },
        5: {
          name: "Projects",
          icons: "fas fa-laptop-code fa-lg",
          id: "#projects",
        },
        6: {
          name: "Experience",
          icons: "fas fa-laptop-code fa-lg",
          id: "#experience",
        },
        7: {
          name: "Contact",
          icons: "far fa-comment-alt fa-lg",
          id: "#contact",
        },
        8: { name: "Login", icons: "fas fa-sign-in-alt fa-lg", id: "#" },
      },
      drawer: false,
      detail: [],
      fName: "",
      lName: "",
    };
  },
  components: {
    appHome: Home,
    appAbout: About,
    appEducation: Education,
    appSkills: Skills,
    appProjects: Projects,
    appExperience: Experience,
    appContact: Contact,
    appFooter: Footer,
  },
  created() {
    this.detail = this.det;
    this.fName = this.detail.personal.firstName;
    this.lName = this.detail.personal.lastName;
  },
};
</script>

<style lang="scss" scoped>
@use "app.scss";
</style>