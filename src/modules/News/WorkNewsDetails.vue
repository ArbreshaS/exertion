<template>
  <div class="image-container">
    <v-container fluid class="px-12" style="max-width: 1500px;">
      <v-row>
        <v-col cols="12">
          <h2 class="title">Work Process</h2>
        </v-col>
      </v-row>
  <div class="work-process">
    <div class="steps">
      <div class="step">
        <div class="step-image">
          <img src="@/assets/all.jpg" alt="Concept">
          <span class="step-number">01</span>
          <div class="inner-circle"></div>
        </div>
        <h3>Concept</h3>
        <p>Nulla metus metus ullamcorper vel tincidunt sed euismod.</p>
      </div>
      <div class="dashed-line"></div>
      <div class="step">
        <div class="step-image">
          <img src="@/assets/all1.jpg" alt="Design Process">
          <span class="step-number">02</span>
          <div class="inner-circle"></div>
        </div>
        <h3>Design Process</h3>
        <p>Nulla metus metus ullamcorper vel tincidunt sed euismod.</p>
      </div>
      <div class="dashed-line"></div>
      <div class="step">
        <div class="step-image">
          <img src="@/assets/all2.jpg" alt="Supervision">
          <span class="step-number">03</span>
          <div class="inner-circle"></div>
        </div>
        <h3>Supervision</h3>
        <p>Nulla metus metus ullamcorper vel tincidunt sed euismod.</p>
      </div>
      <div class="dashed-line"></div>
      <div class="step">
        <div class="step-image">
          <img src="@/assets/all3.jpg" alt="Budget Planning">
          <span class="step-number">04</span>
          <div class="inner-circle"></div>
        </div>
        <h3>Budget Planning</h3>
        <p>Nulla metus metus ullamcorper vel tincidunt sed euismod.</p>
      </div>
    </div>
  </div>
  </v-container>
  </div>
</template>

<script>
export default {
  name: 'WorkProcess'
}
</script>

<style scoped>
.work-process {
  text-align: center;
  padding: 2rem;
}

.title {
  color: #C8B560;
  font-size: 36px;
  margin-top: 50px;
}

.steps {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.step {
  flex: 1;
  padding: 1rem;
  max-width: 250px;
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
  margin-bottom: 95px;
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
