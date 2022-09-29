import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-secondary mb-2">
      <Link to={`/movie/${movie.imdbID}`}>
        <div className="flex flex-col items-center">
          <div>
            <img className="h-80" src={movie.Poster} alt={movie.Title} />
          </div>
          <div>
            <div>
              <h4>{movie.Title}</h4>
              <p>{movie.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
