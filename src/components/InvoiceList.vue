<template>
  <div>
    <router-link :to="{ name: 'Create' }" class="button is-success mt-5"
      >Add New</router-link
    >
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Price</th>
          <th>Invoice Date</th>
          <th>Invoice ID</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.invoice_price }}</td>
          <td>{{ item.invoice_date }}</td>
          <td>{{ item.invoice_id }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'Edit', params: { id: item.id } }"
              class="button is-info is-small"
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
 
export default {
  name: "InvoiceList",
  data() {
    return {
      items: [],
    };
  },
 
  created() {
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
  },
};
</script>
 
<style>
</style>