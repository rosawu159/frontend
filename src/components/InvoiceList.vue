<template>
  <div>
    <!-- <div>
      <h1>Hi {{ username }}</h1>
      <input type="button" value="Logout" class="button is-light is-small mt-5" @click="logout" />
    </div> -->
    <div class="columns mt-1">
      <div class="column is-four-fifths">
        <div class="icon-text">
          <span class="icon has-text-info">
            <font-awesome-icon icon="file-invoice-dollar" />
          </span>
          <span>BOOKKEEPING</span>
        </div>
      </div>
      <div class="column">
        <h1>Hi {{ username }}</h1>
      </div>
      <div class="column"   style="text-align:right;">
        <input type="button" value="Logout" class="button is-light is-small" @click="logout" />
      </div>
    </div>
    <router-link :to="{ name: 'Create' }" class="button is-info"
      >Add New</router-link
    >
    <table class="table is-striped is-bordered mt-5 is-fullwidth">
      <thead>
        <tr>
          <th>Price</th>
          <th>Invoice Date</th>
          <th>Invoice ID</th>
          <th class="has-text-centered">Tag</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.invoice_price }}</td>
          <td>{{ item.invoice_date }}</td>
          <td>{{ item.invoice_id }}</td>
          <td>{{ item.invoice_tag }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'Edit', params: { id: item.id } }"
              class="button is-link is-small mr-3"
              >Edit</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteInvoice(item.id)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
import AuthService from '@/services/AuthService.js';

export default {
  name: "InvoiceList",
  data() {
    return {
      items: [],
      username: ''
    };
  },
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push('/login');
    }

    this.username = this.$store.getters.getUser.username;
    this.secretMessage = await AuthService.getSecretContent();
    this.getInvoices();
  },
 
  methods: {
    // Get All Invoices
    async getInvoices() {
      try {
        const response = await axios.get("http://localhost:5000/Invoices");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Invoice
    async deleteInvoice(id) {
      try {
        await axios.delete(`http://localhost:5000/Invoices/${id}`);
        this.getInvoices();
      } catch (err) {
        console.log(err);
      }
    },

    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    }
  },
};
</script>
 
<style>
</style>