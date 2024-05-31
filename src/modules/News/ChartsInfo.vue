<template>
    <CanvasJSChart :options="options" :style="styleOptions" @chart-ref="chartInstance"/>
</template>
<script>
export default {
    data() {
        return {
            chart: null,
            options: {
                theme: "light2", // "light1", "dark1", "dark2"
                animationEnabled: true, // change to true   
                animationDuration: 3000,
                title:{
                    text: "Apartment Sales Over Time"
                },
                axisX: {
                    valueFormatString: "YYYY",
                    interval: 1 // Show every year
                },
                axisY: {
                    title: "Number of Apartments Sold"
                },
                data: [{
                    type: "spline", // Changed type to "spline" for more curvy line
                    xValueFormatString: "YYYY",
                    yValueFormatString: "#,###",
                    markerSize: 0,
                    dataPoints: [
                        { x: new Date("2020"), y: 600 },
                        { x: new Date("2021"), y: 700 },
                        { x: new Date("2022"), y: 800 },
                        { x: new Date("2023"), y: 1000 },
                        { x: new Date("2024"), y: 1200 }
                    ]
                }],
                // Add a background color to the area under the line
                axisY2: {
                    lineColor: "transparent",
                    tickColor: "transparent",
                    labelFontColor: "transparent",
                    titleFontColor: "transparent",
                    gridColor: "transparent",
                    interval: 1,
                    minimum: 0,
                    maximum: 1200,
                    labelFormatter: function () {
                        return ""
                    }
                }
            },
            styleOptions: {
                width: "50%", // Decrease width
                height: "300px" // Decrease height
            }
        }
    },
    methods: {
        chartInstance(chart) {
            this.chart = chart;
        }
    }
}
</script>
