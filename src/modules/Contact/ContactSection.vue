<template>
  <div class="contact-container">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <h3 class="contact-title">Contact</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" style="position: relative;">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.03617789265!2d-74.30934432187216!3d40.697539944692835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1700352275754!5m2!1sen!2s"
            style="border: 0; width: 100%; height: 750px;"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
          <div class="info-box-overlay" :class="{ 'responsive-scroll': isResponsive }">
            <div class="info-line">
              <h3 class="title">Melbourne, <span class="highlight">Australia</span></h3>
            </div>
            <div class="info-line" style="margin-top: 30px;"> 
              <p class="paragraph">269 King Str, 05th Floor, Utral House</p>
              <p class="paragraph">Building, Melbourne, VIC 3000, Australia.</p>
            </div>
            <div class="info-line" style="margin-top: 30px; font-size: 30px; line-height: 1.1;"> 
              <p class="paragraph number">+99 (0) 344 956 4050</p>
            </div>
            <div class="info-line" style="margin-top: 80px; margin-bottom: 15px;">
              <p class="paragraph email"><span style="color: #fff; font-weight: bold;">Email:</span> info@sparch.co</p>
            </div>
            <div class="info-line" style="margin-bottom: 15px;">
              <p class="paragraph follow">
                <span style="color: #fff; font-weight: bold;">Follow us:</span>
                <font-awesome-icon class="social-icon" :icon="['fab', 'facebook']" style="color: #fff; margin: 0 10px;"  />
                <font-awesome-icon class="social-icon" :icon="['fab', 'twitter']" style="color: #fff; margin: 0 10px;" />
                <font-awesome-icon class="social-icon" :icon="['fab', 'pinterest']" style="color: #fff; margin: 0 10px;" />
              </p>
            </div>
            <div class="info-line" style="margin-bottom: 15px;">
              <p class="paragraph work-hours"><span style="color: #fff; font-weight: bold;">Work Hours:</span> Monday - Friday: 08h00 - 17h30 </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isResponsive: false
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.isResponsive = window.innerWidth < 600; 
    }
  }
};
</script>

<style scoped>
.contact-container {
  background-color: #131313; 
  padding-top: 50px; 
}

.contact-title {
  color: #C8B560;
  font-size: 36px;
}

.info-box-overlay {
  position: absolute;
  top: 50%;
  left: 30%; 
  transform: translate(-50%, -50%);
  background-color: #131313;
  color: white;
  padding: 80px; 
  max-width: 600px; 
  max-height: 1500px; 
  z-index: 1; 
  text-align: center; 
}

.info-box-overlay h3.title {
  margin-top: 0;
  font-size: 2.2em; 
  display: inline-block; 
}

.info-box-overlay .highlight {
  color: #C8B560; 
}

.info-box-overlay .paragraph {
  margin: 1px 0; 
  color: #787878; 
  font-size: 1.2em; 
}

.info-box-overlay .paragraph.number {
  color: #fff; 
  font-weight: bold; 
}

.info-line {
  width: 100%;
  text-align: left;
}

.info-box-overlay .paragraph.number:hover,
.info-box-overlay .paragraph.email:hover {
  color: #C8B560; 
  cursor: pointer;
}

.social-icon:hover {
  color: #C8B560 !important;
  cursor: pointer !important;
}

.responsive-scroll {
  overflow-y: auto;
}

@media only screen and (max-width: 714px) {
  .info-box-overlay {
    top: 50%;
    bottom: auto;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    max-height: 50%; 
    height: auto;
    max-width: 100%;
  }
  .info-box-overlay .paragraph {
    max-width: 300px; 
    margin: 1px auto; 
  }
}
</style>
