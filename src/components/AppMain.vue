<script>
//importazione
import SingleElement from './SingleElement.vue';

import {store} from '../store.js';
export default {
    data() {
        return {
            store,
        };
    },

    components:{
        SingleElement,   //dichiarazione
    },
    methods: {
        
    }
}
</script>

<template>
    <main>
        <h2>
            MOVIES
        </h2>
        <div class="container">
            <ul class="d-flex flex-wrap align-items-center ">
                <li  v-for="(movie, i) in store.movies" :key="i">
                    
                    <SingleElement
                    :titleOrName="movie.title"
                    :originalTitleOrName="movie.original_title"
                    :originalLanguage="movie.original_language"
                    :voteAverage="movie.vote_average"
                    :posterPath="movie.poster_path"
                    :overviewPath="movie.overview"
                    />
                </li>
            </ul>
        </div>

        <h2>
            TVSERIES
        </h2>
        <div class="container">
            <ul class="d-flex flex-wrap">
                <li v-for="(tvserie, i) in store.tvseries" :key="i">
                    <SingleElement
                    :titleOrName="tvserie.name"
                    :originalTitleOrName="tvserie.original_name"
                    :originalLanguage="tvserie.original_language"
                    :voteAverage="tvserie.vote_average"
                    :posterPath="tvserie.poster_path"
                    :overviewPath="tvserie.overview"
                    />
                    
                </li>
            </ul>
        </div>
    </main>
</template>

<style lang="scss" scoped>
ul{
    list-style-type: none;
    padding: 0;
    li{
        width: calc(100% / 5);
        padding-top:20px;
        padding-left: 10px;
        padding-right: 10px;
    }
}
main{
    background-color: #434343;
    h2{
        color: white;
        font-size: 2em;
    }
}
</style>
