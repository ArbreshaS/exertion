<template>
  <NavBar/>
  <ProjectsDetails/>
  <FooterSection/>
</template>

<script>
import NavBar from "../components/NavBar.vue"
import ProjectsDetails from "@/modules/Projects/ProjectsDetails.vue";
import FooterSection from '@/components/FooterSection.vue';

export default {
    components: {
    NavBar, 
    ProjectsDetails,
    FooterSection
  }
}
</script>

<style>

</style>