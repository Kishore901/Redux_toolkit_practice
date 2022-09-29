import React from "react";
import { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import {
  fetchAllMoviesAsync,
  fetchAllSeriesAsync,
} from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllMoviesAsync("Harry"));
    dispatch(fetchAllSeriesAsync("Stranger"));
  }, [dispatch]);
  return (
    <div>
      <MovieListing />
    </div>
  );
};

export default Home;
