import React from "react";
import Search from "../components/Search";
import { fetchPokemon } from "../services/getPokemon";

function Home() {
  const getPokemon = async (query) => {
    const response = await fetchPokemon(query);
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <Search getPokemon={getPokemon} />
    </div>
  );
}

export default Home;
