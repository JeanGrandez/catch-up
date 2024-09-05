import {createApp, toRef} from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import Aura from '@primevue/themes/aura';


import i18n from './i18n.js';


import SelectButton from "primevue/selectbutton";
import Drawer from "primevue/drawer";
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Card from "primevue/card";


createApp(App).mount('#app')

const app = createApp(App);
app.use(PrimeVue,
    {
        ripple:true,
        theme: {
            preset: Aura,
            options:{
                prefix: 'p',
                darkModeSelector: 'system',
                cssLayer:false
            }
        }
    });
//Specify PrimeVue components to use in app
app.component('pv-card', Card).
    component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-drawer', Drawer)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-toolbar', Toolbar);

//Add i18n to app
app.use(i18n);

//Mount app instance into #app div
app.mount('#app');

