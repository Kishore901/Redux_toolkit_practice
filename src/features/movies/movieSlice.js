import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const initialState = {
  movies: [],
  series: [],
  details: [],
};

export const fetchAllMoviesAsync = createAsyncThunk(
  "movies/fetchAllMoviesAsync",
  async () => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=Harry&type=movie`
    );

    return response.data.Search;
  }
);

export const fetchAllSeriesAsync = createAsyncThunk(
  "movies/fetchAllSeriesAsync",
  async () => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=Stranger&type=series`
    );

    return response.data.Search;
  }
);

export const fetchDetailsAsync = createAsyncThunk(
  "movies/fetchDetailsAsync",
  async (id) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&Plot=full`
    );

    return response.data;
  }
);
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAllMoviesAsync.pending]: () => {
      console.log("Pending");
    },
    [fetchAllMoviesAsync.fulfilled]: (state, { payload }) => {
      console.log("Fetched successfully");
      return { ...state, movies: payload };
    },
    [fetchAllMoviesAsync.rejected]: () => {
      console.log("Rejected!");
    },
    [fetchAllSeriesAsync.fulfilled]: (state, { payload }) => {
      console.log("Fetched series successfully");
      return { ...state, series: payload };
    },
    [fetchDetailsAsync.fulfilled]: (state, { payload }) => {
      console.log("Fetched details");
      return { ...state, details: payload };
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getDetails = (state) => state.movies.details;
export default movieSlice.reducer;
