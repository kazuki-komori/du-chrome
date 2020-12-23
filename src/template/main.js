import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

(function () {
    'use strict';
    let el = document.querySelector('.table-responsive')
    el.insertAdjacentHTML(
        "beforebegin",
        `<div id="vue-app"></div>`
    );
    Vue.use(VueRouter)
    let vm = new Vue({
        render: h => h(App)
    }).$mount("#vue-app");
})();