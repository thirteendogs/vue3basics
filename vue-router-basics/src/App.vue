<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </nav>
  <button @click="goRedirect">Redirect</button>
  <button @click="goBack">Back</button>
  <button @click="goForward">Forward</button>

  <router-view />
</template>
<script>
export default {
  methods: {
    goRedirect() {
      this.$router.push({ name: "home" });
    },
    goBack() {
      this.$router.go(-1);
    },
    goForward() {
      this.$router.go(1);
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-inline: 5px;
}

nav a.router-link-exact-active {
  color: white;
  background-color: crimson;
  padding: 10px;
  border-radius: 10px;
}
button {
  border: none;
  margin: 3px;
  border-radius: 5px;
  background-color: bisque;
}
</style>
