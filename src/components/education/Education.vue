<template>
  <section align="center" id="about">
    <v-row>
      <v-col lg="4" md="4" sm="12" cols="12" align="center"> </v-col>
      <v-col lg="8" md="8" sm="12" cols="12"> </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  props: ['education'],
  data() {
    return {
        edu: []
    };
  },
  methods: {},
  created(){
      this.edu = this.education;
  }
};
</script>
<style lang="scss" scoped>
@import "education.scss";
</style>