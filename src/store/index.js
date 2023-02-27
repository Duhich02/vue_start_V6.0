import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import { createStore } from "vuex";
// import {RefType} from "vue/macros";
// Vue.use(Vuex) error


export default createStore({
    state: {
        products: [],
        cart: [],
    },
    mutations: {
        SET_PRODUCTS_TO_STATE:(state, products)=>{
            state.products = products
        },
        SET_CART:(state, product)=>{
            state.cart.push(product)
        },
        REMOVE_FROM_CART:(state, index)=>{
            state.cart.splice(index, 1)
        },
    },
    actions: {

        async GET_PRODUCTS_FROM_API({commit}){
            try {
                // const products = await axios.get('http://localhost:3000/products',);
                // this.products = products.data;
                // console.log(products)
                // return products;

                return axios('http://localhost:3000/products', {method: "GET"})
                    .then((c)=>{
                        commit('SET_PRODUCTS_TO_STATE', products.date)
                        console.log(`axios's here + ${products}`)
                        return products;
                        })
            }
            catch(e){
                alert('error')}
        },
        ADD_TO_CART({commit}, product){
            commit('SET_CART', product)
        },
        DELETE_FROM_CART({commit}, index){
            commit('REMOVE_FROM_CART', index)
        }
    },

    getters: {
        PRODUCTS(state){
            return state.products
        },
        CART(state){
            return state.cart
        },
    },
    modules: {},
})














