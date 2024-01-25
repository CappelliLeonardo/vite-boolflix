<script>
import {store} from '../store.js';
export default {
    data() {
        return {
            store,
        };
    },
    methods: {

    }
}
</script>

<template>
    <main>
        <div>
            <ul>
                <li v-for="(movie, i) in store.movies" :key="i">
                    <div>
                        title {{ movie.title }}
                    </div>
                    <div>
                        Original title {{ movie.original_title }}
                    </div>
                    <div>
                        Original language {{ movie.language }}
                    </div>
                    <div>
                        Vote: {{ movie.vote_average }}
                    </div>
                </li>
            </ul>
        </div>
    </main>
</template>

<style lang="scss" scoped>
</style>
