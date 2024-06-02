<template>
    <div class="video">
      <video ref="video" src="@/assets/video2.mp4"  muted preload="auto" playsinline loop></video>
    </div>
  </template>
<script>
export default {
  mounted() {
    this.createObserver();
  },
  methods: {
    createObserver() {
      let options = {
        root: null,
        threshold: 0.2
      };

      let observer = new IntersectionObserver(this.handleIntersect, options);
      observer.observe(this.$refs.video);
    },
    handleIntersect(entries) {
      entries.forEach(entry => {
        const video = this.$refs.video;
        if (video && entry.isIntersecting) {
          video.play().catch(error => console.error('Error playing video:', error));
        } else if (video) {
          video.pause();
        }
      });
    }
  }
};
</script>
<style scoped>
.video {
  margin-top: 200px;
}
video {
  width: 100%;
  display: block;
  margin: 0 auto;
  max-height: 100vh;
  object-fit: cover;
}
</style>
  