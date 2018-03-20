<template>
  <div class="home">
    
    <div class="landing-image-container">
    </div>
    <br/>
    <router-link to="/signup">
      <button class="button is-dark">Sign up with my e-mail</button>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>


<style>
.home {
  background-color: black;
  padding-bottom: 40px;
}

.landing-image-container {
  background-image: url("/images/logo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 75vh;
  max-width: 100%;
  max-height: 100%;
}
</style>
