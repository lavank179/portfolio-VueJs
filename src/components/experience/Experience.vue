<template>
  <section align="center" id="experience">
    <br /><br /><br />
    <v-row>
      <v-col lg="1" md="1" sm="1" cols="1"></v-col>
      <v-col lg="10" md="10" sm="10" cols="10">
        <div id="content">
          <div id="rows">
            <v-expansion-panels style="z-index: 0">
              <v-expansion-panel v-for="(val, key) in exp" :key="key">
                <v-expansion-panel-header title="Click to Expand">
                  <p><i class="fa fa-angle-down fa-lg"></i> &nbsp; {{ val.role }}</p> 
                  {{ val.city }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row>
                    <v-col lg="10" md="10" sm="10" cols="12" align="left">
                      <br>
                      <p>{{ key }} &nbsp; - &nbsp; {{ val.type }}</p>
                      <br />
                      <ul v-for="(desc, key) in val.description" :key="key">
                        <li>{{ desc }}</li>
                      </ul>
                    </v-col>
                    <v-col lg="2" md="2" sm="2" cols="12" align="left">
                      <br>
                      <h4>{{ val.duration }}</h4>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <hr />
          </div>
        </div>
      </v-col>
      <v-col lg="1" md="1" sm="1" cols="1"></v-col>
    </v-row>
    <br /><br /><br />
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
@use "./experience.scss";
</style>