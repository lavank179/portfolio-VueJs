<template>
  <v-footer dark padless id="fo">
    <v-card class="flex" flat tile style="background-color: #9564ce">
      <v-card-title align="center">
        <strong class="subheading text-center"
          >Connect with me on social network</strong
        >

        <v-spacer></v-spacer>
        <div id="socialIcons2">
          <v-list-item
            v-for="(val, i) in social"
            class="d-inline"
            :key="i"
            @mouseenter="fadeIn($event)"
            @mouseleave="fadeOut($event)"
          >
            <i
              :class="val.icon2"
              class="hover-item2"
              @click="redirect(val.link)"
            ></i>
          </v-list-item>
        </div>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong> Lavan Kumar CH</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  props: ["ico"],
  data: () => ({
    social: [],
  }),
  methods: {
    fadeIn(e) {
      e.target.style.opacity = "0.7";
    },
    fadeOut(e) {
      e.target.style.opacity = "1";
    },
    redirect(k) {
      window.open(k, "_blank");
    },
  },
  created() {
    this.social = this.ico;
  },
};
</script>

<style lang="scss">
.hover-item2 {
  &:hover {
    cursor: pointer;
  }
}
</style>