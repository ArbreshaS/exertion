<template>
    <div class="charts">
      <v-container fluid class="px-12" style="max-width: 1500px;">
        <v-row>
          <v-col cols="12">
            <h3 class="news-title">Collaborations</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-sheet>
              <ColumnChart :title="chart1.title" :subtitle="chart1.subtitle" :xAxis="chart1.xAxis" :series="chart1.series" />
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet>
              <PieChart :title="chart2.title" :subtitle="chart2.subtitle" :backgroundColor="chart2.backgroundColor"
                :gridLineColor="chart2.gridLineColor" :colors="chart2.colors" :thousandsSep="chart2.thousandsSep"
                :decimalPoint="chart2.decimalPoint" :height="chart2.height" :yAxis="chart2.yAxis" :xAxis="chart2.xAxis"
                :series="chart2.series" :customStyles="chart2.customStyles" />
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet>
              <LineChart :title="chart3.title" :subtitle="chart3.subtitle" :xAxis="chart3.xAxis" :series="chart3.series" />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  import { ColumnChart, PieChart, LineChart } from 'vuejs3-highcharts'
  
  export default {
    name: 'AboutCharts',
    data() {
      return {
        chart1: {
          title: 'Apartments for Sales',
          subtitle: 'Sales data for apartments',
          xAxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
          },
          series: [
            {
              name: 'Sales',
              color: '#03bbd4',
              data: [100, 150, 200, 250, 300, 350, 400] 
            }
          ]
        },
        chart2: {
          title: 'Collaborating Companies',
          subtitle: 'Companies collaborating with your organization',
          backgroundColor: '#fff',
          gridLineColor: '#ccd6eb',
          colors: ['#fdcd01', '#ffec47', '#a1c653', '#5baca7', '#61a6df', '#62aec5', '#904576', '#c04999', '#eb4f88', '#f15958', '#df8135', '#fd970f'],
          thousandsSep: '.',
          decimalPoint: ',',
          height: 400,
          xAxis: {
          },
          yAxis: {
          },
          series: [{
            name: 'Company',
            data: [
              { name: 'ArchiDesign', y: 20 },
              { name: 'Nexus', y: 30 },
              { name: 'Axis Design', y: 40 },
              { name: 'Horizon', y: 15 },
              { name: 'Studio', y: 25 }
            ]
          }],
          customStyles: {
            title: {
              color: '#000',
            },
            
            fontFamily: 'Nunito Sans'
          }
        },
        chart3: {
          title: 'Monthly Sales',
          subtitle: 'Sales data for each month',
          xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          series: [
            {
              name: 'Sales',
              color: '#ff7f0e',
              data: [120, 170, 230, 250, 310, 380, 410, 380, 330, 290, 210, 160] 
            }
          ],
          plotOptions: {
            series: {
              smooth: true 
            }
          }
        }
      }
    },
    components: {
      ColumnChart,
      PieChart,
      LineChart
    }
  }
  </script>
  
  <style>
  .news-title {
    color: #C8B560;
    font-size: 36px;
    margin-bottom: 20px;
  }
  </style>
  