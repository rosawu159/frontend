// src/views/SignUp.vue

<template>
  <div>
    <div class='rows' align="center">

      <div class="columns mt-1">
        <div class="column is-four-fifths">
          <div class="icon-text">
            <span class="icon has-text-info">
              <font-awesome-icon icon="file-invoice-dollar" />
            </span>
            <span>BOOKKEEPING</span>
          </div>
        </div>
      </div>

      <div class='row is-full mb-3'> Sign Up </div>

      <div class='row is-full mb-1'>
        <input type="text" placeholder="Username" v-model="username" />
      </div>

      <div class='row is-full mb-1'>    
        <input type="text" placeholder="Password" v-model="password" />
      </div>


      <div class='row is-full mb-1'>    
        <input type="text" placeholder="Password (repeat)" v-model="password_repeat" />
      </div>

      <div class='row is-full mb-1 mt-3'> 
        <input type="button" @click="signUp" :disabled="username == '' || password == '' || password_repeat == ''" value="Sign Up" class="button is-info is-small"/>
      </div>
      
      <div class='row is-full mb-1'> 
        <p v-if="msg">{{ msg }}</p>
      </div>

    </div>
  </div>
</template>
<script>
import AuthService from '@/services/AuthService.js';

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
        const credentials = {
          username: this.username,
          password: this.password,
          password_repeat: this.password_repeat
        };
        const response = await AuthService.signUp(credentials);

        this.msg = response.msg;
        this.$router.push({ name: 'Login', params: { signupsuccess: "Signup success!" }})

      } catch (error) {
        this.msg = error.response.data.msg;
      }
    }
  }
};
</script>