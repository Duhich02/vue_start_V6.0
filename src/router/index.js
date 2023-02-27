import Vue from "vue";
import VueRouter from 'vue-router'
import {createRouter, createWebHashHistory} from "vue-router";
import vCatalog from '../components/v-catalog.vue'
import vCart from '../components/v-cart.vue'


const routes =[
    {
        path: '/',
        name: 'catalog',
        component: vCatalog
    },
    {
        path: '/cart',
        name: 'cart',
        component: vCart,
        props: true
    }
    ]

const router = createRouter({
    history: createWebHashHistory(),
    routes})
export default router