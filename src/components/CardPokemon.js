import React, { useState, useContext } from "react";
import FavoriteContext from "../contexts/favouriteContext";



export default function PokemonCard({pokemon}){

    const [color, setColor] = useState("rgb(131, 131, 131)");
    const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext);

    const redHeart = "rgba(255, 2, 2, 0.454)";
    const blackHeart = "rgb(131, 131, 131)";
    const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

    const changeColorW = ()=>{
        setColor("white");
    };

    const changeColorG = ()=>{
        setColor("rgb(131, 131, 131)");
    };

    const titleStyle = {
        color: color
    }

    const clickHeart = (e)=>{
        e.preventDefault();
        updateFavoritePokemons(pokemon.name)
    };


    return(
        <div className="div-pokemon-card" onMouseEnter={changeColorW} onMouseLeave={changeColorG}>
            <img className="img-pokemons" src={pokemon.sprites.front_default}  alt={pokemon.name} />
            <div className="div-container-data">
                <div className="div-data">
                    <h3 style={titleStyle} className="pokemon-name"><i>{pokemon.name}</i></h3>
                    <p className="id">#{pokemon.id}</p>
                </div>
                <div className="div-data2">
                    <div>
                        {
                            pokemon.types.map((type, idx) =>{
                                return <div style={titleStyle} className="type" key={idx}>{type.type.name}</div>
                            })
                        }
                    </div>
                    <button className="btn-heart"><p  style={{color:heart}} className="heart" onClick={clickHeart}>❤</p></button>
                </div>
            </div>
        </div>
    )
}