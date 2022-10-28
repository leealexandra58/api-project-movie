export interface MovieCardProps{
    movieList: Movie[];
}
 
export interface Movie{
    title: string;
    release_date: string;
    genre: Genre[];
    vote_average: number;
    backdrop_path: string;
    id: number
    vote_count: number;
    overview:string;
}
 
export interface Genre{
    id: number;
    name: string;
}
