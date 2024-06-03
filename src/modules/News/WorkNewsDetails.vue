<template>
  <div class="image-container">
    <v-container fluid class="px-12" style="max-width: 1500px;">
      <v-row>
        <v-col cols="12">
          <h2 class="title">Work Process</h2>
        </v-col>
      </v-row>
      <v-row class="work-process">
        <v-col cols="12" sm="6" md="3" v-for="(step, index) in steps" :key="index">
          <div class="step">
            <div class="step-image">
              <img :src="step.img" :alt="step.title">
              <span class="step-number">{{ index + 1 }}</span>
              <div class="inner-circle"></div>
            </div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
          <div class="dashed-line" v-if="index < steps.length "></div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'WorkProcess',
  data() {
    return {
      steps: [
        {
          img: require('@/assets/all.jpg'),
          title: 'Concept',
          description: 'Nulla metus metus ullamcorper vel tincidunt sed euismod.'
        },
        {
          img: require('@/assets/all1.jpg'),
          title: 'Design Process',
          description: 'Nulla metus metus ullamcorper vel tincidunt sed euismod.'
        },
        {
          img: require('@/assets/all2.jpg'),
          title: 'Supervision',
          description: 'Nulla metus metus ullamcorper vel tincidunt sed euismod.'
        },
        {
          img: require('@/assets/all3.jpg'),
          title: 'Budget Planning',
          description: 'Nulla metus metus ullamcorper vel tincidunt sed euismod.'
        }
      ]
    };
  }
}
</script>
<style scoped>
.image-container {
  padding: 2rem 0;
}

.work-process {
  text-align: center;
  padding: 2rem 0;
}

.title {
  color: #C8B560;
  font-size: 36px;
  margin-top: 50px;
  text-align: center;
}

.step {
  padding: 1rem;
  position: relative;
}

.step-image {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
}

.step-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.step-image img:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.inner-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: rgba(50, 50, 50, 0.3);
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.step-number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

h3 {
  margin-top: 1rem;
  font-size: 1.5rem;
  color: #C8B560;
}

p {
  margin-top: 0.5rem;
  color: gray;
}

.dashed-line {
  width: 2rem;
  height: 1px;
  margin: 1rem auto;
  background: repeating-linear-gradient(
    to right,
    #C8B560,
    #C8B560 5px,
    transparent 5px,
    transparent 10px
  );
  flex-shrink: 0;
}
</style>
