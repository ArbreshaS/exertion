<template>
    <NavBar/>
   <ContactSection/>
   <ContactDetails/>
  </template>
  
  <script>
  import NavBar from "../components/NavBar.vue"
  import ContactSection from "@/modules/Contact/ContactSection.vue";
  import ContactDetails from "@/modules/Contact/ContactDetails.vue";
  export default {
      components: {
      NavBar, 
      ContactSection,
      ContactDetails
    }
  }
  </script>
  
  <style>
  
  </style>