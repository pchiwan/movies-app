import React from "react";

import "./MoviePoster.scss";

function MoviePoster({ src }) {
  const style = {
    backgroundImage: `url(${src})`,
  };
  return <div className="movie-poster" style={style} />;
}

export default MoviePoster;
