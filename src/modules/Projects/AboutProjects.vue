<template>
  <div class="company-container">
    <div class="image-list">
      <div v-for="(image, index) in images" :key="index" class="image-container">
        <img :src="image.src" :alt="'Image ' + (index + 1)" class="company-image">
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
        <div v-if="index === 2" class="additional-box larger-box">
          <div class="box-content">
            <div class="work-done-wrapper">
              <div class="work-done">TOOLS USED:</div>
              <span class="work-done-line"></span>
            </div>
            <div class="env-design-wrapper">
              <ul class="env-design">
                <li class="env">Autodesk 3ds Max</li>
                <li class="mode">Adobe Photoshop</li>
                <li class="text">UV Layout</li>
                <li class="set">Substance Painter</li>
                <li class="mode">Substance Designer</li>
                <li class="text">Bitmap2Material</li>
                <li class="set">Unreal Engine 1</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { id: 1, src: require('@/assets/design.jpg') },
        { id: 2, src: require('@/assets/magic.jpg') },
        { id: 3, src: require('@/assets/in.jpg') },
        { id: 4, src: require('@/assets/pro.jpg') }
      ]
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
}

.company-image {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: -20px;
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
  height: 400px; /* Increased height */
  width: 400px;  /* Increased width */
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

.env-design li::before {
  content: "•";
  margin-right: 5px;
  color: black;
}
</style>
