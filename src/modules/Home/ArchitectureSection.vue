<template>
  <div class="architecture
  ">
  <v-container fluid class="px-12" style="max-width: 1500px;">
    <v-row>
      <v-col cols="12" md="6" lg="6">
        <div class="text-section">
          <h1>Why <span>Choose</span> Us?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo sunt in culpa qui officia deserunt.
          </p>
          <div class="box">
           
          </div>
          
          <ul class="features-list">
            <li><i class="checkmark">✔</i> Ut enim ad minim veniam, quis nostrud exercitation.</li>
            <li><i class="checkmark">✔</i> Ullamco laboris nisi ut aliquip ex ea.</li>
            <li><i class="checkmark">✔</i> Duis aute irure dolor in reprehenderit in voluptate.</li>
            <li><i class="checkmark">✔</i> Velit esse cillum dolore eu fugiat nulla.</li>
            <li><i class="checkmark">✔</i> Excepteur sint occaecat cupidatat non proident.</li>
          </ul>
        </div>
      </v-col>
      <v-col cols="12" md="6" lg="6">
        <div class="image-section">
          <img src="../../assets/architecture2.jpg" alt="Restaurant Interior" />
          <div class="moving-box"></div> <!-- Add the moving box here -->
        </div>
      </v-col>
    </v-row>
  </v-container></div>
  
</template>

<script>
export default {

};
</script>

<style scoped>
.text-section h1 {
  font-size: 36px;
  font-weight: bold;
}
.text-section span{
  color: #C8B560;
}
.architecture{
  color: #fff;
  padding-top: 130px;
}

.text-section p {
  margin: 20px 0;
}

.design-image {
  width: 100%;
  height: 100%;
 z-index: 999999 !important;

}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.checkmark {
  color: #ffcc00;
  margin-right: 10px;
}

.image-section img {
  width: 100%;
  height: auto;
  border: 2px solid #C8B560;
  border-radius: 12px;
  
}
.image-section{
  position: relative;
}

.moving-box {
  width: 150px; 
  height: 150px; 
  position: absolute;
  border: 5px solid #C8B560;
  bottom: 500px;
  right: -30px; 
  animation: moveUpDown 2s infinite alternate;
}
.box {
	position: relative;
	width: 500px;
	height: 300px;
	background: repeating-conic-gradient(
		from var(--a),
		#C8B560 0%,
		#C8B560 5%,
		transparent 5%,
		transparent 40%,
		#C8B560 50%
	);
	border-radius: 20px;
	animation: animate 4s linear infinite;
}
.box::before,
.box::after {
	content: "";
	position: absolute;
  z-index: 999999;
}
.box::before {
	width: 100%;
	height: 100%;
	background: repeating-conic-gradient(
		from var(--a),
		#C8B560 0%,
		#45f3ff 5%,
		transparent 5%,
		transparent 40%,
		#45f3ff 50%
	);
	border-radius: 20px;
	animation: animate 4s linear infinite;
	animation-delay: -1s;
}
.box::after {
	inset: 8px;
	background-image: url(../../assets/architecture3.jpg);
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
	border-radius: 15px;
 
  
}

@property --a {
	syntax: "<angle>";
	inherits: false;
	initial-value: 0deg;
}
@keyframes animate {
	0% {
		--a: 0deg;
	}
	100% {
		--a: 360deg;
	}
}


@keyframes moveUpDown {
  0% {
    bottom: 0;
  }
  100% {
    bottom: 90px; /* Adjust the maximum height */
  }
}
</style>
