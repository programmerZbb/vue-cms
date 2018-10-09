import VueRouter from "vue-router"
import Vue from "vue"
import homeContainer from "./components/homeContainer.vue"
import memberContainer from "./components/memberContainer.vue"
import shopcarContainer from "./components/shopcarContainer.vue"
import searchContainer from "./components/searchContainer.vue"

Vue.use(VueRouter)
export default new VueRouter({
    routes: [
       { path: "/", redirect: "/home" },
       { path: "/home", component: homeContainer },
       { path: "/member", component: memberContainer },
       { path: "/shopcar", component: shopcarContainer },
       { path: "/search", component: searchContainer }
    ],
    linkActiveClass: "mui-active"
})