<template>
  <div class="container">
    <v-container fluid class="px-12" style="max-width: 1500px;">
      <v-row>
        <v-col cols="12" sm="6">
          <h3 class="contact-title">Meet <span>Us</span> in your City.</h3>
        </v-col>
      </v-row>
      <v-row>
        <div class="box" v-for="(image, _index) in images" :key="_index" @mouseover="showOverlay(_index)" @mouseleave="hideOverlay(_index)">
          <img :src="image.src" :alt="image.alt">
          <div class="overlay" v-if="activeIndex === _index">
            <template v-if="['France', 'Prague', 'Viena'].includes(image.alt)">
              <div class="contact-info" v-if="_index === 1">
                <h3>EVO GRAND HALL</h3>
                <p>Lítačka 35/29,</p>
                <p>06589 Nové Město,</p>
                <p>Czech Republic</p>
              </div>
              <div class="contact-info" v-else-if="_index === 2">
                <h3>INNERE STADT</h3>
                <p>Josefstädter Street,</p>
                <p>11 1030 Vienna,</p>
                <p>Austria</p>
              </div>
              <div class="contact-info" v-else>
                <h3>MONOPRIX</h3>
                <p>47 Rue de Babylone,</p>
                <p>75007 Paris,</p>
                <p>France</p>
              </div>
            </template>
            <template v-else>
              {{ image.alt }}
            </template>
          </div>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */ // Disable no-unused-vars rule for this file
export default {
  data() {
    return {
      images: [
        { id: 1, src: require('@/assets/prague.jpg'), alt: 'Prague' },
        { id: 2, src: require('@/assets/viena.jpg'), alt: 'Viena' },
        { id: 3, src: require('@/assets/france.jpg'), alt: 'France' }
      ],
      activeIndex: null
    };
  },
  methods: {
    showOverlay(_index) {
      this.activeIndex = _index;
    },
    hideOverlay(_index) {
      this.activeIndex = null;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between; 
}

.contact-title {
  color: #fff;
  font-size: 36px;
}

.contact-title span{
  color: #C8B560;
  font-size: 36px;
}

.box {
  width: 300px; 
  height: 300px; 
  margin: 48px; 
  position: relative;
  overflow: hidden;
}

.box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.box:hover img {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #C8B560;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  opacity: 0;
  transition: opacity 0.5s;
}

.box:hover .overlay {
  opacity: 0.7;
}

.contact-info {
  text-align: center;
  position: relative; 
}

.contact-info h3 {
  position: relative;
  padding-top: 10px; 
}

.contact-info h3::before {
  content: '';
  position: absolute;
  top: 0;
  left: 47%; 
  transform: translateX(-45%); 
  width: 50px; 
  height: 2px;
  background-color: #000; 
}
</style>
