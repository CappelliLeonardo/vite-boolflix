<script>
import {store} from '../store.js';
export default {
    data() {
        return {
            store,
        };
    },
    methods: {
        getFlag(lang){
            let finalLink ='https://flagicons.lipis.dev/flags/4x3/';

            if(lang == 'en'){
                finalLink += 'gb';
            }
            else if(lang == 'ja'){
                finalLink += 'jp';
            }
            else if(lang == 'ko'){
                finalLink += 'xk';
            }
            else{
                finalLink += lang;
            }
            finalLink+= '.svg';

            return finalLink;

        }
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
                    <div>
                        Title: {{ movie.title }}
                    </div>
                    <div>
                        Original title: {{ movie.original_title }}
                    </div>
                    <div>
                        Original language: {{ movie.original_language }}
                    </div>
                    <div>
                        Flag:
                        <img :src="getFlag(movie.original_language)" :alt="movie.original_language">
                    </div>
                    <div>
                        Vote: {{ movie.vote_average }}
                    </div>
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
                    <div>
                        Name: {{ tvserie.name }}
                    </div>
                    <div>
                        Original title: {{ tvserie.original_name }}
                    </div>
                    <div>
                        Original language: {{ tvserie.original_language }}
                    </div>
                    <div>
                        Flag:
                        <img :src="getFlag(tvserie.original_language)" :alt="tvserie.original_language">
                    </div>
                    <div>
                        Vote: {{ tvserie.vote_average }}
                    </div>
                    
                    <hr>
                </li>
            </ul>
        </div>
    </main>
</template>

<style lang="scss" scoped>
img{
    width: 50px;
    height: 50px;
}
</style>
