<template lang="html">
  <div class="register-container">
    <h1>Register to Greenhouse</h1>
    <input
      type="text"
      name="firstName"
      value=""
      placeholder="Firstname"
      v-model="firstName"
    />
    <input
      type="text"
      name="lastName"
      value=""
      placeholder="Lastname"
      v-model="lastName"
    />
    <input
      type="email"
      name="email"
      value=""
      placeholder="your@emial.com"
      v-model="email"
    />
    <input
      type="password"
      name="password"
      value=""
      placeholder="Password"
      v-model="password"
    />
    <div class="error" v-html="error" />
    <button @click="registerUser" type="button" name="button">Register</button>
  </div>
</template>

<script>
import Auth from "../services/Auth.js";

export default {
  name: "Register",
  data() {
    return {
      firstName: "Lefora",
      lastName: "Williams",
      email: "leo@mail.com",
      password: "",
      error: null
    };
  },

  methods: {
    async registerUser() {
      try {
        const { firstName, lastName, email, password } = this;
        const res = await Auth.register({
          firstName,
          lastName,
          email,
          password
        });
        console.log(res.data);
        this.$store.dispatch("setToken", res.data.logInId);
        this.$store.dispatch("setUser", res.data.user);
      } catch (error) {
        this.error = error.response.data.err;
      }
    }
  }
};
</script>

<style lang="css" scoped></style>
