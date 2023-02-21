import React,{ useState, useEffect } from "react";
import PokemonCard from "./CardPokemon";
import { Pagination } from "./Pagination";


export default function Pokedex({pokemons, page, setPage, total}){

    const [grid, setGrid] = useState(false);

    useEffect(()=>{
        setGrid(true);
    },[]);

    const lastPage = ()=>{
        const nextPage = Math.max(page - 1,0);
        setPage(nextPage);
    };

    const nextPage = ()=>{
        const nextPage = Math.min(page + 1, total);
        setPage(nextPage);
    };

    return(
        <div className="div-pokedex">
            <div className="div-pagination">
                <Pagination page={page + 1} totalPages={111} onLeftClick={lastPage} onRightClick={nextPage} />
            </div>
            <div className={grid ? "pokedex-grid" : "pokedex-grid-opacity"}>
                {pokemons.map((pokemon, idx) => {
                    return <PokemonCard pokemon={pokemon} key={pokemon.name} />
                })}
            </div>
            <div className="div-pagination">
                <Pagination page={page + 1} totalPages={111} onLeftClick={lastPage} onRightClick={nextPage} />
            </div>
        </div>
    )
}