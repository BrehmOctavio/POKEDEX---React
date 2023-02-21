import React from "react";
import { useState } from "react";
import SEARCH from "../assets/search.png";
import { searchPokemon } from "./Apis";


export default function SearchNav(){

    const [search, setSearch] = useState([]);
    const [pokemon, setPokemon] = useState([]);

    const changeData = (e)=>{
        setSearch(e.target.value);
    }

    const handleSearchPokemon = async()=>{
        const data = await searchPokemon(search);
        setPokemon(data);
    }

    return(
        <div className="div-search">
            <input className="search" placeholder="SEARCH" onChange={changeData} />
            <img className="btn-search" src={SEARCH} onClick={handleSearchPokemon} alt="search" />
        </div>
    )
}