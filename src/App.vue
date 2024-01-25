<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

import {store} from './store'
import axios from 'axios';

export default {
    data() {
        return {
            store,
            
        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },  
    methods: {
        search(){

            //rendo vuoto l'array una volta effettuata la ricerca
            this.store.movies = [];
            axios.get(this.store.baseUrlMovie, {
                params: {
                    query: this.store.inputUserText.length > 0 ? this.store.inputUserText : null
                }
            }).then((response)=>{
            console.log(response)
                for(let i = 0; i < response.data.results.length; i++){
                    this.store.movies.push(response.data.results[i])
                    //console.log(this.store.movies)
                }
        })
            //rendo vuoto l'array una volta effettuata la ricerca
            this.store.tvseries = [];
            axios.get(this.store.baseUrlTvSeries, {
                params: {
                    query: this.store.inputUserText.length > 0 ? this.store.inputUserText : null
                }
            }).then((response)=>{
            console.log(response)
                for(let i = 0; i < response.data.results.length; i++){
                    this.store.tvseries.push(response.data.results[i])
                    //console.log(this.store.movies)
                }
        })
        }
        
    },
    created(){
        this.search()
    },
}
</script>

<template>
    
    

    <AppHeader @performSearch="search()" />

    <AppMain />

    <AppFooter />
</template>

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";
</style>
