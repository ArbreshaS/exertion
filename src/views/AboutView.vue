<template>
  <div class="about-page">
    <NavBar/>
    <div class="about-content">
      <AboutHero/>
      <AboutSection/>
      <AboutService/>
    </div>
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

<style scoped>
.about-page {
  display: flex;
  flex-direction: column;
  align-items: stretch; /* Ensure children stretch to fill the container */
  height: 100%; /* Ensure the page takes up the full height of the viewport */
}

.about-content {
  flex-grow: 1; /* Allow content to grow to fill remaining space */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
  justify-content: center; /* Center content vertically */
}

@media (max-width: 960px) {
  /* Adjust styles for smaller screens */
  .about-content {
    padding: 20px; /* Add padding for smaller screens */
  }
}
</style>
