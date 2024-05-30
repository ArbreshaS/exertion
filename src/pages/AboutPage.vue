<template>
<div class="abouttemplate">
  <NavBar/>
      <AboutHero/>
      <AboutSection/>
      <AboutService/>
</div>
   
   
 
</template>

<script>
import NavBar from "../components/NavBar.vue"
import AboutHero from "../modules/About/AboutHero.vue"
import AboutSection from "@/modules/About/AboutSection.vue";
import AboutService from "@/modules/About/AboutService.vue"

export default {
  components: {
    NavBar, 
    AboutHero,
    AboutSection,
    AboutService
  }
}
</script>

<style >
.abouttemplate {
  background-color: #131313;
}
</style>