import { Result } from "./SeachMovie";

export interface MovieCardProps{
    topRated: Movie[];
    results: Result[];
    genreName: (genre_ids: number) => string;
}
 
export interface Movie{
    title: string;
    genre_ids: number[];
    vote_average: number;
    backdrop_path: string;
    id: number
    vote_count: number;
    overview:string;
}
