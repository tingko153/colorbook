// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './layout/App'
import router from './router'
import './assets/css/layouts/base.css'
import './assets/css/layouts/guide.css'
import './assets/css/elements/btn.css'
import './assets/css/elements/dropdown.css'
import './assets/css/elements/form.css'
import './assets/css/elements/icon.css'
import './assets/css/elements/pagination.css'
import './assets/css/elements/view.css'

import './assets/css/member.css'

import './assets/css/modules/input-set.css'
import './assets/css/modules/tab.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
