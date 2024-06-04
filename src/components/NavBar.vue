<template>
  <div>
    <loading-spinner :loading="loading"></loading-spinner>
    <div v-if="!loading">
      <v-app class="app">
 
        <v-app-bar app color="#131313" height="90" class="navbar-padding">
          <v-img v-if="!isResponsiveMode" :src="require('@/assets/logo.png')" style="height:70px" class="logo"></v-img>
          <v-spacer></v-spacer>
          <v-toolbar-items height="120px" class="hidden-sm-and-down">
            <v-btn v-for="(item, index) in items" :key="index" :to="item.route" text class="item-btn">
              {{ item.label }}
            </v-btn>
          </v-toolbar-items>
          <img
             :src="drawer ? require('@/assets/xx.png') : require('@/assets/menu.jpg')"
             @click="toggleDrawer"
             class="hidden-md-and-up"
             style="cursor: pointer;"
             width="auto"
             height="70"
          >
        </v-app-bar>
       
 
        <v-navigation-drawer location="right" v-model="drawer" app class="hidden-md-and-up drawer" mobile-breakpoint="960" temporary>
          <div class="text-center">
            <v-img :src="require('@/assets/logo.png')" style="height:75px; margin-left: 65px !important;"></v-img>
          </div>
          <div class="divider"></div>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" @click="navigateTo(item.route)" class="drawer-list-item">
              <v-list-item-title class="drawer-item">{{ item.label }}</v-list-item-title>
              <div class="divider"></div>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-app>
    </div>
  </div>
</template>
 
<script>
import { defineComponent } from 'vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import VApp from 'vuetify/lib/components/VApp';
import VAppBar from 'vuetify/lib/components/VAppBar';
import VImg from 'vuetify/lib/components/VImg';
import VToolbarItems from 'vuetify/lib/components/VToolbar/VToolbarItems';
import VBtn from 'vuetify/lib/components/VBtn';
import VNavigationDrawer from 'vuetify/lib/components/VNavigationDrawer';
import VList from 'vuetify/lib/components/VList/VList';
import VListItem from 'vuetify/lib/components/VList/VListItem';
import VListItemTitle from 'vuetify/lib/components/VList/VListItemTitle';
 
export default defineComponent({
  name: 'NavBar',
  components: {
    LoadingSpinner,
    VApp,
    VAppBar,
    VImg,
    VToolbarItems,
    VBtn,
    VNavigationDrawer,
    VList,
    VListItem,
    VListItemTitle
  },
  data() {
    return {
      loading: true,
      drawer: false,
      items: [
        { label: 'Home', route: '/' },
        { label: 'About', route: '/about' },
        { label: 'Projects', route: '/projects' },
        { label: 'News', route: '/news' },
        { label: 'Contact', route: '/contact' },
        { label: 'Stock', route: '/stock' }
      ],
      isResponsiveMode: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 900);
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    navigateTo(route) {
      this.$router.push(route);
      this.drawer = false;
    },
    handleResize() {
      this.isResponsiveMode = window.innerWidth <= 960;
    }
  }
});
</script>
 
<style scoped>

.v-btn {
  margin: 0 5px;
  min-width: 50px;
}
.v-btn:hover {
  color: #C8B560;
}
.logo {
  max-height: 50px;
}
.drawer {
  background-color: #131313;
}
.drawer-item {
  color: #FFFFFF;
 
}
.drawer-item:hover {
  color: #C8B560;
}
.navbar-padding {
  padding-right: 90px;
}
 
@media (max-width: 960px) {
  .hidden-sm-and-down {
    display: none;
  }
}
@media (min-width: 961px) {
  .hidden-md-and-up {
    display: none;
  }
}
.app {
  height: 50px;
 
}
.divider {
  border-bottom: 1px solid #C8B560;
  margin: 20px 0;
}
.text-center {
  text-align: center;
}
.drawer-list-item {
  padding-left: 50px;
  padding-right: 50px;
}
</style>