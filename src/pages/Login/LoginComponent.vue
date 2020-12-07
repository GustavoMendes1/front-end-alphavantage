<template>

    <div class="main">
        <div class="login">
            <div class="content-login">
                <form class="form">   
                        <input  type="text"  placeholder="Usuário" class="input-text">
                        <input id= "pass" type="password" placeholder="Senha"  class="input-text" >
                
                        <button type="submit" id="Login" class="buttons" @click.prevent="login">Login</button>
                        <button type="submit" id="Cadastro" class="buttons" >Cadastre-se</button>
                
                </form>        
                

            </div>
        </div>
    </div>

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

<style lang="scss" src="./style.scss" scoped>

</style>