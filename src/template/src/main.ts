import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import './assets/tailwind.css'

(function () {
    'use strict';
    let es = document.querySelector('.table-responsive')
    Vue.use(VueRouter)
    if (es) {
        es.insertAdjacentHTML(
            "beforebegin",
            `<div id="vue-app"></div>`
        );
        let vm = new Vue({
            render: h => h(App)
        }).$mount("#vue-app");
    } else {
        Vue.config.productionTip = false
        new Vue({
            render: h => h(App)
        }).$mount("#app");
    }
})();