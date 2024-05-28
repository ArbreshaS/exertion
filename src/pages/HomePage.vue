<template>
  <NavBar/>
  <HeroSection/>
  <AboutSection/>
  <ServicesSection/>
  <InfoSection/>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import HeroSection from '@/modules/Home/HeroSection.vue';
import AboutSection from "@/modules/Home/AboutSection.vue";
import ServicesSection from "@/modules/Home/ServicesSection.vue";
import InfoSection from "@/modules/Home/InfoSection.vue";



export default {
  components: {
      NavBar,
      HeroSection,
      AboutSection,
      ServicesSection,
      InfoSection

    },

}
</script>

<style scoped>

</style>