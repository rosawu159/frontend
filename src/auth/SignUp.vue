// src/views/SignUp.vue

<template>
  <div>
    <h1>Sign Up</h1>
    <input type="text" placeholder="Username" v-model="username" />
    <input type="text" placeholder="Password" v-model="password" />
    <input
      type="text"
      placeholder="Password (repeat)"
      v-model="password_repeat"
    />
    <input type="button" @click="signUp" value="Sign Up" />
    <p v-if="msg">{{ msg }}</p>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      password_repeat: "",
      msg: ""
    };
  },
  methods: {
    async signUp() {
      try {
        await axios.post("http://localhost:5000/sign-up", {
          username: this.username,
          password: this.password,
          password_repeat: this.password_repeat,
        });
        this.username = "";
        this.password = "";
        this.password_repeat = "";
        this.$router.push("/login");
      } catch (err) {
        console.log(err);
      }
      // try {
      //   const credentials = {
      //     username: this.username,
      //     password: this.password,
      //     password_repeat: this.password_repeat
      //   };
      //   const response = await AuthService.signUp(credentials);
      //   this.msg = response.msg;
      //   this.$router.push('/');
      // } catch (error) {
      //   this.msg = error.response.data.msg;
      // }
    }
  }
};
</script>