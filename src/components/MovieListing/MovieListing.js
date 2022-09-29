import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllSeries } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  return (
    <div>
      {movies.length > 0 ? (
        <div>
          <h2 className="font-medium text-2xl">Movies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 grid-flow-row">
            {movies.map((mov, index) => (
              <MovieCard key={index} movie={mov} />
            ))}
          </div>
        </div>
      ) : (
        <div>There is some error fetching movies</div>
      )}
      {series.length > 0 ? (
        <div>
          <h2 className="font-medium text-2xl">Series</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 grid-flow-row">
            {series.map((ser, index) => (
              <MovieCard key={index} movie={ser} />
            ))}
          </div>
        </div>
      ) : (
        <div>There is some error fetching series</div>
      )}
    </div>
  );
};

export default MovieListing;
