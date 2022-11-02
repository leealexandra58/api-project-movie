import { ReactNode, useState } from "react";
import { Movie } from "../models/Movie";
import { FavoritesContext } from "./FavoritesContext";


interface Props {
    children: ReactNode;
}


export default function FavoritesContextProvider ({ children }: Props) {
    const [favorites, setFavorites] = useState<Movie[]>([]);

    const addFavorite = (movie: Movie): void => {
        
        const oldFavorites = [...favorites];

        
        const newFavorites = oldFavorites.concat(movie);

        setFavorites(newFavorites);
    };

    const removeFavorite = (id: number): void => {
        const oldFavorites = [...favorites];

        const newFavorites = oldFavorites.filter((movie) => movie.id !== id);

        setFavorites(newFavorites);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite}}>
            {children}
        </FavoritesContext.Provider>
    );
};