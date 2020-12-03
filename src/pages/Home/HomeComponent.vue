<template>
    <p>Home</p>
</template>

<script>

const axios = require('axios');

export default {
    name: 'HomeComponent',
    data(){
        return{
            
        }
    },
    mounted () {
        this.getValues();
    },
    methods: {
        getValues () {
            axios.get('http://127.0.0.1:5000/VALE', this.data, {
            }).then(res => {
                    console.log(res);
            }).catch(err => {
                    console.log(err.response);
            });

        }
    }
   
}
</script>

<style scoped>

</style>

