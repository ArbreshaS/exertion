<template>
  <v-container fluid class="px-12" style="max-width: 1500px;">
    <div class="containers">
      <v-col cols="12" sm="12" md="6" lg="6">
        <div class="boxes" v-for="image in images" :key="image.id">
          <img :src="image.src" :alt="'Image ' + image.id">
          <div class="let">
            <h2>Large Flat</h2>
            <hr>
            <div class="let-details">
              <p><span class="gray-text">Total area:</span> 92m^2</p>
              <p><span class="gray-text">Bedrooms: </span>2</p>
              <p><span class="gray-text">Floor: </span>1</p>
              <p style="margin-top: 20px;"><span class="gray-text">Price:</span></p>
              <p class="let-label">$422 200</p>
              <p><span class="gray-text">Price per m2:</span> $3 200</p>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="6">
        <div class="additional-details">
          <p>Make an offer!</p>
          <ul>
            <li>Mauris dolor orci, sagittis ut varius in,<br/> interdum nec sapien.</li>
          </ul>
          <div class="offer-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter here" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter here" required>
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter here" required>
            <CustomButton class="mt-12" buttonText="MAKE OFFER" @click="handleLearnMoreClick" />
          </div>
        </div>
      </v-col>
    </div>
  </v-container>
</template>

<script>
import CustomButton from '@/components/CostumButton.vue';
export default {
  components: {
    CustomButton
  },
  data() {
    return {
      images: [
        { id: 1, src: require('@/assets/inkitchen.jpg') },
      ]
    };
  }
};
</script>

<style scoped>
.containers {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  align-items: flex-start;
  margin-top: 70px;
}

.boxes {
  width: 100%; 
  max-width: 400px; 
  border-radius: 6px;
  text-align: center;
  margin-bottom: 20px; 
  background-color: #fff; 
}

.boxes img {
  width: 100%; 
  max-width: 100%;
  height: auto;
  border-radius: 6px;
}

.let {
  margin-top: 20px;
}

.let h2 {
  font-size: 1.5em;
  font-weight: bold;
  color: #C8B560;
}

.let hr {
  width: 50%;
  margin: 10px auto;
  border: 1px solid lightgray;
}

.let-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.let p {
  font-size: 1em;
}

.gray-text {
  color: gray;
}

.additional-details {
  margin-top: 100px;
  margin-bottom: 50px;
  color: #fff;
}

.additional-details p {
  font-weight: bold;
  color: #C8B560;
  font-size: 2em;
}

.additional-details ul {
  list-style-type: none;
  padding: 0;
}

.additional-details li {
  margin-bottom: 10px;
}

.offer-form {
  margin-top: 20px;
}

.offer-form label {
  display: block;
  margin-bottom: 5px;
}

.offer-form input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
}

@media screen and (min-width: 768px) {
  .containers {
    margin-left: 300px;
  }
}

@media screen and (max-width: 767px) {
  .containers {
    margin-left: auto; 
    justify-content: center;
  }

  .boxes {
    width: 90%; 
  }

  .let h2 {
    padding-right: 0; 
  }

  .let hr {
    width: 100%;
  }

  .let-details {
    align-items: flex-start; 
  }

  .let p {
    padding-left: 0;
  }
}
</style>
