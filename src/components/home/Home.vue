<template>
  <section align="center" id="home">
    <div id="title">
      <p>Hi, I'm {{ personal.firstName }}.</p>
      <app-designation></app-designation>
    </div>
    <div id="socialIcons">
      <v-list-item
        v-for="(val, i) in social"
        class="d-inline"
        :key="i"
        @mouseenter="fadeIn($event)"
        @mouseleave="fadeOut($event)"
      >
        <i :class="val.icon" class="hover-item" @click="redirect(val.link)"></i>
      </v-list-item>
    </div>
    <div align="center">
      <v-img
        src="https://img.icons8.com/fluent/48/000000/long-arrow-down.png"
        alt="fluent-down-arrow"
        id="down-arrow"
      ></v-img>
    </div>
  </section>
</template>

<script>
import Designation from "./Designation";
export default {
  props: ["details"],
  data() {
    return {
      personal: [],
      social: [],
    };
  },
  components: {
    appDesignation: Designation,
  },
  methods: {
    fadeIn(e) {
      e.target.style.opacity = "0.7";
    },
    fadeOut(e) {
      e.target.style.opacity = "1";
    },
    redirect(k){
        window.open(k, '_blank');
    }
  },
  created() {
      this.social = this.details.socialAccounts;
      this.personal = this.details.personal;
  },
};
</script>
<style lang="scss" scoped>
@import "home.scss";
</style>