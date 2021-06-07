<template>
  <section align="center" id="projects">
    <br /><br /><br /><br />
    <v-row>
      <v-col lg="2" md="1" sm="1" cols="auto"></v-col>
      <v-col lg="8" md="10" sm="10" cols="12">
        <div id="content" align="center">
          <div id="rows">
            <CoolLightBox
              :items="items"
              :index="index"
              :effect="'fade'"
              @close="index = null"
            >
            </CoolLightBox>

            <div class="images-wrapper">
              <v-tooltip
                bottom
                color="#9564CE"
                v-for="(image, imageIndex) in items"
                :key="imageIndex"
                @click="index = imageIndex"
              >
                <template v-slot:activator="{ on, attrs }">
                  <img 
                  class="image"
                  :src="image.src"
                  v-bind="attrs"
                  v-on="on"
                /></template>
                <span>{{ image.title }}</span>
              </v-tooltip>
            </div>
          </div>
        </div>
      </v-col>
      <v-col lg="2" md="1" sm="1" cols="auto"></v-col>
    </v-row>
    <br /><br /><br /><br /><br /><br />
  </section>
</template>

<script>
export default {
  props: ["projects"],
  data() {
    return {
      //   proj: [],
      items: [],
      index: null,
    };
  },
  methods: {
    redirect(k) {
      window.open(k, "_blank");
    },
  },
  created() {
    // this.proj = this.projects;
    this.items = this.projects;
  },
};
</script>
<style lang="scss" scoped>
@import "./projects.scss";
</style>