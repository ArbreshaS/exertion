<template>
  <div class="image-container">
    <v-container fluid class="px-12" style="max-width: 1500px;">
      <v-row>
        <v-col cols="12">
          <h3 class="news-title">Projects</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12"></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="6" class="image-col">
          <div class="image-box smaller-image smallerr-div relative-position">
            <img :src="imageUrls[0]" :alt="'Image 1'">
            <div class="info-box">
              <h4>Seascape Villa</h4>
              <p>Aqaba, Jordan</p>
              <CostumButton buttonText="MORE" @click="handleLearnMoreClick" />
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="6" class="image-col">
          <div class="image-box larger-image larger-div relative-position">
            <img :src="imageUrls[1]" :alt="'Image 2'">
            <div class="info-box">
              <h4>European Lard Station</h4>
              <p>Strasbourg, France</p>
              <CostumButton buttonText="MORE" @click="handleLearnMoreClick" />
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="6" class="image-col">
          <div class="image-box larger-image largerr-div relative-position">
            <img :src="imageUrls[2]" :alt="'Image 3'">
            <div class="info-box">
              <h4>Dance and Music Theatre</h4>
              <p>Perth, Australia</p>
              <CostumButton buttonText="MORE" @click="handleLearnMoreClick" />
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="6" class="image-col">
          <div class="image-box smaller-image smaller-div relative-position">
            <img :src="imageUrls[3]" :alt="'Image 4'">
            <div class="info-box">
              <h4>Cultural Complex Centre</h4>
              <p>Muscat, Sultanate of Oman</p>
              <CostumButton buttonText="MORE" @click="handleLearnMoreClick" />
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="6" class="image-col">
          <div class="image-box smaller-image smalleer-div relative-position">
            <img :src="imageUrls[4]" :alt="'Image 5'">
            <div class="info-box">
              <h4>Yabroudi Villa</h4>
              <p>Dubai, United Arab Emirates</p>
              <CostumButton buttonText="MORE" @click="handleLearnMoreClick" />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CostumButton from '@/components/CostumButton.vue';

export default {
  components: {
    CostumButton,

   
  },

  data() {
    return {
      imageUrls: [
        require('@/assets/outside.jpg'),
        require('@/assets/europe.jpg'),
        require('@/assets/feat.jpg'),
        require('@/assets/office.jpg'),
        require('@/assets/relax.jpg')
      ]
    };
  },
  methods: {
    handleLearnMoreClick() {
      this.$router.push({ path: '/projectinfo' });
    }
  }

};
</script>

<style scoped>
.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  background-color: #131313;
}

.news-title {
  color: #C8B560;
  font-size: 36px;
  margin-bottom: 20px;
}

.image-col {
  position: relative;
  width: 100%;
}

.image-box {
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: #131313;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out; 
}

.info-box {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60%;
  background-color: #131313;
  padding: 15px;
  border-radius: 0;
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.5s ease;
  transform: translateY(30px);
}

.info-box h4 {
  margin: 0 0 5px 0;
  font-size: 20px;
  color: #fff;
}

.info-box p {
  margin: 0 0 10px 0;
  font-size: 14px;
  color: #bbb;
}

.image-box:hover .info-box {
  opacity: 1;
  transform: translateY(0);
}

.image-box:hover img {
  transform: scale(1.1); 
}

.smallerr-div {
  margin-top: 90px !important;
}

.largerr-div {
  margin-top: -130px;
  height: 700px;
}

.smalleer-div {
  margin-left: 595px !important;
  margin-top: -130px;
}

@media screen and (max-width: 767px) {
  .image-col {
    width: 100%;
  }
}
</style>
