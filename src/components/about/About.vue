<template>
  <section align="center" id="about">
    <v-row>
      <v-col lg="4" md="4" sm="12" cols="12" align="center">
        <v-img
          src="./src/assets/images/lavan.jpeg"
          alt="lavan kumar ch"
          id="profile-pic"
        ></v-img>
      </v-col>
      <v-col lg="8" md="8" sm="12" cols="12">
        <v-row>
          <v-col lg="1" md="auto" sm="1" cols="1"></v-col>
          <v-col lg="9" md="11" sm="10" cols="10">
            <div id="bio">
              <br />
              <div id="box">
                <br /><br />
                <p>{{ userBio }}</p>
                <br />
              </div>
            </div>
          </v-col>
          <v-col lg="2" md="1" sm="1" cols="1"></v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  props: ["bio"],
  data() {
    return {
      userBio: "",
    };
  },
  methods: {},
  created() {
    this.userBio = this.bio;
  },
};
</script>
<style lang="scss" scoped>
@import "about.scss";
</style>