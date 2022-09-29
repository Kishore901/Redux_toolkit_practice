import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAllMoviesAsync,
  fetchAllSeriesAsync,
} from "../../features/movies/movieSlice";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.length > 3) {
      dispatch(fetchAllMoviesAsync(term));
      dispatch(fetchAllSeriesAsync(term));
    }
    setTerm("");
  };
  return (
    <div>
      <div className="flex items-center justify-between bg-secondary px-8 py-2">
        <Link to={"/"}>
          <div className="text-font-primary text-4xl font-semibold">
            Movie App
          </div>
        </Link>
        <div>
          <form onSubmit={handleSubmit} className="text-secondary">
            <input
              type="text"
              value={term}
              className="outline-none"
              onChange={(e) => setTerm(e.target.value)}
            />
            <button
              type="submit"
              className="border-2 border-primary text-font-primary"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="logo w-12">
          <img src="/images/user-icon.png" alt="user-logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
