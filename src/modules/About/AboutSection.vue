<template>
  <div class="about-section">
    <v-container fluid class="px-12" style="max-width: 1500px;">
      <v-row align="center" class="row-with-gap">
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
          
    <div  id="demo-text">
      <span>14</span> <br>
      <span>years</span> <br>
      <span>experience</span>
     
    </div>
          </div>
        </v-col>
        <v-col cols="12" md="1">

        </v-col>

        <v-col cols="12" md="7">
          <div class="second-column">
            <h3 class="about-title">About Us</h3>
            <h1 class="break">Break out of your routine with a perspective.</h1>
            <p class="par">Based on collective work and shared knowledge, Architecture-Studio aims to favour dialogue and debate, to transform individual knowledge into increased creative potential.</p>
            <p class="par a">Our Studio is an architecture practice based in Prague, Czech and Venice. Today, it includes 150 architects, urban planners, landscape and interior designers of 25 different nationalitie. From the very beginning, the practice has believed in the virtues of exchange, crossing ideas, common effort, shared knowledge.</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped>
.about-section {
  background-color: #131313;
  color: #fff;
  padding-top: 120px;
}

.about-title {
  color: #c8b560;
  font-size: 36px;
  margin-bottom: 30px;
}

.first-column {
  position: relative;
}
.first{
  position:relative;
  border: 2px solid #C8B560;
  border-radius: 10px;
  width: 100%;
  height: 100%;
}
.background{
  position: absolute;
  background-color:#C8B560;
  height: 300px;
  width: 300px;
  top: 30px;
  left: 40px;
  border-radius: 10px;

}


.break{
  color:#C8B560;
}

.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
}

.par {
  width: 700px;
  margin-top: 10px;
}
.a {
  margin-top: 40px;
}
#demo-text {
	font-size: 44px;
	font-weight: 700;
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
	background-image: url('https://robbreport.com/wp-content/uploads/2017/11/manzu-exterior-deck-5.jpg?w=1000');
  position: absolute;
  top: 60px;
  text-align: center;
  left: 50px;
  z-index: 999;
  text-transform: uppercase
}
</style>
