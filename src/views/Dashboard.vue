<template>
  <div>
      <br/>
      <div class="container">
          Welcome to your dashboard {{this.username}}
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: ""
    };
  },
  methods: {
    retrieveUserData() {
      this.username = localStorage.username;
      this.email = localStorage.email;
    }
  },
  created() {
    this.retrieveUserData();
  }
};
</script>
