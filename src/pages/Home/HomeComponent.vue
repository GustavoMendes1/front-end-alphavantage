<template>
    <p>Home</p>
</template>

<script>
export default {
    name: 'LoginComponent',
    data(){
        return{
            
        }
    },
    methods: {
        login(){
            this.$router.push({name:'home'});
        }
    }
}
</script>

<style scoped>

</style>

