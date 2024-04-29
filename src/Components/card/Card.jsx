import React from "react";
import Genres from "../genres/Genres";
import "./style.scss";

const MovieCard = ({ data }) => {
  const defaultImage =
    "https://images.unsplash.com/photo-1560109947-543149eceb16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVlbHxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div className="movieCard" onClick={() => alert(data.imdbmovieid)}>
      <div className="posterBlock">
        <span className="imgWrapper">
          <img
            className="posterImg"
            src={
              data?.moviemainphotos[0] || defaultImage
            }
          />
        </span>
      </div>
      <div className="textBlock">
        <span className="title">{data.movietitle}</span>
        <Genres data={data?.moviegenres.slice(0, 3)} />
      </div>
    </div>
  );
};

export  default MovieCard;
