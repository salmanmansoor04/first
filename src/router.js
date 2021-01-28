import { createWebHistory, createRouter } from 'vue-router'
import Home from './components/JoynHome'
import News from './components/JoynNews'
import Contact from './components/JoynContact'

const router = createRouter({

    history: createWebHistory(),

    routes: [

        { path: '/home', component: Home },
        { path: '/news', component: News },
        { path: '/contact', component: Contact },
        { path: '/', component: Home }


    ]


})

export default router;