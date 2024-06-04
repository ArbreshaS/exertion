<template>
  <div class="testimonials-container">
    <h2>Trusted By Over 30,000 Worldwide Customers Since 2009</h2>
    <v-container fluid class="px-12" style="max-width: 1500px;">
      <swiper
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        :autoplay="{ delay: 3000 }"
        :pagination="{ clickable: true }"
        :breakpoints="breakpoints"
      >
        <swiper-slide v-for="testimonial in testimonials" :key="testimonial.id">
          <div class="testimonial">
            <img :src="testimonial.image" alt="customer photo" class="customer-photo" />
            <p class="testimonial-text">{{ testimonial.text }}</p>
            <div class="stars">
              <span v-for="n in 5" :key="n" class="star">&#9733;</span>
            </div>
            <p class="customer-name">{{ testimonial.name }}</p>
            <p class="customer-title">{{ testimonial.title }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import alinaJamesPhoto from '@/assets/testimonial1.png';
import kevinAndrewPhoto from '@/assets/testimional2.png';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      breakpoints: {
        640: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      },
      testimonials: [
        {
          id: 1,
          image: alinaJamesPhoto,
          text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur exceptetur sint occaecat cupidatat proident...',
          name: 'Alina James',
          title: 'Happy Customer',
        },
        {
          id: 2,
          image: kevinAndrewPhoto,
          text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur exceptetur sint occaecat cupidatat proident...',
          name: 'Kevin Andrew',
          title: 'Happy Customer',
        },
        {
          id: 3,
          image: kevinAndrewPhoto,
          text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur exceptetur sint occaecat cupidatat proident...',
          name: 'Moni Osmani',
          title: 'Happy Customer',
        },
        {
          id: 4,
          image: alinaJamesPhoto,
          text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur exceptetur sint occaecat cupidatat proident...',
          name: 'Chris Dorman',
          title: 'Happy Customer',
        },
      ],
    };
  },
};
</script>

<style scoped>
.testimonials-container {
  background-image: url('@/assets/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  text-align: center;
  padding: 50px 20px;
  margin-top: 80px;
}

.testimonials-container h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

.swiper-container {
  width: 100%;
  max-width: 1500px;
  margin: auto;
}

.swiper-slide {
  display: flex;
  justify-content: center;
}

.testimonial {
  background-color: #222;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  position: relative;
  border: 1px solid #C8B560;
  width: 100%;
  max-width: 300px;
}

.customer-photo {
  border-radius: 50%;
  width: 80px;
  height: 80px;
}

.testimonial-text {
  font-size: 14px;
  margin: 15px 0;
}

.stars {
  color: #ffd700;
}

.customer-name {
  font-size: 16px;
  font-weight: bold;
}

.customer-title {
  font-size: 14px;
  color: #aaa;
}
</style>
