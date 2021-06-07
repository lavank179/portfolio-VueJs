<template>
  <section align="center" id="education">
    <v-row>
      <v-col lg="1" md="1" sm="1" cols="1"></v-col>
      <v-col lg="10" md="10" sm="10" cols="10">
        <div id="content">
          <div v-for="(val, key) in exp" :key="key" id="rows">
            <v-row>
              <v-col lg="10" md="10" sm="10" cols="12" align="left">
                <p>{{ key }}, {{ val }}</p>
                <p>{{ val }}</p>
                <br />
                <p>{{ val.Department }}</p>
                <p>Secured : {{ val }}</p>
              </v-col>
              <v-col lg="2" md="2" sm="2" cols="12" align="left">
                <h4>{{ val }}</h4>
              </v-col>
            </v-row>
            <hr>
          </div>
        </div>
      </v-col>
      <v-col lg="1" md="1" sm="1" cols="1"></v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  props: ["experience"],
  data() {
    return {
      exp: [],
    };
  },
  methods: {},
  created() {
    this.exp = this.experience;
  },
};
</script>
<style lang="scss" scoped>
@import "./experience.scss";
</style>