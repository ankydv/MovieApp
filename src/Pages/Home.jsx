import React from "react";
import MovieCard from "../Components/movieCard/movieCard";
import movies from "../data/movies-filter-react.json";
import "./style.css";
import ContentWrapper from "../Components/contentWrapper/ContentWrapper";
import Header from "../Components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <div className="movieList">
          {movies.map((item) => (
            <MovieCard key={item.imdbmovieid} data={item} />
          ))}
        </div>
      </ContentWrapper>
    </>
  );
};

export default Home;
