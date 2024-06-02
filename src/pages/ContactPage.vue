<template>
    <NavBar/>
   <ContactSection/>
   <ContactDetails/>
   <AboutContact/>
   <FooterSection/>
  </template>
  
  <script>
  import NavBar from "../components/NavBar.vue"
  import ContactSection from "@/modules/Contact/ContactSection.vue";
  import ContactDetails from "@/modules/Contact/ContactDetails.vue";
  import AboutContact from "@/modules/Contact/AboutContact.vue";
  import FooterSection from '@/components/FooterSection.vue';
  export default {
      components: {
      NavBar, 
      ContactSection,
      ContactDetails, 
      AboutContact,
      FooterSection
    }
  }
  </script>
  
  <style>
  
  </style>