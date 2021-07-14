// src/views/Login.vue

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

      <div class='row is-full mb-3'> Login </div>

      <div class='row is-full mb-1'>
        <input type="text" placeholder="Username" v-model="username" />
      </div>

      <div class='row is-full mb-1'>    
        <input type="text" placeholder="Password" v-model="password" />
      </div>

      <div class='row is-full mb-1'> 
        <div class="columns mt-1">
          <div class="column" align="right">
            <input type="button" @click="login" value="Sign in" class="button is-info is-small"/>
          </div>
          <div class="column" align="left">
            <input type="button" value="Sign up" @click="signup" class="button is-info is-small is-light"/>
          </div>
        </div>
      </div>

      <div class='row is-full'>    
        <p v-if="msg">{{ msg }}</p>
      </div>

    </div>



    <!-- <div class="columns mt-1">
      <div class="column is-four-fifths">
        <div class="icon-text">
          <span class="icon has-text-info">
            <font-awesome-icon icon="file-invoice-dollar" />
          </span>
          <span>BOOKKEEPING</span>
        </div>
      </div>
    </div>

    <h1>Login</h1>
    <input type="text" placeholder="Username" v-model="username" />
    <input type="text" placeholder="Password" v-model="password" />
    <input type="button" @click="login" value="Login" />
    <p v-if="msg">{{ msg }}</p>
    <div>
      <input type="button" value="signup" @click="signup" />
    </div> -->
  </div>

</template>
<script>
import AuthService from '@/services/AuthService.js';

export default {
  data() {
    return {
      username: '',
      password: '',
      msg: ''
    };
  },
  methods: {
    signup() {
      this.$store.dispatch('sign-up');
      this.$router.push('/sign-up');
    },
    async login() {
      try {
        const credentials = {
          username: this.username,
          password: this.password
        };
        const response = await AuthService.login(credentials);
        this.msg = response.msg;

        const token = response.token;
        const user = response.user;

        this.$store.dispatch('login', { token, user });

        this.$router.push('/');
      } catch (error) {
        this.msg = error.response.data.msg;
      }
    }
  }
};
</script>