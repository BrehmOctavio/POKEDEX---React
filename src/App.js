import React,{ useState, useEffect, useContext } from 'react';
import './css/App.css';
import Nav from './components/Nav';
import Pokedex from './components/Pokedex';
import { getPokemons, getPokemonData } from './components/Apis';
import { FavoriteProvider } from './contexts/favouriteContext';

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorites] = useState([])

  const fetchPokemons = async()=>{
    try{
      setLoading(true);
      const data = await getPokemons(25, 25 * page);
      const promises = data.results.map(async(pokemon) =>{
      return await getPokemonData(pokemon.url);
      })
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
    }catch(err){
      console.log(err)
    }
  };

  useEffect(()=>{
      fetchPokemons();
  },[page]);

  const updateFavoritePokemons = (name)=>{
    const update = [...favorite];
    const isFavorite = update.indexOf(name);
    if(isFavorite >= 0) {
      update.splice(isFavorite, 1);
    }else{
      update.push(name);
    }
    setFavorites(update);
  };

  return (
    <FavoriteProvider 
    value={{favoritePokemons: favorite, 
            updateFavoritePokemons: updateFavoritePokemons}}>
    <div className="App">
     <Nav />
     {
      loading ? <p className='load'><i>LOADING POKEDEX</i></p> : <Pokedex pokemons={pokemons} page={page} setPage={setPage} total={total}/>
     }
    </div>
    </FavoriteProvider>
  )
}

export default App;
