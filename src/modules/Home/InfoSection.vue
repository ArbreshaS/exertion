<template>
  <div class="infosection">
    <v-container fluid class="px-12" style="max-width: 1500px;">
      <v-row class="row">
        <v-col cols="12" md="3" class="column" :row-span="2">
          <div>
            <v-row class="inner-row">
            <v-col cols="12" class="inner-col">
              <v-img :src="require('@/assets/1.jpg')" alt="Image 1" class="stretch-image" />
            </v-col>
            <v-col cols="12" class="inner-col">
              <v-img :src="require('@/assets/2.jpg')" alt="Image 2" class="stretch-image" />
            </v-col>
          </v-row>
          </div>
          
        </v-col>
        <v-col cols="12" md="3" class="column">
          <div class="im"> <v-img :src="require('@/assets/3.jpg')" alt="Image 3" class="stretch-image" /></div>
         
        </v-col>
        <v-col cols="12" md="3" class="column" :row-span="2">
          <v-row class="inner-row">
            <v-col cols="12" class="inner-col">
              <v-img :src="require('@/assets/4.jpg')" alt="Image 4" class="stretch-image" />
            </v-col>
            <v-col cols="12" class="inner-col">
              <v-img :src="require('@/assets/5.jpg')" alt="Image 5" class="stretch-image" />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="3" class="column">
          <div class="im"> <v-img :src="require('@/assets/6.jpg')" alt="Image 3" class="stretch-image" /></div>
         
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="mt-12">
  <CostumButton buttonText="Learn More" @click="handleLearnMoreClick" />
</v-row>

    </v-container>
  </div>
</template>

<script>
import CostumButton from '@/components/CostumButton.vue'; 
export default {
  components: {
    CostumButton
  }

  
};
</script>

<style scoped>
.infosection {
  background-color: #131313;
  padding-top: 200px;
}

.row {
  display: flex;
}

.column {
  display: flex;
  flex-direction: column;
}

.inner-row {
  flex-grow: 1;
}

.inner-col {
  flex-grow: 1;
}

.stretch-image {
  width: 100%; 
  height: 100%;
  object-fit: cover;
  object-position: center;

}

</style>
