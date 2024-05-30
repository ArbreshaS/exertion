<template>
    <div class="containerr">
      <div class="background-image">
        <div class="overlay"></div>
        <div class="overlay-text">
          <h1>EXTERIOR</h1>
          <p>Civic & Cultural</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    components: {}
  };
  </script>
  
  <style scoped>
  .containerr {
    position: relative;
    text-align: center;
    color: white;
    
  }
  
  .background-image {
    height: 100vh;
    background-image: url('@/assets/filmi.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-end; 
    position: relative;
    width: 100vw;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
  
  .overlay-text {
    position: relative;
    z-index: 1;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center; 
    align-items: center; 
    flex-direction: column;
    text-align: center ;
    margin-bottom: 20px; 
    color: #C8B560;
  }
  
  .overlay-text h1 {
    font-size: 25px;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  
  .overlay-text p {
    font-size: 60px;
    max-width: 600px;
    text-transform: uppercase;
  }
  </style>
  