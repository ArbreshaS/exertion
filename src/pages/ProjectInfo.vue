<template>
    <NavBar/>
    <AboutProjects/>
</template>
  
  <script>
  import NavBar from "../components/NavBar.vue"
  import AboutProjects from "@/modules/Projects/AboutProjects.vue";
  export default {
      components: {
      NavBar, 
      AboutProjects
    }
  }
  </script>
  
  <style>
  </style>