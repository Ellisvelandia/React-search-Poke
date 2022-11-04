import { useState } from "react";

export default function Search(props) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <div className="flex flex-col justify-center items-center mt-5" >
      <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="logo" />
      <form
        className="flex items-center w-full"
        onClick={(e) => e.preventDefault()}
        onChange={handleSubmit}
      >
        <div className="relative w-full">
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Pokemon..."
          />
        </div>
        <button
          className="items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 block"
          onClick={() => props.getPokemon(search)}
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
