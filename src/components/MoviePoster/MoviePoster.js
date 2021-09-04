import React, { useCallback, useState } from "react";

import "./MoviePoster.scss";

const HOLLOW_STAR = "far fa-star";
const SOLID_STAR = "fas fa-star";

function MoviePoster({ isFavControlVisible, isFavorited, src }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const style = {
    backgroundImage: `url(${src})`,
  };

  const handleMouseDown = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsActive(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseOut = useCallback(() => {
    setIsHovered(false);
  }, []);

  let starClassName = isActive
    ? isFavorited
      ? HOLLOW_STAR
      : SOLID_STAR
    : isFavorited
    ? SOLID_STAR
    : HOLLOW_STAR;

  return (
    <div
      className={`movie-poster-wrapper ${
        isFavControlVisible ? "clickable" : ""
      }`}
    >
      <div className="movie-border" />
      {isFavControlVisible && (
        <div
          className="movie-poster-fav-control ripple"
          onMouseEnter={handleMouseEnter}
          onMouseOut={handleMouseOut}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <i
            className={starClassName}
            style={{ display: isHovered ? "block" : "none" }}
          />
        </div>
      )}
      {isFavorited && (
        <div className="movie-poster-fav">
          <i className={SOLID_STAR} />
        </div>
      )}
      <div className="movie-poster" style={style} />
    </div>
  );
}

export default MoviePoster;
