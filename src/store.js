// prendo la proprietà reactive dall'oggetto vue
import {reactive} from 'vue';
// esporto la proprieta reactive  tramite const (rendo
// disponibile la const store che ha la proprietà reactive)
export  const store = reactive({
    baseUrlMovie: 'https://api.themoviedb.org/3/search/movie?api_key=33ce1c25de51c42faff52052fefbabec',
    baseUrlTvSeries:'https://api.themoviedb.org/3/search/tv?api_key=33ce1c25de51c42faff52052fefbabec',
    movies: [],
    tvseries: [],
    inputUserText: '',
});