import React from "react";
import Country from "./Country";

const Results = ({ countries, displayCountry, setDisplayCountry }) => {
  const handleShowClick = (country) => {
    setDisplayCountry(country);
  };

  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countries.length <= 10 && countries.length > 1) {
    return (
      <div>
        {countries.map((country) => (
          <p key={country.name}>
            {country.name}{" "}
            <button onClick={() => handleShowClick(country)}>Show</button>
          </p>
        ))}

        {Object.entries(displayCountry).length > 0 ? (
          <Country
            name={displayCountry.name}
            capital={displayCountry.capital}
            population={displayCountry.population}
            languages={displayCountry.languages}
            flag={displayCountry.flag}
          />
        ) : null}
      </div>
    );
  } else if (countries.length === 1) {
    return (
      <Country
        name={countries[0].name}
        capital={countries[0].capital}
        population={countries[0].population}
        languages={countries[0].languages}
        flag={countries[0].flag}
      />
    );
  } else {
    return <div></div>;
  }
};

export default Results;
