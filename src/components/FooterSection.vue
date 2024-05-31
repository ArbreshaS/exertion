<template>
    <div id="footerComponent"  :style="{ backgroundImage: `url(${backgroundImage})`}">
        <v-container fluid class="px-12" style="max-width: 1500px;">
      <div class="footer">
        <div class="section">
          <img :src="logo" alt="Merraki Interiors Logo" class="logo">
          <h3>Want to Create Something Great Together?</h3>
          <button @click="getStarted">Get Started</button>
        </div>
        <div class="section contact-info">
          <h3>Contact Info:</h3>
          <p>Call us at: {{ contactNumber }}</p>
          <p>Our Location: {{ location }}</p>
          <p>Email us at: {{ email }}</p>
        </div>
        <div class="section subscribe">
          <h3>Subscribe to Our Newsletter:</h3>
          <input type="email" v-model="emailAddress" placeholder="Enter Your Email Address">
          <button @click="subscribe">Subscribe</button>
          <p>{{ newsletterMessage }}</p>
          <div class="social-icons">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
      <div class="footer bottom">
        <p>&copy; {{ currentYear }} {{ companyName }} All rights reserved.</p>
      </div>
      </v-container>
    </div>
  </template>
  
  <script>
  import Logo from '@/assets/logo.png';
  import BackgroundImage from '@/assets/background1.png.jpg';
  export default {
    data() {
      return {
        logo: Logo,
        backgroundImage: BackgroundImage,
        companyName: 'Exertion',
        contactNumber: '+5689 2589 6325',
        location: '121 King Street Melbourne, 3000, Australia',
        email: 'info@merrakiinteriors.com',
        emailAddress: '',
        newsletterMessage: 'Quis autem vel eum iure reprehenderit rui in ea voluptate velit esse.',
        currentYear: new Date().getFullYear()
      };
    },
    methods: {
      getStarted() {
        window.location.href = '#';
      },
      subscribe() {
        // Handle subscription logic here
      }
    }
  };
  </script>
  
  <style scoped>
#footerComponent {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
  .footer {
    display: flex;
    justify-content: space-between;
    color: #fff;
  }
  
  .footer .section {
    flex: 1;
    padding: 20px;
  }
  
  .footer .section h2,
  .footer .section h3 {
    color: #fff;
  }
  
  .footer .section p {
    margin: 10px 0;
  }
  
  .footer .section .contact-info p,
  .footer .section .subscribe p {
    margin: 10px 0;
  }
  
  .footer .section .subscribe input {
    padding: 10px;
    width: 80%;
    margin-right: 10px;
  }
  
  .footer .section .subscribe button {
    padding: 10px 20px;
    background-color: #f0a500;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  
  .footer .section .subscribe button:hover {
    background-color: #e09b00;
  }
  
  .footer .section .social-icons {
    display: flex;
    gap: 10px;
  }
  
  .footer .section .social-icons a {
    color: #fff;
    text-decoration: none;
    font-size: 20px;
  }
  
  .footer .bottom {
    text-align: center;
    padding: 10px;
    background-color: #000;
  }
  
  .footer .bottom p {
    margin: 0;
  }
  .logo {
  width: 250px; 
  height: auto; 
  margin-bottom: 10px; 
}
  </style>
  