<template>

    <div class="main">
        <div class="login">
            <div class="content-login">
                <form>
                    <div class="login-body">
                   
                        <h2 >Login</h2>
                        <input  type="text"  placeholder="Usuário" class="input-text">
                        <h1></h1>
                        <input type="password" placeholder="Senha"  class="input-text" >
                        <h1></h1>
                        <a href='' target=''>Recuperar senha.</a><br/>
                        <button type="submit" id="Login" class="buttons" @click.prevent="login">Login</button>
                        <h1></h1>
                        <button type="submit" id="Cadastro" class="buttons" >Cadastre-se</button>
                    </div>
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