<script>
import {store} from '../store.js';
import axios from 'axios';
export default {
    data() {
        return {
            store,
        };
    },
    methods: {
        search(){
            axios.get(this.store.baseUrlMovie, {
                params: {
                    query: this.store.inputUserText.length > 0 ? this.store.inputUserText : null
                }
            }).then((response)=>{
            //console.log(response)
            this.store.movies = response.data.results
            console.log( 'movies', this.store.movies)
                
        })
            
            axios.get(this.store.baseUrlTvSeries, {
                params: {
                    query: this.store.inputUserText.length > 0 ? this.store.inputUserText : null
                }
            }).then((response)=>{
            //console.log(response)
            this.store.tvseries = response.data.results
            
            console.log('series',this.store.tvseries)
                
        })
        }
    }
}
</script>

<template>
    <header>
        <div class="row">
            <div class="col-6 offset-3">
                <div class="input-group">
                    <input type="text" v-model="store.inputUserText" class="form-control" placeholder="Cerca movie o tvseries" aria-label="">
                    <button class="btn btn-outline-secondary" @click="search()" type="button">Button</button>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
</style>
