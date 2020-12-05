<template>
    <div>
    <div class="barra"></div>
    <p>Home</p>
     <GChart
        type="AreaChart"
        :data="chartData"
        :options="chartOptions"
    />
</div>
    
</template>

<script src="vue.js"></script>
<script src="vue-google-charts/dist/vue-google-charts.browser.js"></script>
<script>

const axios = require('axios');

import { GChart } from 'vue-google-charts'


export default {
    name: 'HomeComponent',
    components: {
        GChart
    },
    data(){
        return{
        dataset:[],
        chartData: [
            
        ['Hours', 'IBM'],
        ['16:10', 123.6224],
        ['16:15', 124.0000],
        ['16:20', 124.0000],
        ['16:30', 124.0000],
        ['16:35', 123.6100],
        ['16:40', 123.6300],
        ['16:55\n 12/03', 123.6100],
        ['17:30', 124.1600],
        ['18:15', 123.9300],
        ['18:35', 123.7100],
       

        ],
        chartOptions: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        
      }
        }
    },
    mounted () {
        this.getValues();
       
        
    },
    methods: {
        getValues () {
            axios.get('http://127.0.0.1:5000/VALE', this.data, {
            }).then(res => {
                    if(res.status == 200) {
                        console.log(res.data.data);
                        
                        for(index in res.data.data) {
                            this.chartData.push([res.data.data.hour, res.data.data.points]);
                        }
                        console.log(this.chartData.json());
                    }
                    
            }).catch(err => {
                    console.log(err.response);
            });
        }
    }
}
</script>

<style lang="scss" src="./style.scss" scoped>

</style>

