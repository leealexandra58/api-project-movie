import { createContext } from "react";
import { Movie } from "../models/Movie";

interface FavoriteContextModel {
    favorites: Movie[];
    addFavorite: (newMovie: Movie) => void;
    removeFavorite: (removeMovie: number) => void;
};

const defaultValue: FavoriteContextModel = {
    favorites: [],
    addFavorite: () => {},
    removeFavorite: () => {},
};

export const FavoritesContext = createContext(defaultValue);