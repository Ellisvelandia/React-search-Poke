import { useState } from "react";
import PokemonData from "../components/PokemonData";
import Search from "../components/Search";
import { fetchPokemon } from "../services/getPokemon";

export default function Home() {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);
  const getPokemon = async (query) => {
    setLoading(true);
    const response = await fetchPokemon(query);
    const results = await response.json();
    setPokemon(results);
    console.log(results);
    setLoading(false);
  };
  return (
    <div>
      <Search getPokemon={getPokemon} />
      {!loading && pokemon ? (
        <PokemonData
          name={pokemon.name}
          sprite={pokemon.sprites.other.dream_world.front_default}
          abilities={pokemon.abilities}
          stats={pokemon.stats}
          types={pokemon.types}
        />
      ) : null}
    </div>
  );
}
