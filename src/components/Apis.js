import React from "react";


export const searchPokemon = async(pokemon)=>{
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }catch(err){
        console.log(err)
    }
}

export const getPokemons = async(limit=12, offset=0)=>{
    try{
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }catch(err){
        console.log(err)
    }
}

export const getPokemonData = async(url)=>{
    try{
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }catch(err){
        console.log(err)
    }
}