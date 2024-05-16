<template>
  <div>
    <loading-spinner :loading="loading"></loading-spinner>
    <div v-if="!loading">

      <v-app class="app">
        <v-app-bar app color="#131313" height="90">
          <v-img :src="require('@/assets/logo.png')" style="height:75px" class="logo"></v-img>
          <v-spacer></v-spacer>
          <v-toolbar-items height="120px"  class="hidden-sm-and-down">

     
       
         

            <v-btn v-for="(item, index) in items" :key="index" :to="item.route" text>
              {{ item.label }}
            </v-btn>
          </v-toolbar-items>
          <img
             :src="require('@/assets/menu.jpg')"
             @click="drawer = !drawer"
             class="hidden-md-and-up"
             style="cursor: pointer;"
             width="50"
             height="50" 
          
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" app class="hidden-md-and-up drawer" mobile-breakpoint="960" temporary>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" @click="navigateTo(item.route)">
              <v-list-item-title class="drawer-item">{{ item.label }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-app>
    </div>
    <NavSlider />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import VApp from 'vuetify/lib/components/VApp';
import VAppBar from 'vuetify/lib/components/VAppBar';
import VImg from 'vuetify/lib/components/VImg';
import VSpacer from 'vuetify/lib/components/VGrid/VSpacer';
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
    VSpacer,
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
        { label: 'Contact', route: '/contact' }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 900);
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
      this.drawer = false; 
    }
  }
});
</script>

<style scoped>
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

.app{
  height: 50px;
}
</style>
