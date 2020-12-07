<template>
    <div class ="container" >
        <header class ="barra">
            <div class="menu-item"><a href="#/home">Home</a></div>
            <div class="menu-item"><a href="#/home">Empresas</a></div>
        </header>
        <div class="container-buttons">
        <button v-on:click="showCompany('IBM')">IBM</button>
        <button v-on:click="showCompany('VALE')">Vale</button>
        <button v-on:click="showCompany('ITUB')">Itaú</button>
        </div>
         <div class="chart">
            <line-chart :chart-data="datacollection" :height="200"></line-chart>
            
            <div class="informations">
              <p id="high">Alta:</p>
              <p>Baixa:</p> 
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
                            this.labelAux.push(json[i].hour);
                            this.dataAux.push(parseFloat(json[i].points));                    
                        }
                        this.datacollection = {
                            labels: this.labelAux,
                            
                            datasets: [
                            {
                                label: this.companyDefault,
                                backgroundColor: '#0077b6',
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