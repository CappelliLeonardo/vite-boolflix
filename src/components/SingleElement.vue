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
            <img :src="getFlag(originalLanguage)" :alt="originalLanguage">
        </div>
        <div>
        {{ voteAverage }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
img{
    width: 50px;
    height: 50px;
}
</style>
