<template>
  <v-container fluid class="px-12" style="max-width: 1500px;">
    <v-row>
      <v-col cols="12" md="6">
        <div class="image-container">
          <img src="@/assets/ytrt.jpg" alt="Image" style="width: 100%; height: 100%;" class="zoom-image">
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="content-container">
          <h2>News</h2>
          <p><strong>Our great story</strong></p>
          <p class="par">We are modern collaborative architectural and landscape workshop, and have remained true to our trans-disciplinary way of thinking since our inception.</p>
          <p class="par">Our design solutions are methodically and holistically created following a rigorous analysis of the local context. We look to set new global standards by fostering a design approach which uniquely integrates urban planning, landscape, architecture and design of specific building components.</p>
          <p class="par">We regard environmental concerns, resource-consciousness, healthy project finances, social responsibility, and good craftsmanship as essential elements of our work. This ethos is fundamental to all our projects, a thread which runs from masterplanning to detail design.</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.image-container {
  margin-top: -150px; /* Ensure there's no conflicting styles */
  border-radius: 20px;
  overflow: hidden;
  z-index: 9999999; /* No need for !important, unless absolutely necessary */
}

.image-container img {
  transition: transform 0.3s ease;
  border-radius: 20px;
}

.image-container:hover img.zoom-image {
  transform: scale(1.2);
}

.content-container {
  padding: 20px;
}

.content-container h2 {
  font-size: 36px;
  color: #C8B560;
  text-transform: uppercase;
}

.content-container p {
  color: #fff;
  font-size: 16px;
  line-height: 1.6;
}

.par {
  margin: 40px 0;
}

@media only screen and (max-width: 960px) {
  .v-row {
    flex-direction: column;
  }
}
</style>
