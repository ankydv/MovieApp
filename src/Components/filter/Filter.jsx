import React, { useState } from "react";
import "./style.css"; // Import CSS file

const Filter = ({ data, onFilterChange }) => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedGenres([...selectedGenres, genre]);
    } else {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    }
  };

  const handleCountryChange = (event) => {
    const country = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedCountries([...selectedCountries, country]);
    } else {
      setSelectedCountries(selectedCountries.filter((c) => c !== country));
    }
  };

  const handleLanguageChange = (event) => {
    const language = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedLanguages([...selectedLanguages, language]);
    } else {
      setSelectedLanguages(selectedLanguages.filter((l) => l !== language));
    }
  };

  const applyFilters = () => {
    const filters = {
      genres: selectedGenres,
      countries: selectedCountries,
      languages: selectedLanguages,
    };
    onFilterChange(filters);
  };

  const clearFilters = () => {
    setSelectedCountries([]);
    setSelectedGenres([]);
    setSelectedLanguages([]);
  };

  return (
    <div className="filter-container">
      <h2 className="filter-heading">Filters</h2>
      <div className="filters">
        <div>
          <h3 className="filter-subheading">Genres</h3>
          <div className="filter">
            {data.genres.map((genre) => (
              <label key={genre} className="filter-label">
                <input
                  type="checkbox"
                  value={genre}
                  checked={selectedGenres.includes(genre)}
                  onChange={handleGenreChange}
                />
                <span className="checkmark"></span>
                {genre}
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className="filter-subheading">Countries</h3>
          <div className="filter">
            {data.countries.map((country) => (
              <label key={country} className="filter-label">
                <input
                  type="checkbox"
                  value={country}
                  checked={selectedCountries.includes(country)}
                  onChange={handleCountryChange}
                />
                <span className="checkmark"></span>
                {country}
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className="filter-subheading">Languages</h3>
          <div className="filter">
            {data.languages.map((language) => (
              <label key={language} className="filter-label">
                <input
                  type="checkbox"
                  value={language}
                  checked={selectedLanguages.includes(language)}
                  onChange={handleLanguageChange}
                />
                <span className="checkmark"></span>
                {language}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="filter-buttons">
        <button className="filter-button" onClick={clearFilters} style={{backgroundColor: 'white', color: 'black'}}>
          Clear all
        </button>
        <button className="filter-button" onClick={applyFilters}>
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
