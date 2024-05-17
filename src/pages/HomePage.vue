<template>
  <NavBar/>
  <HeroSection/>
  <AboutSection/>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import HeroSection from '@/modules/Home/HeroSection.vue';
import AboutSection from "@/modules/Home/AboutSection.vue"

export default {
  components: {
      NavBar,
      HeroSection,
      AboutSection

    },

}
</script>

<style>

</style>