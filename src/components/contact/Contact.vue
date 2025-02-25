<template>
  <section align="center" id="contact">
    <br /><br />
    <v-row>
      <v-col lg="4" md="4" sm="1" cols="1"></v-col>
      <v-col lg="4" md="4" sm="10" cols="10">
        <div id="content">
          <v-card :elevation="e1" @mouseenter="e1 = '6'" @mouseleave="e1 = ''">
            <br />
            <h3>
              <a :href="contact_details[2]">{{ contact_details[0] }}</a>
              <i class="fa fa-phone-alt fa-sm"></i>
            </h3>
            <h3>
              <a :href="contact_details[3]">
                {{ contact_details[1] }}</a
              >
              <i class="fa fa-envelope fa-sm"></i>
            </h3>
            <br />
            <h3>For any other queries, <i class="far fa-hand-point-down fa-lg"></i></h3>
          </v-card>
          <br /><br />
          <v-card :elevation="e2" @mouseenter="e2 = '6'" @mouseleave="e2 = ''">
            <br />
            <v-alert dense dismissible type="info" v-if="text.length > 0">{{ text }}</v-alert>
            <br />
            <form id="contact-form" class="mx-3">
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="12"
                label="Name"
                required
                outlined
                color="purple darken-1"
                dense
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="Email"
                required
                outlined
                color="purple darken-1"
                dense
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <v-textarea
                v-model="message"
                :error-messages="messageErrors"
                :counter="150"
                label="Message"
                required
                outlined
                color="purple darken-1"
                dense
                @input="$v.message.$touch()"
                @blur="$v.message.$touch()"
              ></v-textarea>

              <v-btn
                @click="submit"
                color="purple darken-1"
                :disabled="$v.$invalid"
                >submit</v-btn
              >
              <v-btn @click="reset" color="orange lighten-3">Reset</v-btn>
            </form>

            <!-- progress-loader -->
            <v-overlay :value="overlay" :absolute="absolute"
              ><v-progress-circular
                indeterminate
                color="purple"
              ></v-progress-circular>
            </v-overlay>
            <br />
          </v-card>

          <!-- popup snackbar after form sent -->
          <v-snackbar v-model="snackbar" :timeout="timeout">
            {{ text }}

            <template v-slot:action="{ attrs }">
              <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
                Close
              </v-btn>
            </template>
          </v-snackbar>
        </div>
      </v-col>
      <v-col lg="4" md="4" sm="1" cols="1"></v-col>
    </v-row>
    <br /><br /><br />
    <div align="center">
      <v-img
        src="https://img.icons8.com/fluent/48/000000/long-arrow-up.png"
        alt="fluent-down-arrow"
        id="up-arrow"
        href="#Home"
        v-smooth-scroll
      ></v-img>
    </div>
  </section>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import emailsjs from "emailjs-com";
import axios from "axios";

export default {
  mixins: [validationMixin],
  props: ["contact"],
  validations: {
    name: { required, maxLength: maxLength(12) },
    email: { required, email },
    message: { required, maxLength: maxLength(150) },
  },
  data() {
    return {
      e1: "",
      e2: "",
      name: "",
      email: "",
      message: "",
      emailjs: [],
      snackbar: false,
      text: "",
      timeout: 6000,
      overlay: false,
      absolute: true,
      contact_details: [],
    };
  },
  created() {
    this.emailjs = this.contact["emailjs-service-id"];
    this.contact_details[0] = this.contact["phone"];
    this.contact_details[1] = this.contact["emailid"];
    this.contact_details[2] = "tel:" + this.contact["phone"];
    this.contact_details[3] = "mailto:" + this.contact["emailid"];
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be atmost 12 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required.");
      return errors;
    },
    messageErrors() {
      const errors = [];
      if (!this.$v.message.$dirty) return errors;
      !this.$v.message.maxLength &&
        errors.push("Message must be atmost 150 characters long");
      !this.$v.message.required && errors.push("Message is required.");
      return errors;
    },
  },
  methods: {
    reset() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.message = "";
      this.text = "";
    },
    resetEmailBox() {
      this.snackbar = true;
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.message = "";
      this.overlay = false;
    },
    async submit() {
      this.overlay = true;
      this.$v.$touch();
      let mail = this.email;
      mail = mail.replace(".", "");
      mail = mail.replace(".", "");
      mail = mail.replace("@", "");
      await this.uploadFire(this.name, this.email, this.message, mail);
      if ((await this.sendEmail()) == true) {
        this.text = "Message sent succesfully! Thank you for contacting";
        this.resetEmailBox();
      } else {
        this.text =
          "Message not sent. Email send error, Try after sometime else contact this page owner";
        this.resetEmailBox();
      }
    },
    async uploadFire(v1, v2, v3, v4) {
      let status = false;
      status = await axios
        .post(
          "https://vue-cli-com-default-rtdb.firebaseio.com/portfolio/" +
            v4 +
            ".json",
          {
            name: v1,
            email: v2,
            message: v3,
          }
        )
        .then(function () {
          console.log("SUCCESS! Fire");
          return true;
        })
        .catch(function (error) {
          console.log("FAILED! Fire", error);
          return false;
        });
      return status;
    },
    async sendEmail() {
      let status = false;
      status = await emailsjs
        .send(
          this.emailjs["service-id"],
          this.emailjs["template-id"],
          {
            name: this.name,
            email: this.email,
            message: this.message,
          },
          this.emailjs["user-id"]
        )
        .then(
          function () {
            console.log("SUCCESS! Mail");
            return true;
          },
          function (error) {
            console.log("FAILED! Mail", error);
            return false;
          }
        );
      return status;
    },
  },
};
</script>
<style lang="scss" scoped>
@use "./contact.scss";
</style>