<template>
<div>
    <Header/>
 <div class="user">
    <header class="user__header">
        <h1 class="user__title">{{nom}}</h1>     
           <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg" alt="" />

    </header>
    
    <form v-on:submit="poster" class="form">
        <div class="form__group">
            <input v-model="nom" type="text" placeholder="Username" class="form__input" />
        </div>
        
        <div class="form__group">
            <input v-model="email" type="email" placeholder="Email" class="form__input" />
        </div>

        <div class="form__group">
            <input v-model="tel" type="text" placeholder="Tel" class="form__input" />
        </div>
        
        <div class="form__group">
            <input v-model="password" type="password" placeholder="Password" class="form__input" />
        </div>
        
        <button class="btn" type="submit">Register</button>
    </form>
</div>
</div>

</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
import router from '../router.js'

import Cookies from "js-cookie";

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

export default {
    name : 'Inscription',
    data: () => {
        return {
            nom : "",
            email: "",
            password: "",
            tel: "",
        }
        
    },

    methods : {
        poster : function () {
            alert(this.$data.nom)
            axios({
                method: 'POST', 
                url: "http://localhost:8081/monApp/inscription/",
                data: {
                    nom: this.$data.nom,
                    email: this.$data.email,
                    password: this.$data.password,
                    tel: this.$data.tel
                },
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": Cookies.get('csrftoken')
                }
            })
            .then(function (response) {
                    response
                });
            
            router.push("/vitrine")
        },
    },
    components: {Header}
}
</script>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family:"Roboto";
    font-size: "14px";
    background-size: 200% 100% !important;
    animation: move 10s ease infinite;
    transform: translate3d(0, 0, 0);
    background: linear-gradient(45deg, #49D49D 10%, #A2C7E5 90%);
    height: 100vh
}

.user {
    width: 90%;
    max-width: 340px;
    margin: 10vh auto;
}

.user__header {
    text-align: center;
    opacity: 0;
    transform: translate3d(0, 500px, 0);
    animation: arrive 500ms ease-in-out 0.7s forwards;
}

.user__title {
    font-size: "14px";
    margin-bottom: -10px;
    font-weight: 500;
    color: white;
}

.form {
    margin-top: 40px;
    border-radius: 6px;
    overflow: hidden;
    opacity: 0;
    transform: translate3d(0, 500px, 0);
    animation: arrive 500ms ease-in-out 0.9s forwards;
}

.form--no {
    animation: NO 1s ease-in-out;
    opacity: 1;
    transform: translate3d(0, 0, 0);
}

.form__input {
    display: block;
    width: 100%;
    padding: 20px;
    font-family: "Roboto";
    -webkit-appearance: none;
    border: 0;
    outline: 0;
    transition: 0.3s;
    
    &:focus {
        background: darken(#fff, 3%);
    }
}

.btn {
    display: block;
    width: 100%;
    padding: 20px;
    font-family: $font-family;
    -webkit-appearance: none;
    outline: 0;
    border: 0;
    color: white;
    background: $color-primary;
    transition: 0.3s;
    
    &:hover {
        background: darken($color-primary, 5%);
    }
}

@keyframes NO {
  from, to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%, 40%, 60%, 80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}

@keyframes arrive {
    0% {
        opacity: 0;
        transform: translate3d(0, 50px, 0);
    }
    
    100% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

@keyframes move {
    0% {
        background-position: 0 0
    }

    50% {
        background-position: 100% 0
    }

    100% {
        background-position: 0 0
    }
}
</style>