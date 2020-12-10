import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LoginComponent from './pages/Login/LoginPage'
import HomeComponent from './pages/Home/HomePage'
import axios from 'axios'
import VueAxios from 'vue-axios'
import HighchartsVue from 'highcharts-vue'


Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(HighchartsVue)

Vue.config.productionTip = false


const routes = [
  {path:'/', name:'login', component: LoginPage},
  {path:'/home', name: 'home',component: HomePage},

]

const router = new VueRouter({
  routes
  }
)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
