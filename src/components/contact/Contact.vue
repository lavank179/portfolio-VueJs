<template>
  <section align="center" id="contact">
    <br /><br /><br />
    <v-row>
      <v-col lg="3" md="3" sm="1" cols="auto"></v-col>
      <v-col lg="6" md="6" sm="10" cols="12">
        <div id="content">
          <v-card>
            <h2>If you have any queries, submit here.</h2>
          </v-card>
          <br /><br />
          <v-card>
            <br />
            <form class="mx-5" id="contact-form">
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="12"
                label="Name"
                required
                outlined
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="Email"
                required
                outlined
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
                @input="$v.message.$touch()"
                @blur="$v.message.$touch()"
              ></v-textarea>
              <v-btn @click="submit">submit</v-btn>
            </form>
            <br />
          </v-card>
        </div>
      </v-col>
      <v-col lg="3" md="3" sm="1" cols="auto"></v-col>
    </v-row>
    <br /><br /><br /><br /><br /><br />
  </section>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import emailsjs from "emailjs-com";

export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(12) },
    email: { required, email },
    message: { required, maxLength: maxLength(150) },
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      serviceId: "service_8kz99my",
      templateId: "template_ksgd7hc",
      userId: "user_bFUSUHm0blQaO5gyE0Krn",
    };
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
    submit(e) {
      this.$v.$touch();
      emailsjs.send(this.serviceId, this.templateId, {
        name: this.name,
        email: this.email,
        message: this.message,
      }, this.userId)
      .then(function(){
          console.log('SUCCESS!');
      }, function(error){
          console.log('FAILED...', error);
      });
    console.log(this.name, this.email, this.message);
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./contact.scss";
</style>