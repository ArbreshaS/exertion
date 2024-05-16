<template>
  <div>
    <loading-spinner :loading="loading"></loading-spinner>
    <div v-if="!loading">
      <v-app class="app">
        <v-app-bar app color="#131313" height="90">
          <v-img :src="require('@/assets/logo.png')" style="height:75px"></v-img>
          <v-spacer></v-spacer>
          <v-toolbar-items height="120px">
            <v-btn v-for="(item, index) in items" :key="index" :to="item.route" text>
              {{ item.label }}
            </v-btn>
          </v-toolbar-items>
        </v-app-bar>
      </v-app>
    </div>
    <NavSlider />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import { VApp, VAppBar, VSpacer, VToolbarItems, VBtn } from 'vuetify';


export default defineComponent({
  name: 'NavBar',
  components: {
    LoadingSpinner,
    VApp,
    VAppBar,
    VSpacer,
    VToolbarItems,
    VBtn,
   
  },
  data() {
    return {
      loading: true,
      items: [
        { label: 'Home', route: '/' },
        { label: 'About', route: '/about' },
        { label: 'Projects', route: '/projects' },
        { label: 'News', route: '/news' },
        { label: 'Contact', route: '/contact' }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 900);
  }
});
</script>

<style scoped>
.v-btn:hover {
  color: #C8B560; 
}

.app{
  height: 50px;
}
</style>
