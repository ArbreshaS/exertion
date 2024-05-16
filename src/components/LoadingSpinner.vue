<template>
    <div class="loading-overlay" :style="{ display: loading ? 'flex' : 'none' }">
      <img :src="require('@/assets/logo.png')" alt="Logo" style="width: 200px;" class="logo">
      <v-progress-circular
        :size="80"
        :width="8"
        color="#C8B560"
        indeterminate
      ></v-progress-circular>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoadingSpinner',
    props: {
      loading: Boolean
    }
  };
  </script>
  
  <style scoped>
  .loading-overlay {
    align-items: center;
    background-color: #131313; 
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 9999;
  }

  .logo{
    margin-left: 80px;
    padding-bottom: 70px;
  }
  </style>
  