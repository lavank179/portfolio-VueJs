<template>
  <section align="center" id="skills">
    <br /><br /><br /><br /><br /><br />
    <v-row>
      <v-col lg="2" md="1" sm="1" cols="auto"></v-col>
      <v-col lg="8" md="10" sm="10" cols="12">
        <div id="content">
          <div id="rows">
            <v-list-item
              v-for="(val, index) in skills"
              :key="index"
              class="d-inline"
            >
              <img
                class="hover-item"
                width="55px"
                :src="'./src/assets/skill-icons/' + val + '.png'"
              />
            </v-list-item>
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
  props: ["skillset"],
  data() {
    return {
      skills: [],
    };
  },
  methods: {},
  created() {
    this.skills = this.skillset;
  },
};
</script>
<style lang="scss" scoped>
@use "./skills.scss";
</style>