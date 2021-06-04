<template>
  <section align="center" id="home">
    <div id="title">
      <p>Hi, I'm Lavan Kumar.</p>
      <app-designation></app-designation>
    </div>
    <div id="socialIcons">
      <v-list-item
        v-for="(icon, i) in socialIcons"
        class="d-inline"
        :key="i"
        @mouseenter="fadeIn($event)"
        @mouseleave="fadeOut($event)"
        v-bind:href="social"
      >
        <i :class="icon" class="hover-item"></i>
      </v-list-item>
    </div>
    <div align="center">
    <v-img src="https://img.icons8.com/fluent/48/000000/long-arrow-down.png" alt="fluent-down-arrow" id="down-arrow"></v-img>
    </div>
  </section>
</template>

<script>
import Designation from "./designation.vue";

export default {
  props: ['details'],
  data() {
    return {
      socialIcons: [
        { icon: "fab fa-instagram fa-2x"},
        { icon: "fab fa-facebook-square fa-2x"},
        { icon: "fab fa-linkedin fa-2x"},
        { icon: "fab fa-github fa-2x"},
        { icon: "far fa-envelope fa-2x"},
      ],
      personal: this.details.personal,
      social: this.details.socialAccounts,
    };
  },
  components: {
    appDesignation: Designation,
  },
  methods: {
    fadeIn(e){
      e.target.style.opacity = '0.7';
    },
    fadeOut(e){
      e.target.style.opacity = '1';
    }
  },
  created(){
    for (let i=0; i < this.socialIcons.length;i++){
      // console.log(this.socialIcons[i].icon);
      this.socialIcons[i][2].push();
    }
  }
};
</script>
<style lang="scss" scoped>
@import "home.scss";
</style>