import React, { useState, useEffect } from "react";
import axios from "axios";

import Search from "./components/Search";
import Results from "./components/Results";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [displayCountry, setDisplayCountry] = useState({});

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setResults(response.data));
  }, []);

  const countries = showAll
    ? results
    : results.filter((result) =>
        result.name.toLowerCase().includes(searchText)
      );

  const handleSearchText = (event) => {
    if (event.target.value === "") {
      setDisplayCountry({});
      setShowAll(true);
    } else {
      setShowAll(false);
    }
    setSearchText(event.target.value);
  };

  return (
    <div>
      <Search searchText={searchText} onTextChange={handleSearchText} />
      <Results
        countries={countries}
        displayCountry={displayCountry}
        setDisplayCountry={setDisplayCountry}
      />
    </div>
  );
};

export default App;
