import Vue from 'vue'
import firebase from 'firebase';
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

let app = '';

firebase.initializeApp({
  apiKey: "AIzaSyBLWzadlZuU44dHTnMhnZ_LiKDsqxDfsY0",
  authDomain: "durangofest.firebaseapp.com",
  databaseURL: "https://durangofest.firebaseio.com",
  projectId: "durangofest",
  storageBucket: "durangofest.appspot.com",
  messagingSenderId: "617878210524",
  appId: "1:617878210524:web:53defee0695945daae7119",
  measurementId: "G-2P4JRSDN02"
});

firebase.auth().onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});


