<template>
    <div class="container">
        <div class="box" v-for="(image, _index) in images" :key="_index" @mouseover="showOverlay(_index)" @mouseleave="hideOverlay(_index)">
            <img :src="image.src" :alt="image.alt">
            <div class="overlay" v-if="activeIndex === _index">{{ image.alt }}</div>
        </div>
    </div>
</template>

<script>
/* eslint-disable no-unused-vars */ // Disable no-unused-vars rule for this file
export default {
    data() {
        return {
            images: [
            { id: 1, src: require('@/assets/prague.jpg') },
            { id: 2, src: require('@/assets/viena.jpg') },
            { id: 3, src: require('@/assets/france.jpg') },
        
      ],
            activeIndex: null
        };
    },
    methods: {
        showOverlay(_index) {
            this.activeIndex = _index;
        },
        hideOverlay(_index) {
            this.activeIndex = null;
        }
    }
};
</script>

<style scoped>
.container {
    display: flex;
}

.box {
    width: 200px;
    height: 200px;
    margin: 10px;
    position: relative;
    overflow: hidden;
}

.box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
}

.box:hover img {
    transform: scale(1.1);
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    opacity: 0;
    transition: opacity 0.5s;
}

.box:hover .overlay {
    opacity: 1;
}
</style>
