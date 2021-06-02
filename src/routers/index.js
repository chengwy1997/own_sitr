import Vue from "vue";
import routes from "./routes"
import VueRouter from "vue-router"
Vue.use(VueRouter)
const router = new VueRouter({
  //需要配置相关的内容
  routes,
  mode:"history"
})

export default router;