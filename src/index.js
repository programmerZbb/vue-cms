import Vue from "vue"
import App from "./app.vue"

import { Header } from "mint-ui"
Vue.component(Header.name, Header)
new Vue({
    el: "#app",
    render(c) {
        return c(App)
    }
})