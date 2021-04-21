<template>
 <div v-for="donnee in data" :key="donnee.id">
    {{donnee.id}} --- {{donnee.nom}} : <span class="btn-danger"> {{donnee.prix}}</span>
</div>
</template>

<script>
import axios from 'axios'

import Cookies from "js-cookie";

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

export default {
    name : 'Panier',
    data: () => {
        return {
            data: null,
            
        }
        
    },

    mounted() {
            axios({
                method: 'GET', 
                url: "http://localhost:8000/monApp/detailCommande",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": Cookies.get('csrftoken')
                }
            })
            .then(response => (this.data = response.data))
        },
    
}
</script>

<style>
$font-family:   "Roboto";
$font-size:     14px;

$color-primary: #ABA194;

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: $font-family;
    font-size: $font-size;
    background-size: 200% 100% !important;
    animation: move 10s ease infinite;
    transform: translate3d(0, 0, 0);
    background: linear-gradient(45deg, #49D49D 10%, #A2C7E5 90%);
    height: 100vh
}


</style>