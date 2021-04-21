import {createRouter, createWebHistory} from 'vue-router'
import Accueil from './components/Accueil'
import Vitrine from './components/Vitrine'
import Panier from './components/Panier'
import Inscription from './components/Inscription'

const routes = [
    {path: '/inscription', component: Inscription},
    {path: '/', component: Accueil},
    {path: '/vitrine', component: Vitrine},
    {path: '/panier', component: Panier},
    

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router