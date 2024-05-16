<template>
    <div>
      <div class="nav">
        <h1>FRONTEND TRENDS</h1>
        <h3 class="loader">
          <span v-for="(letter, index) in loaderText" :key="index" class="m">{{ letter }}</span>
        </h3>
        <div class="nav-container">
          <NavTab v-for="tab in tabs" :key="tab.id" :tab="tab"/>
          <span class="nav-tab-slider"></span>
        </div>
      </div>
  
      <div class="slider">
        <SliderTab v-for="tab in tabs" :key="tab.id" :tab="tab"/>
      </div>
    </div>
  </template>
  
  <script>
  import NavTab from './NavTab.vue';
  import SliderTab from './SliderTab.vue';
  
  export default {
    components: {
      NavTab,
      SliderTab
    },
    data() {
      return {
        loaderText: ['B', 'E', 'N', 'E', 'F', 'I', 'T', 'S', '&nbsp;', 'o', 'f', '&nbsp;', 'T', 'E', 'C', 'H', 'N', 'O', 'L', 'O', 'G', 'I', 'E', 'S'],
        tabs: [
          { id: 'tab-svelte', text: 'SVELTE' },
          { id: 'tab-esbuild', text: 'ESBUILD' },
          { id: 'tab-next', text: 'NEXT.JS' },
          { id: 'tab-typescript', text: 'TYPESCRIPT' },
          { id: 'tab-vite', text: 'VITE' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Component Styles */
  .nav, .slider {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
    background-color: #1e1f26;
    text-align: center;
    padding: 0 2em;
  }
  
  .nav h1, .slider h1 {
    font-family: "Josefin Sans", sans-serif;
    font-size: 5vw;
    margin: 0;
    padding-bottom: 0.5rem;
    letter-spacing: 0.5rem;
    color: #03dac6;
    transition: all 0.3s ease;
    z-index: 3;
  }
  
  .nav-container {
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 75px;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    background: #1e1f26;
    z-index: 10;
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  }
  
  .nav-tab {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    color: #03dac6;
    letter-spacing: 0.1rem;
    transition: all 0.5s ease;
    font-size: 2vw;
  }
  
  .nav-tab:hover {
    color: #1e1f26;
    background: #03dac6;
    transition: all 0.5s ease;
  }
  
  .nav-tab-slider {
    position: absolute;
    bottom: 0;
    width: 0;
    height: 2px;
    background: #03dac6;
    transition: left 0.3s ease;
  }
  
  .slider h2 {
    font-size: 2vw;
    letter-spacing: 0.3rem;
    font-family: "ROBOTO", sans-serif;
    font-weight: 300;
    color: #faebd7;
    z-index: 4;
  }
  
  .loader span {
    color: #faebd7;
    text-shadow: 0 0 0 #faebd7;
    -webkit-animation: loading 1s ease-in-out infinite alternate;
  }
  
  @-webkit-keyframes loading {
    to {
      text-shadow: 20px 0 70px #ff0266;
      color: #ff0266;
    }
  }
  
  .loader span:nth-child(2) {
    -webkit-animation-delay: 0.1s;
  }
  
  .loader span:nth-child(3) {
    -webkit-animation-delay: 0.2s;
  }
  
  .loader span:nth-child(4) {
    -webkit-animation-delay: 0.3s;
  }
  
  .loader span:nth-child(5) {
    -webkit-animation-delay: 0.4s;
  }
  
  .loader span:nth-child(6) {
    -webkit-animation-delay: 0.5s;
  }
  
  .loader span:nth-child(7) {
    -webkit-animation-delay: 0.6s;
  }
  
  .loader span:nth-child(8) {
    -webkit-animation-delay: 0.7s;
  }
  
  .loader span:nth-child(9) {
    -webkit-animation-delay: 0.8s;
  }
  
  .loader span:nth-child(10) {
    -webkit-animation-delay: 
  