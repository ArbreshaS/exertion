// src/font-awesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faFacebook, faTwitter, faPinterest);

export { FontAwesomeIcon };
