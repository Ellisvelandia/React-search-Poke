import { useState } from "react";
import PokemonData from "../components/PokemonData";
import Search from "../components/Search";
import { fetchPokemon } from "../services/getPokemon";
import { Alert, Spinner } from "react-bootstrap";

const spinnerStyle = {
  width: "4rem",
  heigth: "4rem",
  borderWidth: "2rem",
};

const spinnerWrapperStyle = {
  textAlign: "center",
  marginTop: "50px",
};

export default function Home() {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const getPokemon = async (query) => {
    if (!query) {
      setErrorMsg("You must enter a pokemon");
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetchPokemon(query);
        const results = await response.json();
        setPokemon(results);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
        setErrorMsg("Pokemon not found");
      }
    }, 1000);
  };

  return (
    <div>
      {error ? <Alert variant="danger">{errorMsg}</Alert> : null}
      <Search getPokemon={getPokemon} />
      {loading ? (
        <div style={spinnerWrapperStyle}>
          <Spinner style={spinnerStyle} animation="border" />
        </div>
      ) : null}
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
