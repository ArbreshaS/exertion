<template>
    <div class="home-page">
      <v-carousel
        v-model="currentIndex"
        height="97vh"
        :interval="3000"
        hide-controls
        hide-navigation
        hide-delimiters
        cycle
        class="carousel"
        @change="carouselChange"
      >
        <template v-slot:prev>
          <div class="arrow-left" @click="prevSlide"></div>
        </template>
        <template v-slot:next>
          <div class="arrow-right" @click="nextSlide"></div>
        </template>
        <v-carousel-item v-for="(item, index) in items" :key="index">
          <div class="carousel-content">
            <img :src="item.src" alt="Slider Image" class="carousel-image">
            <div class="carousel-text">
              <div class="text-container">
                <p class="text-line residential" :class="{ 'show': !transitioning }">{{ item.text1 }}</p>
                <p class="text-line home" :class="{ 'show': !transitioning }">{{ item.text2 }}</p>
                <p class="text-line in" :class="{ 'show': !transitioning }">{{ item.text3 }}</p>
                <p class="text-line forest" :class="{ 'show': !transitioning }">{{ item.text4 }}</p>
              </div>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </template>
  
  <script>
  import slider1 from "@/assets/slider1.png";
  import slider2 from "@/assets/slider2.png";
  import slider3 from "@/assets/slider3.png";
  
  export default {
   
    data() {
      return {
        items: [
          { src: slider1, text1: "RESIDENTIAL", text2: "Home", text3: "In", text4: "Forest" }, 
          { src: slider2, text1: "RESIDENTIAL", text2: "Villa", text3: "In", text4: "London" }, 
          { src: slider3, text1: "RESIDENTIAL", text2: "Rennovate", text3: "Exterior", text4: "With Garden" },
        ],
        currentIndex: 0,
        transitioning: true
      };
    },
    methods: {
      nextSlide() {
        this.transitioning = true;
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
      },
      prevSlide() {
        this.transitioning = true;
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
      },
      carouselChange() {
       
        setTimeout(() => {
          this.transitioning = false;
        }, 200);
      }
    }
  };
  </script>
  
  <style scoped>
  .carousel-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .carousel-text {
    position: absolute;
    top: 60%;
    left: 120px;
    transform: translateY(-50%);
    color: white;
  }
  
  .text-container {
    position: relative;
    padding: 50px 0 0 50px; 
  }
  
  .text-container::before,
  .text-container::after {
    content: '';
    position: absolute;
    background-color: #C8B560;
    border: 2px solid #C8B560;
  }
  
  .text-container::before {
    top: 0;
    left: -5px;
    width: 2px;
    height: 100vh; 
    transition: all 0.5s ease-in-out;
  }
  
  .text-container::after {
    top: 0;
    left: -5px;
    width: calc(100% + 10px);
    height: 2px;
    transition: all 0.5s ease-in-out;
  }
  
  .text-line {
    margin: 0;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
  
  .text-line.show {
    opacity: 1;
  }
  
  .residential {
    font-size: 1.2em;
    color: white;
    animation: fadeInResidential 1s ease-in-out forwards;
  }
  
  .home, .forest {
    font-size: 5em;
    color: white;
    font-weight: bold;
    animation: fadeInText 1s ease-in-out forwards;
  }
  
  .in {
    font-size: 5em;
    color: #C8B560;
    font-weight: bold;
    animation: fadeInText 1s ease-in-out forwards;
    animation-delay: 1s;
  }
  
  .home {
    animation-delay: 0.5s;
  }
  
  .forest {
    animation-delay: 1.5s;
  }
  
  .arrow-left,
  .arrow-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: black;
    font-size: 24px;
    cursor: pointer;
  }
  
  .arrow-left {
    left: 10px;
  }
  
  .arrow-right {
    right: 10px;
  }
  
  @keyframes fadeInResidential {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fadeInText {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  </style>
  