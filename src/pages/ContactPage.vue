<template>
    <NavBar/>
   <ContactSection/>
   <ContactDetails/>
   <AboutContact/>
  </template>
  
  <script>
  import NavBar from "../components/NavBar.vue"
  import ContactSection from "@/modules/Contact/ContactSection.vue";
  import ContactDetails from "@/modules/Contact/ContactDetails.vue";
  import AboutContact from "@/modules/Contact/AboutContact.vue";
  export default {
      components: {
      NavBar, 
      ContactSection,
      ContactDetails, 
      AboutContact
    }
  }
  </script>
  
  <style>
  
  </style>