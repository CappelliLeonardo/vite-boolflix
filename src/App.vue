<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

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
    },  
    methods: {
        
        
    },
    created(){
        
    },
}
</script>

<template>
    
    

    <AppHeader />

    <AppMain />

    <AppFooter />
</template>

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";
</style>
