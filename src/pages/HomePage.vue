<template>
  <div>
    <NavBar/>
    <HeroSection/>
    <AboutSection/>
    <ServicesSection/>
    <InfoSection/>
    <div class="lamp" :style="{ display: lampDisplay }">
      <div class="lampposition"><img src="../assets//lampb.jpg"></div>
    </div>
    <TeamSection/>
    <VideoSection/>
    <ArchitectureSection/>
    <SliderSection/>
    <FooterSection/>
   
  </div>
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
    SliderSection,
    FooterSection,
  
  },
  data() {
    return {
      lampDisplay: 'block'
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.lampDisplay = window.innerWidth >= 950 ? 'block' : 'none';
    }
  }
}
</script>

<style scoped>
.lamp {
  position: relative;
}
.lampposition {
  position: absolute;
  top: -130px;
  right: 10px;
}
</style>
