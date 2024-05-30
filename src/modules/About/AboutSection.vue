<template>
  <div class="about-section">
    <v-container fluid class="px-12" style="max-width: 1500px;">
      <v-row class="d-flex justify-center align-center row-with-gap">
        <v-col cols="12" md="4" class="column-with-gap">
          <div class="first-column">
            <div class="first">
              <v-img
                :aspect-ratio="1"
                class="bg-white"
                :src="require('@/assets/o.png')"
                width="600"
                cover
              ></v-img>
              <div class="background"></div>
            </div>
            <div id="demo-text" class="demo-text">
              <span>14</span> <br>
              <span>years</span> <br>
              <span>experience</span>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="1"></v-col>
        <v-col cols="12" md="7">
          <div class="second-column text-center text-md-left">
            <h3 class="about-title">About Us</h3>
            <h1 class="break">Break out of your routine with a perspective.</h1>
            <p class="par">Based on collective work and shared knowledge, Architecture-Studio aims to favour dialogue and debate, to transform individual knowledge into increased creative potential.</p>
            <p class="par a">Our Studio is an architecture practice based in Prague, Czech and Venice. Today, it includes 150 architects, urban planners, landscape and interior designers of 25 different nationalities. From the very beginning, the practice has believed in the virtues of exchange, crossing ideas, common effort, shared knowledge.</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>


.about-title {
  color: #c8b560;
  font-size: 36px;
  margin-bottom: 30px;
}

.first-column {
  position: relative;
  text-align: center;
}

.first {
  position: relative;
  border: 2px solid #c8b560;
  border-radius: 10px;
  max-width: fit-content;
  height: 100%;
}

.background {
  position: absolute;
  background-color: #c8b560;
  height: 100%; 
  width: 100%;
  top: 0;
  left: 0;
  border-radius: 10px;
  opacity: 0.6; 
}

.break{
  color:#c8b560
}
.demo-text {
  font-size: 44px;
}
.row-with-gap{
  padding-top:120px;
}

#demo-text {
  font-size: 44px;
  font-weight: 700;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: url('https://robbreport.com/wp-content/uploads/2017/11/manzu-exterior-deck-5.jpg?w=1000');
  position: absolute;
  top: 20%;
  left: 10%; 
  z-index: 999;
  text-align: center;
  text-transform: uppercase;
}
.par{
  margin-top: 30px;
  color: #fff;
}

@media (max-width: 1100px) and (min-width: 960px) {
  .demo-text {
    font-size: 34px !important; 
  }
}
@media (max-width: 450px) {
  .demo-text {
    font-size: 32px !important; 
  }
}


</style>
