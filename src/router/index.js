import { createRouter,createWebHistory } from "vue-router"


import Login from '../views/Login.vue'
import DashBoard from '../views/DashBoard.vue'
import Update from '../views/Update.vue'
import Themes from "../views/Themes.vue"
import Plugins from "../views/Plugins.vue"
import Settings from "../views/Settings.vue"
import PluginStore from "../views/PluginStore.vue"
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path: '/',
            component: Login
        },
        {
            path: '/dashboard',
            component: DashBoard
        },
        {
            path: '/update',
            component: Update
        },
        {
            path: '/themes',
            component: Themes
        },
        {
            path: '/plugins',
            component: Plugins
        },
        {
            path: '/settings',
            component: Settings
        },
        {
            path: '/plugin-store',
            component: PluginStore
        }
    ]
})
export default router