<template>
  <NavBar/>
  <ProjectsDetails/>
</template>

<script>
import NavBar from "../components/NavBar.vue"
import ProjectsDetails from "@/modules/Projects/ProjectsDetails.vue";
export default {
    components: {
    NavBar, 
    ProjectsDetails,
  }
}
</script>

<style>

</style>