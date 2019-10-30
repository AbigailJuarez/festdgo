<template>
  <div class="login">
    <h3>Durango Fest 2019</h3>
    <input type="text" v-model="email" placeholder="Correo" />
    <br />
    <input type="password" v-model="password" placeholder="Contraseña" />
    <br />
    <button @click="login" to="/home">Entrar</button>
    <p>
      Iniciar con Google
      <br />
      <button @click="socialLogin" class="social-button">
        <img src="../assets/google-logo.png" alt="Google logo" />
      </button>
    </p>
    <p>
      ¿No tienes cuenta?
      <router-link to="/sign-up">Registro</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            this.$router.replace("home");
          },
          err => {
            alert("Opps." + err.message);
          }
        );
    },
    socialLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$router.replace("home");
        })
        .catch(err => {
          alert("Opps. " + err.message);
        });
    }
  }
};
</script>

<style scoped>
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 300px;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 100px;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
.social-button {
  width: 75px;
  background: white;
  padding: 10px;
  border-radius: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  outline: 0;
  border: 0;
}
.social-button :active {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.social-button img {
  width: 100%;
}
</style>