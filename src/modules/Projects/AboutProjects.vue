<template>
  <div class="company-container">
    <div class="image-list">
      <div v-for="(image, index) in images" :key="index" class="image-container">
        <img :src="image.src" :alt="'Image ' + (index + 1)" class="company-image hidden-image">
        <div class="background-image fixed-background" :style="{ backgroundImage: `url(${image.src})` }"></div>
        <div v-if="index === 0" class="overlay-text">
          <div class="centered-text">INTERIOR</div>
          <div class="centered-text bigger-text">European Lard Station</div>
        </div>
        <div v-if="index === 1" class="additional-box">
          <div class="box-content">
            <div class="work-done-wrapper">
              <div class="work-done">WORK DONE:</div>
              <span class="work-done-line"></span>
            </div>
            <div class="env-design-wrapper">
              <ul class="env-design">
                <li class="env">environment design</li>
                <li class="mode">modelling</li>
                <li class="text">texturing/materials</li>
                <li class="set">set dressing</li>
              </ul>
            </div>
          </div>
        </div>
        <div v-if="index === 2" class="additional-box larger-box shorter-box left-box">
          <div class="box-content">
            <div class="work-done-wrapper">
              <div class="work-done-tools">TOOLS USED:</div>
              <span class="work-done-line"></span>
            </div>
            <div class="env-design-wrapper">
              <ul class="env-design">
                <li class="auto">Autodesk 3ds Max</li>
                <li class="adobe">Adobe Photoshop</li>
                <li class="uv">UV Layout</li>
                <li class="sub">Substance Painter</li>
                <li class="des">Substance Designer</li>
                <li class="bit">Bitmap2Material</li>
                <li class="un">Unreal Engine 1</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-julia">
          <img :src="juliaPhoto" class="full-width-image"/>
          <figcaption>
            <h2> Identify your <span>Market!</span></h2>
            <div>
              <p>Dedication is powerful combination.</p>
              <p>Attraction needs attention</p>
              <p>Think about your interior!</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import juliaPhoto from '@/assets/pro.jpg';
export default {
  data() {
    return {
      images: [
        { id: 1, src: require('@/assets/design.jpg') },
        { id: 2, src: require('@/assets/magic.jpg') },
        { id: 3, src: require('@/assets/in.jpg') },
      ],
      juliaPhoto: juliaPhoto
    };
  }
};
</script>
<style scoped>
.company-container {
  text-align: center;
}

.image-list {
  margin-top: -20px;
}

.image-container {
  position: relative;
  height: 950px; 
}

.hidden-image {
  display: none;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.fixed-background {
  background-attachment: fixed;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.centered-text {
  color: white;
  font-size: 16px;
}

.bigger-text {
  font-size: 50px;
  font-weight: bold;
}

.additional-box {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translate(0, -50%);
  height: 300px;
  width: 400px;
  background-color: white;
  padding: 30px;
}

.larger-box {
  width: 400px;
}

.shorter-box {
  height: 350px;
}

.left-box {
  right: auto;
  left: 20px;
}

.box-content {
  color: black;
}

.work-done-wrapper {
  display: flex;
  align-items: center;
  position: relative;
}

.work-done {
  font-weight: bold;
  margin-left: 63px;
  z-index: 1;
}

.work-done-tools {
  font-weight: bold;
  margin-left: 75px;
  z-index: 1;
}

.work-done-line {
  position: absolute;
  left: -80px;
  width: 100px;
  height: 1px;
  background-color: black;
}

.env-design-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
}

.env-design {
  margin-top: 40px;
  list-style: none;
  padding-left: 0;
}

.env-design li {
  margin-bottom: 7px;
}

.env-design li.env {
  margin-left: 64px;
}

.env-design li.mode {
  margin-right: 6px;
}

.env-design li.text {
  padding-left: 55px;
}

.env-design li.set {
  padding-left: 12px;
}

.env-design li.auto {
  padding-left: 63px;
}

.env-design li.adobe {
  padding-left: 57px;
}

.env-design li.uv {
  padding-left: 5px;
}

.env-design li.sub {
  padding-left: 61px;
}

.env-design li.des {
  padding-left: 74px;
}

.env-design li.bit {
  padding-left: 46px;
}

.env-design li.un {
  padding-left: 46px;
}

.env-design li::before {
  content: "•";
  margin-right: 5px;
  color: black;
}

*, *:after, *:before { 
  box-sizing: border-box; 
}

.clearfix:before, .clearfix:after { 
  display: table; 
  content: ''; 
}

.clearfix:after { 
  clear: both; 
}

.grid figure {
  position: relative;
  float: left;
  overflow: hidden;
  margin: 10px 1%;
  min-width: 320px;
  max-width: 480px;
  max-height: 360px;
  width: 48%;
  height: auto;
  background: #3085a3;
  text-align: center;
  cursor: pointer;
}

.grid figure img {
  position: relative;
  display: block;
  min-height: 100%;
  max-width: 100%;
  opacity: 0.8;
  height: 360px;
  width: 100%;
}

.grid figure figcaption {
  padding: 2em;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25em;
  backface-visibility: hidden;
}

.grid figure figcaption::before,
.grid figure figcaption::after {
  pointer-events: none;
}

.grid figure figcaption,
.grid figure figcaption > a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.grid figure h2 span {
  font-weight: 800;
}

.grid figure h2,
.grid figure p {
  margin: 0;
}

.grid figure p {
  letter-spacing: 1px;
  font-size: 68.5%;
}

figure.effect-julia {
  background: #2f3238;
}

figure.effect-julia img {
  max-width: none;
  height: 400px;
  transition: opacity 1s, transform 1s;
  backface-visibility: hidden;
}

figure.effect-julia figcaption {
  text-align: left;
}

figure.effect-julia h2 {
  position: relative;
  padding: 0.5em 0;
}

figure.effect-julia p {
  display: inline-block;
  margin: 0 0 0.25em;
  padding: 0.4em 1em;
  background: rgba(255,255,255,0.9);
  color: #2f3238;
  text-transform: none;
  font-weight: 500;
  font-size: 75%;
  transition: opacity 0.35s, transform 0.35s;
  transform: translate3d(-360px,0,0);
}

figure.effect-julia p:first-child {
  transition-delay: 0.15s;
}

figure.effect-julia p:nth-of-type(2) {
  transition-delay: 0.1s;
}

figure.effect-julia p:nth-of-type(3) {
  transition-delay: 0.05s;
}

figure.effect-julia:hover img {
  opacity: 0.4;
  transform: scale3d(1.1,1.1,1);
}

figure.effect-julia:hover p {
  opacity: 1;
  transform: translate3d(0,0,0);
}

.grid {
  width: 100vw;
  height: auto;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/ll.png.jpg");
  background-size: cover;
  background-position: center;
}
</style>
