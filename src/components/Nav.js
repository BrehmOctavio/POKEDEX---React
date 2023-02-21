import React,{ useState, useEffect, useContext } from "react";
import FavoriteContext from "../contexts/favouriteContext";
import "../css/components.css";
import Logo from "../assets/International_Pokémon_logo.svg.png";
import SearchNav from "./Search";


export default function Nav(){

    const {favoritePokemons} = useContext(FavoriteContext);

    const [nav, setNav] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setNav(true);
        }, 900);
    }, []);

    return(
        <nav className={nav ? "nav" : "nav-transition"}>
            <img className="logo" src={Logo} alt="logo" />
            <SearchNav />
            <div className="favourite"><i>FAVOURITE: </i>{favoritePokemons.length}</div>
        </nav>
    )
}