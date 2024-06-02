<template>
    <div class="newsDetail">
        <NavBar/>
    <NewsPageDetail/>
    <NewsInfo/>
    <WorkNewsDetails/>
    </div>
  
</template>
  
  <script>
  import NavBar from "../components/NavBar.vue"
  import NewsPageDetail from "../modules/News/NewsPagaDetail.vue";
  import NewsInfo from "../modules/News/NewsInfo.vue"
  import WorkNewsDetails from "@/modules/News/WorkNewsDetails.vue";
  export default {
      components: {
      NavBar, 
      NewsPageDetail,
      NewsInfo,
      WorkNewsDetails
    }
  }
  </script>
  
  <style scoped>
  .newsDetail{
    background-color: #131313;
  }
  </style>