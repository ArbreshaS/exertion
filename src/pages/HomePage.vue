<template>
  <NavBar/>
  <HeroSection/>
  <AboutSection/>
  <ServicesSection/>
  <InfoSection/>
  <TeamSection/>
  <VideoSection/>
  <ArchitectureSection/>
   <SliderSection/>
  
  <FooterSection/>
  
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import HeroSection from '@/modules/Home/HeroSection.vue';
import AboutSection from "@/modules/Home/AboutSection.vue";
import ServicesSection from "@/modules/Home/ServicesSection.vue";
import InfoSection from "@/modules/Home/InfoSection.vue";
import TeamSection from "../modules/Home/TeamSection.vue"
import VideoSection from "../modules/Home/VideoSection.vue"
import ArchitectureSection from '@/modules/Home/ArchitectureSection.vue';
// import AccordionSectionn from "../modules/Home/AccordionSection.vue"
import SliderSection from '../modules/Home/SliderSection.vue';
import FooterSection from '@/components/FooterSection.vue';




export default {
  components: {
      NavBar,
      HeroSection,
      AboutSection,
      ServicesSection,
      InfoSection,
      TeamSection,
      VideoSection,
      ArchitectureSection,
      
      // AccordionSectionn,
    
   SliderSection,
    FooterSection

    },

}
</script>

<style scoped>

</style>