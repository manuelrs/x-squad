<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item navbar-item-text" href="http://www.x-squad.com/">
          X-Squad
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
         <router-link to="/signup"> Sign up </router-link>
        </div>
        <div class="navbar-item">
          Log in
        </div>
        <div class="navbar-item">
          <a @click="logout"> Log out </a>
        </div>
        <div class="navbar-burger">
          <span>1</span>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      window.localStorage.clear();
      this.$router.push("/");
    }
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar-item-text {
  color: white;
  font-size: 2rem;
  text-decoration: none;
  font-weight: 900;
}

.navbar-item {
  color: white;
}

.navbar {
  background-color: black;
}
</style>
