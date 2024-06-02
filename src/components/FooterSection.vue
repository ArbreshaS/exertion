<template>
  <footer class="footer-sec">
    <v-container fluid class="px-12" style="max-width: 1500px;">
    <div class="main">
      <div class="logo row">
        <div class="footer-header">
          <img src="../assets//logo.png" class="manik" alt="">
        </div>
        <div class="logo-des">
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
          <CustomButton class="mt-8" buttonText="Know More" @click="handleLearnMoreClick" />
        </div>
      </div>

      <div class="office row">
        <div class="footer-header">
          <h3>Office</h3>
        </div>
        <div class="office-des">
          <p>Here are many variations of passages of Lorem Ipsum available.</p>
          <a href="#">exertion@gmail.com</a>
          <p class="num">+91-9999999999</p>
        </div>
      </div>

      <div class="link row">
        <div class="footer-header">
          <h3>Links</h3>
        </div>
        <div class="link-des">
          <a href="" class="footer-links">Home</a>
          <a href="#" class="footer-links">About</a>
          <a href="#" class="footer-links">Projects</a>
          <a href="#" class="footer-links">News</a>
          <a href="#" class="footer-links">Contact</a>
          <a href="#" class="footer-links">Stock</a>
        </div>
      </div>

      <div class="newsletter row">
        <div class="footer-header">
          <h3>Newsletter</h3>
        </div>
        <div class="newsletter-des">
          <div class="subscribe">
            <i class="sub-icon ri-mail-check-fill"></i>
            <input type="email" placeholder="Enter Email ID" required>
            <i class="sub-icon ri-arrow-right-line"></i>
          </div>
          <div class="icons">
            <font-awesome-icon class="social-icon" :icon="['fab', 'facebook']" style="color: #fff; margin: 0 10px;"  />
            <font-awesome-icon class="social-icon" :icon="['fab', 'twitter']" style="color: #fff; margin: 0 10px;" />
                <font-awesome-icon class="social-icon" :icon="['fab', 'pinterest']" style="color: #fff; margin: 0 10px;" />
          </div>
        </div>
        
      </div>
      
    </div>
    <div class="copyright">
      <hr>
      <p>© Copyright 2024</p>
    </div>
    </v-container>
  </footer>
</template>

<script>
import CustomButton from '@/components/CostumButton.vue';
export default {
  components: {
    CustomButton
  },

};
</script>

<style scoped>

footer {
  color: #fff;
  background-image: url('@/assets/footerb.jpg');
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  position: relative;
  width: 100%;
  height: 100%;
   border-top-left-radius: 70px;
  font-size: 1rem;
}


@media (max-width: 960px) {
  footer {
    width: 100%;
    top: 120px;
  }

  .main {
    margin: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr;
  }

  .logo {
    grid-column: 1/3;
  }

  .office {
    grid-column: 3/5;
  }
  .link {
    grid-column: 1/3;
  }
}

@media (max-width: 660px) {
  .main {
    gap: 10px;
    margin: 0;
  }

  .icons {
    display: flex;
  }

  .row {
    grid-column: 1/4;
  }
}

.manik {
  width: 120px;
}

.main {
  margin: 50px;
  padding-top: 20px;
  padding-bottom: 50px;
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(4, 1fr);
}

.row {
  margin-top: 50px;
}

.footer-header {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.office-des {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.office a {
  text-decoration: none;
  color: #C8B560;
}

.office a:hover {
  color: #fff;
}

.num {
  font-size: 1rem;
  font-weight: 500;
}

.link-des {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.link-des a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
}

.link-des a:hover {
  color: #C8B560;
  transition: linear 0.3s;
}



.subscribe {
  display: flex;
}

input[type=email] {

  padding-bottom: 5px;
  border: 1px solid #C8B560;
  border-radius: 10px;
  background-color: transparent;
  font-size: 16px;
}



.ri-arrow-right-line {
  margin-left: 0;
}

.icons  {
 
  font-size: 30px;
}

.social-icon {
  position: relative;
  top: 2px;
}

.icons a:hover {
  color: #fff;
  background-color: #C8B560;
  border-color: #C8B560;
}

.newsletter-des {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.copyright {
  text-align: center;
}

hr {
  width: 90%;
  margin: 2px auto;
  opacity: 40%;
  border: 0.01px solid white;
}

.copyright p {
  padding: 20px;
}
</style>
