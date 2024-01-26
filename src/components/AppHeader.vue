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
        <div class="row justify-content-between ">
            <div class="col-4">
                <div>
                    <img src="https://image.tmdb.org/t/p/w185/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="">
                </div>
            </div>
            <div class="col-4">
                <div class="input-group p-4">
                    <input type="text" v-model="store.inputUserText" class="form-control" placeholder="Cerca movie o tvseries" aria-label="">
                    <button class="btn-outline-secondary" @click="search()" type="button">Search</button>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header{
    background-color: black;
}
</style>
