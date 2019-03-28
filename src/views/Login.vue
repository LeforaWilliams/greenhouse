<template lang="html">
  <div class="login-container">
    <h1>Login to Greenhouse</h1>
    <input
      type="text"
      name="email"
      value=""
      placeholder="your@email"
      v-model="email"
    />
    <input
      type="password"
      name="password"
      value=""
      placeholder="Password"
      v-model="password"
    />
    <button type="button" name="button" @click="loginUser">Login</button>
  </div>
</template>

<script>
import Auth from "../services/Auth.js";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    async loginUser() {
      try {
        const { email, password } = this;
        const res = await Auth.login({ email, password });
        //res should be session userID
        console.log(res.data);
        this.$store.dispatch("setToken", res.data.id);
        this.$store.dispatch("setUser", res.data.user);
      } catch (error) {
        this.error = error.response.data.err;
      }
    }
  }
};
</script>

<style lang="css" scoped></style>
