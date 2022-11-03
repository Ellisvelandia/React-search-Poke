import React from "react";

function PokemonData(props) {
  return (
    <div className="flex flex-col items-center m-10 ">
      <div className="p-4 w-96 flex flex-col items-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.name}
        </h5>
        <img src={props.sprite} alt={props.name} className="mb-3 rounded-full shadow-lg object-contain h-48 w-full" />
      </div>
    </div>
  );
}

export default PokemonData;
