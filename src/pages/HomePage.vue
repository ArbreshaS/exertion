<template>
  <div class="home-page">
    <NavBar/>
    a
    <v-carousel height="90vh" :interval="3000" hide-delimiters hide-controls hide-navigation  cycle class="carousel">
      <v-carousel-item v-for="(item, index) in items" :key="index">
        <img :src="item.src" alt="Slider Image" class="carousel-image">
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import slider1 from "@/assets/slider1.png";
import slider2 from "@/assets/slider2.png";
import slider3 from "@/assets/slider3.png";

export default {
  components: {
    NavBar
  },
  data() {
    return {
      items: [
        { src: slider1 }, 
        { src: slider2 }, 
        { src: slider3 }, 
      ]
    };
  }
};
</script>

<style scoped>



.carousel-image {
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
}
/* .v-btn--icon.v-btn--density-default{
  display:none !important;
} */
.v-window__controls{
  display: none !important;
}

</style>
