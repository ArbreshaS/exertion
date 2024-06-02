<template>
    <v-container fluid class="px-12" style="max-width: 1500px;">
    <div class="containers">
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
            <p class="let-label" style="font-size: 1.2rem; color: #3D64CC;">$422 200</p>
            <p style="margin-left: 200px; margin-top: -50px;"><span class="gray-text">Price per m2:</span></p>
            <p class="let-price" style="margin-left: 200px;">$3 200</p>
          </div>
        </div>
      </div>
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
          <CustomButton buttonText="MAKE OFFER" @click="handleLearnMoreClick" />
        </div>
      </div>
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
  
  <style>
  .containers {
    display: flex;
    justify-content: flex-start; 
    align-items: center;
    height: 100vh;
    margin-left: 300px; 
    margin-top: 70px;
  }
  
  .boxes {
    width: 40%; 
    border-radius: 6px;
    text-align: center;
    margin-right: 20px; 
    background-color: #fff; 
  }
  
  .boxes img {
    max-width: 100%;
    border-radius: 6px;
  }
  
  .let {
    margin-top: 20px;
  }
  
  .let h2 {
    font-size: 1.5em;
    font-weight: bold;
    padding-right: 180px;
    color: #C8B560;
  }
  
  .let hr {
    width: 83%;
    margin: 10px auto;
    border: 1px solid lightgray;
  }
  
  .let-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .let p {
    font-size: 1em;
    padding-left: 30px;
  }
  
  .gray-text {
    color: gray;
  }
  
  .additional-details {
    margin-left: 20px; 
    margin-top: 100px; 
    margin-bottom: 50px; 
    color: #fff;
  }
  
  .additional-details p {
    font-weight: bold;
    color: #C8B560;
    font-size: 36px;
  }
  
  .additional-details ul {
    list-style-type: none;
    padding: 0;
  }
  
  .additional-details li {
    margin-bottom: 5px;
    margin-top: 20px;
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
  </style>
  