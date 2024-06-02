<template>
    <NavBar/>
    <AboutProjects/>
    <FooterSection/>
</template>
  
  <script>
  import NavBar from "../components/NavBar.vue"
  import AboutProjects from "@/modules/Projects/AboutProjects.vue";
  import FooterSection from '@/components/FooterSection.vue';
  export default {
      components: {
      NavBar, 
      AboutProjects,
      FooterSection
    }
  }
  </script>
  
  <style>
  </style>