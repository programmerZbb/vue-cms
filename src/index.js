import Vue from "vue"
import App from "./app.vue"
import Axios from "axios"

// 导入路由
import router from "./router.js"
// 导入 mui 样式
import "./lib/mui/css/mui.css" 
import "./lib/mui/css/icons-extra.css"

import { Header } from "mint-ui"
import { Swipe, SwipeItem } from 'mint-ui';

Axios.defaults.baseURL = 'http://47.89.21.179:8080/'

Vue.prototype.$axios = Axios
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header)
new Vue({
    el: "#app",
    render(c) {
        return c(App)
    },
    router
})