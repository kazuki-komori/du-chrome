import Vue from "vue";
import App from "./App.vue";
import './assets/tailwind.css'

(function () {
    'use strict';
    let el = document.querySelector('.table-responsive')
    if (el) {
        el.insertAdjacentHTML(
            "beforebegin",
            `<div id="vue-app"></div>`
        );
        let vm = new Vue({
            render: h => h(App)
        }).$mount("#vue-app");
    }
    new Vue({
        render: h => h(App),
    }).$mount('#app')
})();