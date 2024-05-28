<template>
  <div class="image-container">
    <v-container fluid class="px-12" style="max-width: 1500px;">
      <v-row>
        <v-col cols="12">
          <h3 class="news-title">News</h3>
        </v-col>
      </v-row>
      <v-row v-for="(asset, index) in paginatedAssets" :key="index" class="image-wrapper">
        <v-col cols="12" class="image-col">
          <div class="image-box">
            <img :src="require(`@/assets/${asset.src}`)" :alt="asset.alt" class="service-image">
            <div class="info-box">
              <div class="info-content">
                <h4 class="info-date">{{ asset.date }}</h4>
                <h3 class="info-title">{{ asset.title }}</h3>
                <p class="info-paragraph">{{ asset.paragraph }}</p>
                <CostumButton buttonText="Learn More" @click="handleLearnMoreClick" />
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
      
      <PaginationComponent :currentPage="currentPage" :totalPages="totalPages" @page-change="paginate" />
    </v-container>
  </div>
</template>


<script>
import CostumButton from '@/components/CostumButton.vue';
import PaginationComponent from '@/components/PaginationComponent.vue'; 

export default {
  components: {
    CostumButton,
    PaginationComponent
  },
  data() {
    return {
      assets: [
        {
          src: "room.jpg",
          alt: "Room",
          date: "May 24, 2024",
          title: "Room News",
          paragraph: "This is some information about the room image."
        },
        {
          src: "Meetings.jpg",
          alt: "Meetings",
          date: "May 23, 2024",
          title: "Meetings News",
          paragraph: "This is some information about the meetings image."
        },
        {
          src: "home.jpg",
          alt: "Home",
          date: "May 22, 2024",
          title: "Home News",
          paragraph: "This is some information about the home image."
        },
        {
          src: "garden.jpg",
          alt: "Garden",
          date: "May 21, 2024",
          title: "Garden News",
          paragraph: "This is some information about the garden image."
        },
        {
          src: "inside.jpg",
          alt: "Inside",
          date: "May 20, 2024",
          title: "Inside News",
          paragraph: "This is some information about the inside image."
        },
        {
          src: "interior.jpg",
          alt: "Interior",
          date: "May 19, 2024",
          title: "Interior News",
          paragraph: "This is some information about the interior image."
        }
      ],
      currentPage: 1,
      assetsPerPage: 3 // Number of assets per page
    };
  },
  computed: {
    totalAssets() {
      return this.assets.length;
    },
    totalPages() {
      return Math.ceil(this.totalAssets / this.assetsPerPage);
    },
    paginatedAssets() {
      const startIndex = (this.currentPage - 1) * this.assetsPerPage;
      return this.assets.slice(startIndex, startIndex + this.assetsPerPage);
    }
  },
  methods: {
    paginate(page) {
      this.currentPage = page;
    },
    handleLearnMoreClick() {
      // Handle learn more click event
    }
  }
};
</script>


<style scoped>
.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  background-color: #131313;
}

.image-wrapper {
  margin-bottom: 20px;
}

.news-title {
  color: #C8B560;
  font-size: 36px;
  margin-bottom: 20px;
}

.image-col {
  position: relative;
  width: 100%;
}

.image-box {
  position: relative;
  width: 100%;
  height: auto;
  transition: all 0.6s ease; 
}

.service-image {
  width: 100%;
  height: 80vh; 
  object-fit: cover; 
  border-radius: 10px;
  transition: all 0.6s ease; 
}

.info-box {
  position: absolute;
  top: 0;
  right: 100%; 
  width: 30%;
  height: calc(100% - 6.5px); 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  opacity: 0;
  transition: right 1s ease-in-out; 
  border: 2px solid #C8B560; 
}

.image-box:hover .info-box {
  right: 0; 
  opacity: 1;
}

.info-content {
  padding: 20px;
  color: #fff;
}

.info-date {
  font-size: 14px;
  color: #999;
  margin-bottom: 10px;
}

.info-title {
  font-size: 24px;
  color: #C8B560;
  margin-bottom: 10px;
}

.info-paragraph {
  font-size: 16px;
  color: #ccc;
  margin-bottom: 20px;
}

.learn-more {
  font-size: 16px;
  color: #C8B560;
  text-decoration: none;
}

.learn-more:hover {
  text-decoration: underline;
}

@media screen and (max-width: 767px) {
  .image-col {
    width: 100%; 
  }

  .info-box {
    width: 100%; 
    right: 100%;
    opacity: 0; 
  }

  .image-box:hover .info-box {
    right: 0;
    opacity: 1;
  }
}
</style>

