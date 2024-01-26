<script>
export default {
    data() {
        return {

        };
    },
    props: {
        titleOrName: String,
        originalTitleOrName: String,
        originalLanguage: String,
        voteAverage: Number,
        posterPath: String,
    },

    methods:{
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
    <div>
        <div>
            {{ titleOrName }}
        </div>
        <div>
            {{ originalTitleOrName }}
        </div>
        <div>
            {{ originalLanguage }}
        </div>
        <div>
            <img class="flag-img" :src="getFlag(originalLanguage)" :alt="originalLanguage">
        </div>
        <div>
        {{ Math.ceil(voteAverage / 2) }}
        </div>
        <div>
            <img :src="'https://image.tmdb.org/t/p/w185/' + posterPath " alt="">
        </div>
        <div>
            <i v-for="i in  Math.ceil(voteAverage / 2) " :key="i"
            class="fa-solid fa-star"></i>
            <i v-for="j in 5 - Math.ceil(voteAverage / 2)" :key="j"
            class="fa-regular fa-star"></i>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.flag-img{

    height: 50px;
}
</style>
