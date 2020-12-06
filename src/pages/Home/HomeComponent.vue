<template>
    <div class ="container" >
        <header class ="barra">
            <div class="menu-item"><a href="#/home">Home</a></div>
        </header>
         <div class="chart">
            <line-chart :chart-data="datacollection" :height="200"></line-chart>
        </div>
    </div>
</template>

<script>

const axios = require('axios');
import LineChart from './LineChart.js'

export default {
  components: {
    LineChart
  },
  data(){
    return {
      datacollection: null,
      dataAux:[],
      labelAux:[],
      companyDefault: 'IBM',
      url:'http://127.0.0.1:5000/',

    }
  },
  mounted () {
    this.fillData()
  },
  methods: {

    fillData ()
    { 
        axios.get(this.url+this.companyDefault, this.data, {
            }).then(res => {
                    if(res.status == 200) {
                       
                        const json = res.data.data;
                        console.log(json);
 
                        for(var i=json.length-1; i>-1; i--) {
                            this.labelAux.push(json[i].hour);
                            this.dataAux.push(parseFloat(json[i].points));                    
                        }
                        this.datacollection = {
                            labels: this.labelAux,
                            color: '#EEEEEE',
                            datasets: [
                            {
                                label: 'IBM',
                                backgroundColor: '#c0c0c0',
                                data: this.dataAux
                            },
                            ]
                        }
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