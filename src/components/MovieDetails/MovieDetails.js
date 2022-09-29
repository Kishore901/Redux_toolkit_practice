import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchDetailsAsync,
  getDetails,
  removeDetails,
} from "../../features/movies/movieSlice";

const MovieDetails = () => {
  const { imdbId } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getDetails);
  useEffect(() => {
    dispatch(fetchDetailsAsync(imdbId));

    return () => {
      dispatch(removeDetails());
    };
  }, [dispatch, imdbId]);

  return (
    <div className="flex mt-4">
      <div className="section-left w-3/4">
        <div className="flex justify-around items-baseline">
          <span className="text-2xl font-semibold">{data.Title}</span>
          <span>IMDB rating : {data.imdbRating}</span>
          <span>Year : {data.Year}</span>
          <span>Runtime : {data.Runtime}</span>
        </div>
        <div className="mb-12 mt-6 w-2/4 text-lg">{data.Plot}</div>
        <div>
          <div className="mb-2">
            <span className="mr-4">Director:</span>
            <span>{data.Director}</span>
          </div>
          <div className="mb-2">
            <span className="mr-4">Stars:</span>
            <span>{data.Actors}</span>
          </div>
          <div className="mb-2">
            <span className="mr-4">Geners:</span>
            <span>{data.Genre}</span>
          </div>
          <div className="mb-2">
            <span className="mr-4">Languages:</span>
            <span>{data.Language}</span>
          </div>
          <div className="mb-2">
            <span className="mr-4">Writer:</span>
            <span>{data.Writer}</span>
          </div>
        </div>
      </div>
      <div className="section-right w-1/4">
        <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
  );
};

export default MovieDetails;
