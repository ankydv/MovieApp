import React from "react";
// import { useSelector } from "react-redux";

import "./style.css";

const Genres = ({ data }) => {
    // const { genres } = useSelector((state) => state.home);
      //!genres[g]?.name
    return (
        <div className="genres">
            {data?.map((g) => {
                // if (!data) return;
                return (
                    <div key={g} className="genre">
                        {g}
                    </div>
                );
            })}
        </div>
    );
};

export default Genres;