<template>
  <div class="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/layout/Header";
export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  background-color: #e6e0e0;
  color: #113810;
  width: 100%;
  height: 100%;
}

h1,
button {
  text-transform: uppercase;
}

button {
  cursor: pointer;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
}
.btn:hover {
  background: #666;
}

.error {
  color: red;
}
</style>
