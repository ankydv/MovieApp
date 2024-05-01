import React, { useState } from "react";
import MovieCard from "../Components/movieCard/movieCard";
import movies from "../data/movies-filter-react.json";
import "./style.css";
import ContentWrapper from "../Components/contentWrapper/ContentWrapper";
import Header from "../Components/header/Header";
import Filter from "../Components/filter/Filter";

const Home = () => {
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const genres = [...new Set(movies.flatMap((movie) => movie.moviegenres))];
  genres.sort((a, b) => a.localeCompare(b));

  const countries = [
    ...new Set(movies.flatMap((movie) => movie.moviecountries)),
  ];
  countries.sort((a, b) => a.localeCompare(b));

  const languages = [
    ...new Set(movies.flatMap((movie) => movie.movielanguages)),
  ];
  languages.sort((a, b) => a.localeCompare(b));

  const availableFilters = {
    genres,
    countries,
    languages,
  };
  console.log(availableFilters);

  const applyFilters = (filters) => {
    const { genres, countries, languages } = filters;
    const filteredData = movies.filter((movie) => {
      if (
        genres.length > 0 &&
        !movie.moviegenres.some((genre) => genres.includes(genre))
      ) {
        return false;
      }
      if (
        countries.length > 0 &&
        !movie.moviecountries.some((country) => countries.includes(country))
      ) {
        return false;
      }
      if (
        languages.length > 0 &&
        !movie.movielanguages.some((language) => languages.includes(language))
      ) {
        return false;
      }
      return true;
    });
    setFilteredMovies(filteredData);
  };

  return (
    <>
      <Header />
      <ContentWrapper>
        <Filter data={availableFilters} onFilterChange={applyFilters} />
      </ContentWrapper>
      <ContentWrapper>
        <div className="movieList">
          {filteredMovies.length == 0 ? (
            <h1 style={{color: 'white'}}>No such movie there</h1>
          ) : (
            <>
              {filteredMovies.map((item) => (
                <MovieCard key={item.imdbmovieid} data={item} />
              ))}
            </>
          )}
        </div>
      </ContentWrapper>
    </>
  );
};

export default Home;
