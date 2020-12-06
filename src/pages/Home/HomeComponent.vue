<template>
  <div class="small">
    <line-chart :chart-data="datacollection" :height="100"></line-chart>
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
      url:'http://127.0.0.1:5000/VALE',

    }
  },
  mounted () {
    this.fillData()
  },
  methods: {

    fillData ()
    { 
        axios.get(this.url, this.data, {
            }).then(res => {
                    if(res.status == 200) {
                       
                        const json = res.data.data;
                        console.log(json);
 
                        for(var i=json.length-1; i>-1; i--) {
                        
                        //this.labelAux.push(json[1].hour);
                        //this.dataAux.push(parseFloat(json[1].points));

                        this.labelAux.push(json[i].hour);
                        this.dataAux.push(parseFloat(json[i].points));
                      
                        }
                        this.datacollection = {
                            labels: this.labelAux,
                            datasets: [
                            {
                                label: 'IBM',
                                backgroundColor: '#FF0066',
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