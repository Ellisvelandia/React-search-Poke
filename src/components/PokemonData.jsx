import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function PokemonData(props) {
  return (
    <div className="flex flex-row  object-contain w-full p-4">
      <div className="p-4 w-full flex flex-col items-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.name}
        </h5>
        <img
          src={props.sprite}
          alt={props.name}
          className="mb-3 rounded-full shadow-lg object-contain h-48 w-full"
        />
        <div>
          <h2>
            <strong>Abilities</strong>
            <hr />
          </h2>
          {props.abilities.map((ability, key) => (
            <div key={key}>
              <span>{ability.ability.name}</span>
            </div>
          ))}
          <h2>
            <strong>Type</strong>
          </h2>
          {props.types.map((type, key) => (
            <div key={key}>
              <span>{type.type.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 w-full flex flex-col items-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full">
          <h2>
            <strong>Base Stats</strong>
            <hr />
          </h2>
          {props.stats.map((stat, key) => (
            <div key={key}>
              <strong>{stat.stat.name}</strong>
              <ProgressBar animated
                now={stat.base_stat}
                max={150}
                label={stat.base_stat}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonData;
