<template>
    <div class="signup">
      <h2>Sign Up</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="formData.password" required>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          password: ''
        }
      };
    },
    methods: {
      submitForm() {
        // You can add your form submission logic here
        // For example, sending the form data to an API
        console.log('Form submitted with data:', this.formData);
      }
    }
  };
  </script>
  
  <style scoped>
  .signup{
    background-color: #fff;
  }
  </style>
  