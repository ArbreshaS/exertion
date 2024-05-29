<template>
  <div class="aboutsection">
    <div class="particle">
          <vue-particles
            color="#C8B560"
            :particleOpacity="0.9"
            :particlesNumber="80"
            shapeType="polygon"
            :particleSize="6"
            linesColor="#ffffff"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="100"
            :moveSpeed="6"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="repulse"
          ></vue-particles>
        </div>
   
      <div class="content">
    
        <v-container fluid class="px-12" style="max-width: 1500px;"> 
        <v-row>
          <v-col cols="12" sm="6">
            <div class="column-content col1">
              <h3>ABOUT US</h3>
              <h2>Strategy-led <span>design</span> in every detail</h2>
              <p>Established in 2007, Exertion is a leading firm specializing in innovative interior design and architecture solutions. Our architectural framework is meticulously crafted to support a wide spectrum of projects, ranging from residential spaces to commercial establishments.</p>
              <CustomButton buttonText="Learn More" @click="handleLearnMoreClick" />
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <div class="column-content">
              <v-img :src="require('@/assets/aboutsection.png')" style="max-height: 600px; border-radius: 15%;" class="logo"></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
      </div>
  
  </div>
</template>
<script>
import CustomButton from '@/components/CostumButton.vue'; 
export default {
  components: {
    CustomButton
  },
  methods: {
    handleLearnMoreClick() {
      this.$router.push({ path: '/about' });
    }
  }
}
</script>

<style>
.aboutsection {
  background-color: #131313;
  position:relative;
  padding-top:100px ;
  
}

.content {
  position: relative;

}

.particle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  
  z-index: 0;
 

}

.column-content {
  color: #fff;
  padding: 16px;
}

.col1 {
  color: #fff;
  padding: 50px 0;
}

.column-content h3 {
  color: #C8B560;
  font-size: 36px;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.column-content span {
  color: #C8B560;
}

.column-content.col1 {
  margin-bottom: 50px;
}



.column-content.col1 h2 {
  margin-bottom: 30px; 
  text-transform: uppercase;
}

.column-content.col1 p {
  margin-bottom: 30px; 
  font-size: 16px;
}
.particles-js-canvas-el{
  height:1120px !important;
}

@media (max-width: 768px) {
 

  .column-content h2 {
    font-size: 24px; 
  }
}
</style>
