<template>
    <div v-for="donnee in data" :key="donnee.id">
        <img :src="donnee.image" /> 
    </div>
</template>

<script>
import axios from 'axios'

import Cookies from "js-cookie";

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

export default {
    name : 'Vitrine',
    data: () => {
        return {
            data: null,
            
        }
        
    },

    mounted() {
            axios({
                method: 'GET', 
                url: "htpp://localhost:8081/monApp",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": Cookies.get('csrftoken')
                }
            })
            .then(response => (this.data = response.data))
        },
    
}
</script>

<style >

</style>

