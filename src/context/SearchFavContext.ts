import { createContext } from "react";
import { Result } from "../models/SeachMovie";

interface SearchFavContextModel {
    searchFav: Result[];
    addSearchFav: (newSearchFav: Result) => void;
    removeSearchFav: (removeMovie: number) => void;
};

const defaultValue: SearchFavContextModel = {
    searchFav: [],
    addSearchFav: () => {},
    removeSearchFav: () => {},
};

export const SearchFavContext = createContext(defaultValue);