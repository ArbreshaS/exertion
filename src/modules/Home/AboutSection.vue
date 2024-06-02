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
            class="particles"
          ></vue-particles>
        </div>
   
      <div class="content">
    
        <v-container fluid class="px-12" style="max-width: 1500px;"> 

        <v-row>
          <v-col cols="12" md="6" sm="12">
            <div class="column-content col1">
              <h3>ABOUT US</h3>
              <h2>Strategy-led <span>design</span> in every detail</h2>
              <p>Established in 2007, Exertion is a leading firm specializing in innovative interior design and architecture solutions. Our architectural framework is meticulously crafted to support a wide spectrum of projects, ranging from residential spaces to commercial establishments.</p>
              <CustomButton buttonText="Learn More" @click="handleLearnMoreClick" />
            </div>
          </v-col>
          
          <v-col cols="12" md="6" sm="12" class="d-flex justify-center align-center">
            <div class="column-content">
              <div class="wrapper">
    <div class="container">
      <div class="image-cube" :style="{ transform: 'rotateY(' + pos + 'deg)' }">
        <div class="front">
          <img src="../../assets/relax.jpg" style="height: 250px;"/>
        </div>
        <div class="right">
          <img src="../../assets//magic.jpg"  style="height: 250px;"/>
        </div>
        <div class="back">
          <img src="../../assets//filmi.jpg" style="height: 250px;" />
        </div>
        <div class="left">
          <img src="../../assets//interior.jpg" style="height: 250px;"  />
        </div>
      </div>
    </div>
    <div class="btns">
      <button @click="rotate(-90)">
        <i class="fas fa-arrow-left"></i>
      </button>
      <button @click="rotate(90)">
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>
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
  data() {
    return {
      pos: 0
    };
  },
  components: {
    CustomButton
  },
  methods: {
    handleLearnMoreClick() {
      this.$router.push({ path: '/about' });
    },
    rotate(deg) {
      this.pos += deg;
    }
  }
}
</script>


<style scoped>
.aboutsection {
  background-color: #131313;
  position:relative;
  padding-top:100px ;
  text-align: center;
  
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
.particles{
  height: 100vh;
}
.column-content {
  color: #fff;
  padding: 16px;
  /* margin-left: 50px; */
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
.wrapper {

  height: 330px;
  width: 330px;
 
}
.container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 800px;
  perspective-origin: 50%;
 
}
.image-cube {
  width: 320px;
  height: 320px;
  transform-style: preserve-3d;
  position: relative;
  transition: 2s;
  border-radius: 29px;
}
.image-cube div {
  height: 300px;
  width: 300px;
  position: absolute;
}
img {
  width: 100%;
  transform: translateZ(0);

}
.front {
  transform: translateZ(150px);
}
.right {
  transform: rotateY(-270deg) translateX(150px);
  transform-origin: 100% 0;
}
.back {
  transform: translateZ(-150px) rotateY(180deg);
}
.left {
  transform: rotateY(270deg) translateX(-150px);
  transform-origin: 0 50%;
}
.btns {
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  color: #fff;
}
.btns button {
  background-color: transparent;
  color: #ffffff;
  border: 3px solid #ffffff;

  padding: 8px 40px;
  border-radius: 20px;
  font-size: 20px;
  cursor: pointer;
}


@media (max-width: 768px) {
  .wrapper {
    height: 240px;
    width: 240px;
  }
  .image-cube {
    width: 240px;
    height: 240px;
    border-radius: 20px;
  }
  .image-cube div {
    height: 220px;
    width: 220px;
  }
  
  .column-content h2 {
    font-size: 24px; 
}
}


@media (max-width: 480px) {
  .wrapper {
    height: 190px;
    width: 190px;
  }
  .image-cube {
    width: 190px;
    height: 190px;
    border-radius: 15px;
  }
  .image-cube div {
    height: 190px;
    width: 190px;
  }
}


@media (max-width: 320px) {
  .wrapper {
    height: 150px;
    width: 150px;
  }
  .image-cube {
    width: 140px;
    height: 140px;
    border-radius: 10px;
  }
  .image-cube div {
    height: 130px;
    width: 130px;
  }
}
</style>
