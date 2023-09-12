import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import {createVuetify} from 'vuetify'
import {aliases, mdi} from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '@sweetalert2/themes/dark/dark.css';

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi
        }
    }
})

createApp(App).use(vuetify).use(VueSweetalert2).mount('#app')
