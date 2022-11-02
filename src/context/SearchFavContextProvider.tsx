import { ReactNode, useState } from "react";
import { Result } from "../models/SeachMovie";
import { SearchFavContext } from "./SearchFavContext";


interface SearchProps {
    children: ReactNode;
}


export default function SearchFavContextProvider ({ children }: SearchProps) {
    const [searchFav, setSearchFav] = useState<Result[]>([]);

    const addSearchFav = (searchfav: Result): void => {
        
        const oldFavorites = [...searchFav];

        
        const newFavorites = oldFavorites.concat(searchfav);

        setSearchFav(newFavorites);
    };

    const removeSearchFav = (id: number): void => {
        const oldFavorites = [...searchFav];

        const newFavorites = oldFavorites.filter((searchfav) => searchfav.id !== id);

        setSearchFav(newFavorites);
    };

    return (
        <SearchFavContext.Provider value={{ searchFav, addSearchFav, removeSearchFav }}>
            {children}
        </SearchFavContext.Provider>
    );
};