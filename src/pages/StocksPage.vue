<template>
  <NavBar/>
  <StocksTable/>
</template>

<script>
import NavBar from "../components/NavBar.vue"
import StocksTable from "@/modules/Stocks/StocksTable.vue";
export default {
    components: {
    NavBar, 
    StocksTable,
  }
}
</script>

<style>

</style>