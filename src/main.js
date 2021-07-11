import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Create from './components/AddInvoice.vue'
import Edit from './components/EditInvoice.vue'
import Index from './components/InvoiceList.vue'
Vue.use(VueRouter)
Vue.config.InvoiceionTip = false

const routes = [
  {
    name: 'Create',
    path: '/create',
    component: Create
  },
  {
    name: 'Edit',
    path: '/edit/:id',
    component: Edit
  },
  {
    name: 'Index',
    path: '/',
    component: Index
  },
];

const router = new VueRouter({ mode: 'history', routes: routes })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
