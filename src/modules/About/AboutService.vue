<template>
    <div class="about-section">
      <div class="hero-section">
        <h1 class="hero-title">Inspired design for the modern architecture</h1>
      </div>
      <v-container fluid class="services-container">
        <v-container fluid class="px-12" style="max-width: 1500px;">
          <v-row justify="center" class="services-row">
            <v-col cols="12" md="4" class="service-card">
              <v-card>
                <v-card-title>
                    <font-awesome-icon icon="pen-nib" />
                  
                </v-card-title>
                <v-card-text>
                  <h3>Design</h3>
                  <p>Attention to detail, careful planning, and an individual approach are the key to successful and unique design of our projects.</p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4" class="service-card">
              <v-card>
                <v-card-title>
                    <font-awesome-icon icon="bars-progress" />
                </v-card-title>
                <v-card-text>
                  <h3>Projecting</h3>
                  <p>We attract the best design and modeling specialists to create comfort and convenience in your smart apartments.</p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4" class="service-card">
              <v-card>
                <v-card-title>
                    <font-awesome-icon icon="money-check-dollar" />
                </v-card-title>
                <v-card-text>
                  <h3>Budget</h3>
                  <p>Scale does not matter: our team of professionals perfectly cope with both large and low budget projects.</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </div>
  </template>
  
  <script>
  export default {
  };
  </script>
  
  <style scoped>
.about-section {
  text-align: center;
  color: #fff;
  padding-top: 120px;
}

.hero-section {
  background-image: url('@/assets/Bitmap-10.png'); 
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-title {
  font-size: 48px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.services-container {
  margin-top: -50px;
}

.service-card {
  margin: 20px 0;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.v-card-title {
  background-color: #c8b560;
  color: #fff;
  font-size: 24px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-card-title font-awesome-icon {
  margin-right: 10px;
}

.v-card-text {
  padding: 20px;
}

.v-card-text h3 {
  margin: 0 0 10px 0;
  color: #131313;
  font-size: 20px;
}

.v-card-text p {
  color: #131313;
}

@media (max-width: 600px) {
  .v-card-title {
    font-size: 20px;
  }
  
  .v-card-text h3 {
    font-size: 18px;
  }
}
</style>