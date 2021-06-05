<template>
  <section align="center" id="education">
    <v-row>
      <v-col lg="1" md="1" sm="1" cols="1"></v-col>
      <v-col lg="10" md="10" sm="10" cols="10">
        <div id="content">
          <v-row v-for="(val, key) in edu" :key="key" id="rows">
            <v-col lg="10" md="10" sm="10" cols="12" align="left">
              <p>{{ key }}, {{ val.city }}</p>
              <p>{{ val.Degree }}</p>
              <br />
              <p>{{ val.Department }}</p>
              <p>Secured : {{ val.Marks }}</p>
            </v-col>
            <v-col lg="2" md="2" sm="2" cols="12" align="left">
              <h4>{{ val.Duration }}</h4>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col lg="1" md="1" sm="1" cols="1"></v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  props: ["education"],
  data() {
    return {
      edu: [],
    };
  },
  methods: {},
  created() {
    this.edu = this.education;
  },
};
</script>
<style lang="scss" scoped>
@import "./education.scss";
</style>