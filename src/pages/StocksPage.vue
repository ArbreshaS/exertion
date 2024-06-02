<template>
  <NavBar/>
  <StocksTable/>
  <FooterSection/>
</template>

<script>
import NavBar from "../components/NavBar.vue"
import StocksTable from "@/modules/Stocks/StocksTable.vue";
import FooterSection from '@/components/FooterSection.vue';
export default {
    components: {
    NavBar, 
    StocksTable, 
    FooterSection
  }
}
</script>

<style>

</style>