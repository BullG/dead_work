import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
// import 'weui/dist/style/weui.min.css'
import 'vue-ydui/dist/ydui.base.css'
// import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
// import 'vue-ydui/dist/ydui.rem.css'; /* 使用px：import 'vue-ydui/dist/ydui.px.css'; */
// Vue.use(YDUI)
import { Icons } from 'vue-ydui/dist/lib.rem/icons'
/* 使用px：import {Icons} from 'vue-ydui/dist/lib.px/icons'; */

Vue.component(Icons.name, Icons)

const FastClick = require('fastclick')
document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body)
}, false)

if (typeof localStorage === 'undefined' || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage
    localStorage = new LocalStorage('./scratch')
}

require('@/mock/mock.js')

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')