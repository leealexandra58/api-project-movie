


export interface SearchMovie {
    page: number;
    results: Result[];
    total_results: number;
    total_pages: number;

}

export interface Result {
    poster_path:string| null;
    adult: boolean,
    overview: string;
    release_date: string;
    title: string;
    id: number;
}

export interface Genre{
    genres: GenreMovie[];
}

export interface GenreMovie{
    id: number;
    name: string;
}