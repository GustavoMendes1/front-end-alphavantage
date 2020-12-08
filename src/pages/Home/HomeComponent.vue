<template>
    <div class ="container" >
        <header class ="barra">
            <div class="menu-item"><a href="#/home">HOME</a></div>
        </header>
        <div class="body">
          <div class="barraLateral">
            <ul>
              <li><a class="item" v-on:click="showCompany('IBM')">IBM</a></li>
              <li><a class="item" v-on:click="showCompany('VALE')">Vale</a></li>
              <li><a class="item" v-on:click="showCompany('ITUB')">Itaú</a></li>
            </ul>
          </div>
          <div class="bodyContainer">
            <div class="chart">
                <line-chart :chart-data="datacollection" :height="200"></line-chart>
            </div>
          </div>
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
    this.fillData();
  },
  methods: {
    showCompany:function(company){
      this.companyDefault = company;
      this.fillData();
    },
    fillData ()
    { 
        axios.get(this.url+this.companyDefault, this.data, {
            }).then(res => {
                    this.dataAux=[];
                    this.labelAux=[];
                    if(res.status == 200) {
                        const json = res.data.data;
                        console.log(json);

                        for(var i=json.length-1; i>-1; i--) {
                            this.labelAux.push(json[i].dateTime);
                            this.dataAux.push(parseFloat(json[i].points));                    
                        }
                        this.datacollection = {
                            labels: this.labelAux,
                            
                            datasets: [
                            {
                                label: this.companyDefault,
                                backgroundColor: '#6a6a6a',
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