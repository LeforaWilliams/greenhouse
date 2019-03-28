<template lang="html">
  <header>
    <h1>Greenhouse</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div v-if="!$store.state.isUserLoggedIn" class="header-buttons">
      <router-link to="/register">
        <button type="button" name="button">
          Join
        </button></router-link
      >
      <router-link to="/login">
        <button type="button" name="button">Login</button>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="css" scoped>
header {
  background: #113810;
  color: #E6E0E0;
  text-align: center;
  padding: 10px;
}

h1 {
  text-transform: uppercase;
}

header a {
  color:#E6E0E0;
  padding-right: 5px;
  text-decoration: none;
}
</style>
