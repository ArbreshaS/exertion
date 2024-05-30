<template>
  <NavBar/>
  <HeroSection/>
  <AboutSection/>
  <ServicesSection/>
  <InfoSection/>
  <TestimionalsSection/>
  
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import HeroSection from '@/modules/Home/HeroSection.vue';
import AboutSection from "@/modules/Home/AboutSection.vue";
import ServicesSection from "@/modules/Home/ServicesSection.vue";
import InfoSection from "@/modules/Home/InfoSection.vue";

import TestimionalsSection from '../modules/Home/TestimionalsSection.vue';



export default {
  components: {
      NavBar,
      HeroSection,
      AboutSection,
      ServicesSection,
      InfoSection,
    
    TestimionalsSection

    },

}
</script>

<style scoped>

</style>