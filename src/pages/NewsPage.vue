<template>
    <NavBar/>
    <NewsDetails/>
  </template>
  
  <script>
  import NavBar from "../components/NavBar.vue"
  import NewsDetails from "@/modules/News/NewsDetails.vue";
  export default {
      components: {
      NavBar, 
      NewsDetails
    }
  }
  </script>
  
  <style>
  
  </style>