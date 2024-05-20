// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faFacebook, faTwitter, faPinterest);

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(store);
app.use(router);
app.use(vuetify);

app.mount('#app');
