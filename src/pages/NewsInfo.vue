<template>
    <div class="newsDetail">
        <NavBar/>
    <NewsPageDetail/>
    <NewsInfo/>
    </div>
  
</template>
  
  <script>
  import NavBar from "../components/NavBar.vue"
  import NewsPageDetail from "../modules/News/NewsPagaDetail.vue";
  import NewsInfo from "../modules/News/NewsInfo.vue"
  export default {
      components: {
      NavBar, 
      NewsPageDetail,
      NewsInfo
    }
  }
  </script>
  
  <style scoped>
  .newsDetail{
    background-color: #131313;
  }
  </style>