import React from "react";

import "./MoviePoster.css";

function MoviePoster({ src }) {
  const style = {
    backgroundImage: `url(${src})`,
  };
  return <div className="movie-poster" style={style} />;
}

export default MoviePoster;
