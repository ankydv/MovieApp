import React, { useState } from "react";
import Genres from "../genres/Genres";
import "./style.scss";
import { LuBadgeInfo } from "react-icons/lu";

const MovieCard = ({ data }) => {
  const [isInfoVisible, setInfoVisible] = useState();
  const defaultImage =
    "https://images.unsplash.com/photo-1560109947-543149eceb16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVlbHxlbnwwfHwwfHx8MA%3D%3D";

  const handleInfo = () => {
    setInfoVisible((prev) => !prev);
  };
  return (
    <>
      <div className="movieCard" onClick={() => {}}>
        <div className="posterBlock">
          <span className="imgWrapper">
            <img
              className="posterImg"
              src={data?.moviemainphotos[0] || defaultImage}
            />
          </span>
          <div
            className="detailsContainer"
            // onMouseLeave={() => setInfoVisible(false)}
          >
            <div className="icon" onClick={handleInfo}>
              {isInfoVisible ? "Hide" : <LuBadgeInfo size={20} />}
            </div>
            {isInfoVisible && (
              <div className="details">
                {Boolean(data.movielanguages.length) && (
                  <>
                    <span>Languages: </span>
                    <span className="languages">
                      {data.movielanguages.join(", ")}
                    </span>
                    <br />
                  </>
                )}
                {Boolean(data.moviecountries.length) && (
                  <>
                    <br />
                    <span>Countries: </span>
                    <span className="countries">
                      {data.moviecountries.join(", ")}
                    </span>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="textBlock">
          <span className="title">{data.movietitle}</span>
          <Genres data={data?.moviegenres.slice(0, 3)} />
        </div>
      </div>
    </>
  );
};

export default MovieCard;
