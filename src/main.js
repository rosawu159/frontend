import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Create from './components/AddInvoice.vue'
import Edit from './components/EditInvoice.vue'
import Index from './components/InvoiceList.vue'
import SignUp from "./auth/SignUp.vue";
import Login from "./auth/Login.vue";
import Axios from 'axios';
import store from './store';
import Home from "./components/Home.vue";
Vue.use(VueRouter)
Vue.config.InvoiceionTip = false

// set auth header
Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;

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
  {
    name: 'Home',
    path: '/home',
    component: Home
  },
  {
    name: 'Signup',
    path: '/sign-up',
    component: SignUp
  },  
  {
    name: 'Login',
    path: '/login',
    component: Login
  },
];

const router = new VueRouter({ mode: 'history', routes: routes })


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
