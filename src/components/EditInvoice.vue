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
      <button class="button is-success" @click="updateInvoice">UPDATE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "EditInvoice",
  data() {
    return {
      InvoicePrice: "",
      InvoiceDate: "",
    };
  },
  created: function () {
    this.getInvoiceById();
  },
  methods: {
    // Get Invoice By Id
    async getInvoiceById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/Invoices/${this.$route.params.id}`
        );
        this.InvoicePrice = response.data.invoice_price;
        this.InvoiceDate = response.data.invoice_date;

      } catch (err) {
        console.log(err);
      }
    },
 
    // Update Invoice
    async updateInvoice() {
      try {
        await axios.put(
          `http://localhost:5000/Invoices/${this.$route.params.id}`,
          {
            invoice_price: this.InvoicePrice,
            invoice_date: this.InvoiceDate,

          }
        );
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