<template>
    <div class ="container" >
        <header class ="barra">
            <div class="menu-item"><a href="#/home">HOME</a></div>
        </header>
        <div class="body">
          <div class="barraLateral">
            <ul>
              <li><a class="item" v-on:click="showCompany('Bovespa')">Bovespa</a></li>
              <li><a class="item" v-on:click="showCompany('IBM')">IBM</a></li>
              <li><a class="item" v-on:click="showCompany('VALE')">Vale</a></li>
              <li><a class="item" v-on:click="showCompany('ITUB')">Itaú</a></li>
            </ul>
          </div>
          <div class="bodyContainer">
            <h3 v-show="showError">Ops...Ocorreu um erro! Recarregue a página.</h3>
            <div class="half-circle-spinner" v-show="showLoad">
              <div class="circle circle-1"></div>
              <div class="circle circle-2"></div>
            </div>
            <div class="buttonContainer" v-show="showButtons">
              <button class="button" v-on:click="showTime('/1min')">1 min</button>
              <button class="button" v-on:click="showTime('/5min')">5 min</button>
              <button class="button" v-on:click="showTime('/15min')">15 min</button>
              <button class="button" v-on:click="showTime('/30min')">30 min</button>
              <button class="button" v-on:click="showTime('/60min')">60 min</button>
            </div>
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
      companyDefault: 'Bovespa',
      timeDefault:'/5min',
      baseURL:'http://127.0.0.1:5000/',
      showLoad:false,
      showButtons:false,
      showError:false,
      url:null
    }
  },
  mounted () {
    this.fillData();
  },
  methods: {
    showTime:function(time){
      if(this.timeDefault != time){
        this.timeDefault = time;
        this.fillData();  
      }
    },
    showCompany:function(company){
      if(this.companyDefault != company){
        this.companyDefault = company;
        this.fillData();
      }
      
    },
    fillData ()
    { 
        this.showLoad = true;
        this.showError = false;
        if(this.companyDefault!="Bovespa"){
          this.url = this.baseURL+ this.companyDefault + this.timeDefault;
          this.showButtons=true;
        }else{
          this.url = this.baseURL;
          this.showButtons=false;
          
        }
          
        axios.get(this.url, this.data, {
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
                                label: this.companyDefault + this.timeDefault.replace("/"," "),
                                backgroundColor: '#0077b6',
                                data: this.dataAux,
                            },
                            ]
                        }
                    }
            }).catch(err => {
                    console.log(err.response);
                    this.showError = true;
        }).finally(() => {
            this.showLoad = false;
        });       
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped>

</style>