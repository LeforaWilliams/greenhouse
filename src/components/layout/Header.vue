<template lang="html">
  <header>
    <h1>Greenhouse</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
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
  background: darkgreen;
  color: #fff;
  text-align: center;
  padding: 10px;
}

header a {
  color: #fff;
  padding-right: 5px;
  text-decoration: none;
}
</style>
