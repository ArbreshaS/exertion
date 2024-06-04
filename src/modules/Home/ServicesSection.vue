<template>
    <div class="services">
      <v-container fluid class="px-12" style="max-width: 1500px;">
        <v-row class="lamprelative">
          <v-col cols="12" md="6" lg="6">
            <div class="grid-item">
              <v-img class="service-image" :src="require('@/assets/services.png')" alt="Services Image"></v-img>
              <div class="play-icon-container" @click="openVideoModal(require('@/assets/video.mp4'))">
                <font-awesome-icon icon="play" />
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6" lg="6">
            <div class="grid-item">
              <h3>Services</h3>
              <h2>Thought out to the <span>smallest</span> detail</h2>
              <v-expansion-panels class="my-4" variant="popout">
                <v-expansion-panel
                  v-for="(item, index) in accordionItems"
                  :key="index"
                  :text="item.description"
                  :title="item.title"
                ></v-expansion-panel>
              </v-expansion-panels>
            </div>
          </v-col>
         
        </v-row>
       
      </v-container>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        accordionItems: [
          { title: 'Logo Design', description: 'Professional logo design services for businesses with impactful branding.' },
          { title: 'Business Card Design', description: 'Custom business card design to leave a lasting impression on clients.' },
          { title: 'Stationery Design', description: 'Create cohesive branding with custom stationery design for your business.' },
          { title: 'Letterhead Design', description: 'Design personalized letterheads to maintain a professional image.' },
          { title: 'Brochures', description: 'Engage your audience with visually appealing and informative brochures.' }
        ]
      };
    },
    methods: {
      openVideoModal(videoUrl) {
        window.open(videoUrl);
      }
    }
  };
  </script>
  
 
  <style scoped>
  .services {
    background-color: #131313;
    color: #fff;
    z-index: 999;
    padding-top: 180px;
  }
  
  .grid-item {
    position: relative; 
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 10px; 
    text-align: center; 
  }
  
  .grid-item h3 {
    color: #C8B560;
    font-size: 36px;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  
  .grid-item h2 {
    margin-bottom: 30px; 
    text-transform: uppercase;
    color:#fff;
  }
  
  .grid-item span{
    color: #C8B560;
  }
  
  .service-image {
    max-height: 500px;
    max-width: 100%;
    width: auto;
    height: auto;
    border-radius: 10%;
  }
  

.play-icon-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  cursor: pointer;
  width: 100px; 
  height: 100px; 
  background-color: #C8B560;
  border-radius: 50%; 
  display: flex;
  justify-content: center; 
  align-items: center; 
}

.play-icon {
  font-size: 56px; 
  color: #fff; 
 
}

  </style>
  