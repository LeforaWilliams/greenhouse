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
    <button class="btn" type="button" name="button" @click="loginUser">
      Login
    </button>
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
        this.$store.dispatch("setToken", res.data.logInId);
        this.$store.dispatch("setUser", res.data.user);
        this.$router.replace("/");
      } catch (error) {
        this.error = error.response.data.err;
      }
    }
  }
};
</script>

<style lang="css" scoped>
h1 {
  margin: 50px;
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
background: none;
border: none;
border-bottom: 1px solid grey;
padding-bottom: 10px;
margin-bottom: 10px;
font-size: 28px;
transition: all 0.3s ease-in;
}

input:focus {
  border-bottom-color: transparent;
  outline: none;
}

button {
  margin-top: 20px;
}
</style>
