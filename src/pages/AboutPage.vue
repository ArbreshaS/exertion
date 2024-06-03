<template>
<div class="abouttemplate">
  <NavBar/>
      <AboutHero/>
      <AboutSection/>
      <AboutService/>
      <AboutCharts/>
      <AboutUs/>
      <FooterSection/>
</div>
   
   
 
</template>

<script>
import NavBar from "../components/NavBar.vue";
import AboutHero from "../modules/About/AboutHero.vue";
import AboutSection from "@/modules/About/AboutSection.vue";
import AboutService from "@/modules/About/AboutService.vue";
import AboutCharts from "@/modules/About/AboutCharts.vue"
import AboutUs from "@/modules/About/AboutUs.vue";
import FooterSection from '@/components/FooterSection.vue';

export default {
  components: {
    NavBar, 
    AboutHero,
    AboutSection,
    AboutService,
    AboutCharts,
    AboutUs,
    FooterSection
  }
}
</script>

<style >
.abouttemplate {
  background-color: #131313;
}
</style>