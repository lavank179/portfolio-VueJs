<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title style="backgroundColor: #9564CE;">
        <strong class="subheading"
          >Get connected with me on social networks!</strong
        >

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center" style="backgroundColor: #9564CE;">
        {{ new Date().getFullYear() }} — <strong> Lavan Kumar CH</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>