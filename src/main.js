import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueParticles from 'vue-particles';
import VueSlickCarousel from 'vue-slick-carousel';

import CanvasJSChart from '@canvasjs/vue-charts'; // Import CanvasJSChart
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


// Vuetify
import Vuetify from 'vuetify';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faFacebook, faTwitter, faPinterest, faPlay, faPenNib, faBarsProgress, faMoneyCheckDollar);

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(store);
app.use(router);
app.use(vuetify);
app.use(VueParticles);
app.use(VueSlickCarousel);
app.use(Vuetify);

app.use(CanvasJSChart); // Initialize CanvasJSChart

app.mount('#app');
