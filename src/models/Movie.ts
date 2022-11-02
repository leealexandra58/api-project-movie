export interface MovieCardProps{
    movieList: Movie[];
    genreName: (genre_ids: number) => string;
}
 
export interface Movie{
    title: string;
    release_date: string;
    genre_ids: number[];
    vote_average: number;
    backdrop_path: string;
    id: number
    vote_count: number;
    overview:string;
}
 
