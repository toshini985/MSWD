import React from "react";
import Weather from "./Weather";

const Country = ({ name, capital, population, languages, flag }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Capital {capital}</p>
      <p>Population {population}</p>

      <h2>Languages</h2>
      <ul>
        {languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>

      <img src={flag} alt={`${name} flag`} width="200px" />
      <Weather capital={capital} />
    </div>
  );
};

export default Country;
