<template>
    <div class="sign-up">
        <p>¡Durango Fest Crear Cuenta!</p>
        <input type="text" v-model="email" placeholder="Correo"><br>
        <input type="password" v-model="password" placeholder="Contraseña"><br>
        <button @click="signUp">Registrar</button>
        <span>Regresar a <router-link to="/login">Login</router-link></span>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'signUp',
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signUp: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                () => {
                    this.$router.replace('home')
                },
                (err) => {
                    alert('Opps.' + err.message)
                }
            );
        }
    }
}
</script>

<style scoped>
    .signUp{
        margin-top: 40px;
    }
    input{
        margin: 10px 0;
        width: 300px;
        padding: 15px;
    }
    button{
        margin-top: 20px;
        width: 100%;
        cursor: pointer;
    }
    span{
        display: block;
        margin-top: 20px;
        font-size: 11px
    }
</style>