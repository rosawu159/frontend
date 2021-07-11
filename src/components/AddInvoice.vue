<template>
  <div>
    <div class="field">
      <label class="label">Price</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Price"
          v-model="InvoicePrice"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Date</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Date"
          v-model="InvoiceDate"
        />
      </div>
    </div>
 
    <div class="control">
      <button class="button is-success" @click="saveInvoice">SAVE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddInvoice",
  data() {
    return {
      InvoicePrice: "",
      InvoiceDate: "",
    };
  },
  methods: {
    // Create New Invoice
    async saveInvoice() {
      try {
        await axios.post("http://localhost:5000/Invoices", {
          invoice_price: this.InvoicePrice,
          invoice_date: this.InvoiceDate,
        });
        this.InvoicePrice = "";
        this.InvoiceDate = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>