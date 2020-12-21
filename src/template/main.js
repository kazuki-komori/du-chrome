import Vue from "vue";
import App from "./App.vue";

(function () {
    'use strict';
    let el = document.querySelector('.cm-contentsList')
    console.log(el)
    el.insertAdjacentHTML(
        "beforeEnd",
        `<div id="vue-app"></div>`
    );
    let vm = new Vue({
        render: h => h(App)
    }).$mount("#vue-app");
})();