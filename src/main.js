import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LoginComponent from './pages/Login/LoginComponent'
import HomeComponent from './pages/Home/HomeComponent'
import VueGoogleCharts from 'vue-google-charts'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(VueGoogleCharts)
Vue.config.productionTip = false


const routes = [
  {path:'/', name:'login', component: LoginComponent},
  {path:'/home', name: 'home',component: HomeComponent},

]

const router = new VueRouter({
  routes
  }
)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
