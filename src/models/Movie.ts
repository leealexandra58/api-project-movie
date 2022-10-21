

export interface Movies{
    title: string;
    release_date: string;
    genre: Genre[];
    vote_average: number;


}

export interface Genre{
    id: number;
    name: string;
}