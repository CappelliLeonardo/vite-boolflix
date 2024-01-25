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
        <div>
            <ul>
                <li v-for="(movie, i) in store.movies" :key="i">
                    //UTILIZZO
                    <SingleElement
                    :titleOrName="movie.title"
                    :originalTitleOrName="movie.original_title"
                    :originalLanguage="movie.original_language"
                    :voteAverage="movie.vote_average"
                    />
                    <hr>
                </li>
            </ul>
        </div>

        <h2>
            TVSERIES
        </h2>
        <div>
            <ul>
                <li v-for="(tvserie, i) in store.tvseries" :key="i">
                    <SingleElement
                    :titleOrName="tvserie.name"
                    :originalTitleOrName="tvserie.original_name"
                    :originalLanguage="tvserie.original_language"
                    :voteAverage="tvserie.vote_average"
                    />
                    
                    <hr>
                </li>
            </ul>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>
