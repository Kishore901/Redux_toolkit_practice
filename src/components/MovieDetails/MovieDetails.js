import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailsAsync } from "../../features/movies/movieSlice";

const MovieDetails = () => {
  const { imdbId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetailsAsync(imdbId));
  }, [dispatch, imdbId]);

  return <div>MovieDetails</div>;
};

export default MovieDetails;
