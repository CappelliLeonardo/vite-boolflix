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
    <header>
        <div class="row">
            <div class="col-6 offset-3">
                <div class="input-group">
                    <input type="text" v-model="store.inputUserText" class="form-control" placeholder="Cerca movie o tvseries" aria-label="">
                    <button class="btn btn-outline-secondary" @click="$emit('performSearch')" type="button">Button</button>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
</style>
