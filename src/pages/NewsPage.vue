<template>
    <NavBar/>
    <NewsDetails/>
    <FooterSection/>
  </template>
  
  <script>
  import NavBar from "../components/NavBar.vue"
  import NewsDetails from "@/modules/News/NewsDetails.vue";
  import FooterSection from '@/components/FooterSection.vue';
  export default {
      components: {
      NavBar, 
      NewsDetails,
      FooterSection
    }
  }
  </script>
  
  <style>
  
  </style>