<template>
    <div class="stocks">
      <v-container fluid class="px-12" style="max-width: 1500px;">
        <v-row>
          <v-col>
          
            <v-text-field
              v-model="search"
              label="Search"
              outlined
              dense
              class="search"
            ></v-text-field>
            
          
            <v-data-table
              :headers="headers"
              :items="filteredStocks"
              :search="search"
              :items-per-page="10"
              density="compact"
              no-data-text="No stocks available."
              class="coltable"
            >
             
              <template v-slot:[`item.market_cap`]="{ item }">
                {{ item.market_cap }}
              </template>
              <template v-slot:[`item.52wk_high`]="{ item }">
                {{ item['52wk_high'] }}
              </template>
              <template v-slot:[`item.52wk_low`]="{ item }">
                {{ item['52wk_low'] }}
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        search: ''
      };
    },
    computed: {
      ...mapGetters(['getStocks']),
    
      filteredStocks() {
        return this.getStocks.filter(stock => {
         
          return (
            stock.symbol.toLowerCase().includes(this.search.toLowerCase()) ||
            stock.stock.toLowerCase().includes(this.search.toLowerCase()) ||
            stock.industry.toLowerCase().includes(this.search.toLowerCase()) ||
            stock.market.toLowerCase().includes(this.search.toLowerCase())
          );
        });
      }
    },
    methods: {
      ...mapActions(['fetchStocks'])
    },
    async created() {
      await this.fetchStocks();
    },
    headers: [
      { title: 'Symbol', value: 'symbol' },
      { title: 'Stock', value: 'stock' },
      { title: 'Industry', value: 'industry' },
      { title: 'Market', value: 'market' },
      { title: 'Market Cap', value: 'market_cap', sortable: true },
      { title: 'Price', value: 'price' },
      { title: '52-Week High', value: '52wk_high' },
      { title: '52-Week Low', value: '52wk_low' }
    ]
  };
  </script>
  
  <style scoped>
  .stocks {
    margin-top: 50px;
  }
  .coltable {
    border: 1px solid #C8B560;
    border-collapse: collapse;
    padding-top: 30px;
  }
  .search {
    color: #C8B560;
    transition: all 0.5s ease-in-out;
  }
  .search:hover {
    color: #fff;
  }

  .v-data-table-header th {
    border-bottom: 1px solid #C8B560 !important;
    color: #000 !important;
  }

  .v-data-table-row {
    background-color: #fff;
  }
 
  .v-data-table-row:hover {
    background-color: #C8B560;
  }
  </style>
  