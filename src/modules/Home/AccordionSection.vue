<template>
    <v-container fluid>
      <v-row>
        <!-- First Column: Carousel with Projects Section -->
        <v-col cols="12" md="6">
          <v-carousel>
            <v-carousel-item>
              <div class="infosection">
                <v-container fluid class="px-12" style="max-width: 1500px;">
                  <v-col cols="12">
                    <h3 class="news-title">Projects</h3>
                  </v-col>
                  <v-row class="row">
                    <v-col cols="12" md="3" class="column" :row-span="2">
                      <div>
                        <v-row class="inner-row">
                          <v-col cols="12" class="inner-col">
                            <v-img
                              :src="require('@/assets/1.jpg')"
                              alt="Image 1"
                              class="stretch-image hover-transform"
                            />
                          </v-col>
                          <v-col cols="12" class="inner-col">
                            <v-img
                              :src="require('@/assets/b.jpg')"
                              alt="Image 2"
                              class="stretch-image hover-transform"
                            />
                          </v-col>
                        </v-row>
                      </div>
                    </v-col>
                    <v-col cols="12" md="3" class="column">
                      <div class="im">
                        <v-img
                          :src="require('@/assets/c.jpg')"
                          alt="Image 3"
                          class="stretch-image hover-transform"
                        />
                      </div>
                    </v-col>
                    <v-col cols="12" md="3" class="column" :row-span="2">
                      <v-row class="inner-row">
                        <v-col cols="12" class="inner-col">
                          <v-img
                            :src="require('@/assets/feat.jpg')"
                            alt="Image 4"
                            class="stretch-image hover-transform"
                          />
                        </v-col>
                        <v-col cols="12" class="inner-col">
                          <v-img
                            :src="require('@/assets/5.jpg')"
                            alt="Image 5"
                            class="stretch-image hover-transform"
                          />
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" md="3" class="column">
                      <div class="im">
                        <v-img
                          :src="require('@/assets/6.jpg')"
                          alt="Image 3"
                          class="stretch-image hover-transform"
                        />
                      </div>
                    </v-col>
                  </v-row>
                  <v-row justify="center" align="center" class="mt-12">
                    <CostumButton buttonText="More Projects" @click="handleLearnMoreClick" />
                  </v-row>
                </v-container>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-col>
  
        <!-- Second Column: Single Image -->
        <v-col cols="12" md="6">
          <v-img :src="require('@/assets/ytrt.jpg')" alt="Single Image" class="stretch-image hover-transform" />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import CostumButton from '@/components/CostumButton.vue';
  
  export default {
    components: {
      CostumButton
    },
    methods: {
      handleLearnMoreClick() {
        this.$router.push({ path: '/projects' });
      }
    }
  };
  </script>
  
  <style scoped>
  .infosection {
    background-color: #131313;
    padding-top: 150px;
  }
  
  .row {
    display: flex;
  }
  
  .column {
    display: flex;
    flex-direction: column;
  }
  
  .inner-row {
    flex-grow: 1;
  }
  
  .inner-col {
    flex-grow: 1;
  }
  
  .stretch-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.3s ease-in-out;
  }
  
  .hover-transform:hover {
    transform: scale(1.1);
  }
  
  .news-title {
    color: #C8B560;
    font-size: 36px;
    margin-bottom: 40px;
  }
  </style>
  