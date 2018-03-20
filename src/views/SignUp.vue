<template>
<div class="container">
    <br/>
    <br/>
    <div class="field">
        <label class="label">E-Mail</label>
        <div class="control">
            <input class="input" type="email" placeholder="Please type your e-mail address" v-model="email">
        </div>
    </div>
    <div class="field">
        <label class="label">User name</label>
        <div class="control">
            <input class="input" type="text" placeholder="Please type your user name" v-model="userName">
        </div>
    </div>
    <div class="field">
        <label class="label">Password</label>
        <div class="control">
            <input class="input" type="password" placeholder="Please type your password" v-model="password">
        </div>
    </div>

    <div class="field is-grouped">
    <div class="control">
        <button class="button is-link" @click.prevent="sendSignUpData">Create my account</button>
    </div>
</div>
</div>
</template>

<script>
import { signUp } from "@/api";
export default {
  data() {
    return {
      email: "",
      userName: "",
      password: ""
    };
  },
  methods: {
    sendSignUpData() {
      let userInfo = {
        username: this.userName,
        email: this.email
      };
      signUp(userInfo).then(res => {
        if (res.status === 201) {
          localStorage.username = res.data.username;
          localStorage.email = res.data.email;
          localStorage.logedIn = true;
          console.log(localStorage);
          this.$router.push("/dashboard");
        } else {
          //handle error
        }

        //console.log("res ", res);
      });
    }
  }
};
</script>

