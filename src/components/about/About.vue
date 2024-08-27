<template>
  <section align="center" id="about">
    <!-- <v-row>
      <v-col lg="8" md="8" sm="12" cols="12"> -->
        <v-row>
          <v-col lg="2" md="2" sm="2" cols="2"></v-col>
          <v-col lg="8" md="8" sm="8" cols="8">
            <div id="bio">
              <div id="profile-pic" align="center">
                <v-img
                :src="userBio.profileImage"
                alt="lavan kumar ch"
                id="pro-image"
              ></v-img>
              </div>
              <div id="box">
                <br /><br />
                <p>{{ userBio.bio }}</p>
                <br />
              </div>
            </div>
          </v-col>
          <v-col lg="2" md="2" sm="2" cols="2"></v-col>
        </v-row>
      <!-- </v-col>
      <v-col lg="4" md="4" sm="12" cols="12" align="center">
      </v-col>
    </v-row> -->
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