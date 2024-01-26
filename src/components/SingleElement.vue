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
        overviewPath:String,
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

    <div class="card-container">
        <div class="thumbnail">
            <img :src="'https://image.tmdb.org/t/p/w400/' + posterPath " alt="">
        </div>
        <div class="card-info">
            <h4>
                {{ titleOrName }}
            </h4>
            <h6>
                {{ originalTitleOrName }}
            </h6>
            <div>
                {{ originalLanguage.toUpperCase() }}
                <img class="flag-img" :src="getFlag(originalLanguage)" :alt="originalLanguage">
            </div>
            <div>
                {{ Math.ceil(voteAverage / 2) }}
                <i v-for="i in  Math.ceil(voteAverage / 2) " :key="i"
                class="fa-solid fa-star"></i>
                <i v-for="j in 5 - Math.ceil(voteAverage / 2)" :key="j"
                class="fa-regular fa-star"></i>
            </div>
            <p>
                {{ overviewPath }}
            </p>
        </div>
    </div>



    <!-- <div>
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
    </div> -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as*;
.flag-img{
    height: 50px;
}

.card-container{
    position: relative;
    height:500px;
    overflow: hidden;
    .thumbnail{
        width:100%;
        height:100%;
        img{
            object-fit: cover;
            width:100%;
            height:100%;
        }
    }
}
.card-info{
    width: 100%;
    height: 100%;
    position: absolute;
    bottom:0;
    overflow-y:auto;
    color:white;
    padding: 10px;
    filter:opacity(0);
    &:hover{
        filter: opacity(1);
        background-color: rgba($color: #131212d1, $alpha: 1.0);
        opacity: 0.5;

        
    }
}

;
</style>
