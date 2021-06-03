<template>
  <section align="center" id="home">
    <div id="title">
      <p>Hi, I'm Lavan Kumar</p>
      <app-designation></app-designation>
    </div>
    <div>
      <v-list-item
        v-for="(icon, i) in socialIcons"
        class="d-inline"
        :key="i"
        id="socialIcons"
      >
        <i :class="icon" class="hover-item"></i>
      </v-list-item>
    </div>
  </section>
</template>

<script>
import Designation from "./designation.vue";
export default {
  data() {
    return {
      socialIcons: [
        "fab fa-instagram fa-2x",
        "fab fa-facebook-square fa-2x",
        "fab fa-linkedin fa-2x",
        "fab fa-github fa-2x",
        "far fa-envelope fa-2x",
      ],
    };
  },
  components: {
    appDesignation: Designation,
  },
};
</script>
<style lang="scss" scoped>
@import "home.scss";
</style>