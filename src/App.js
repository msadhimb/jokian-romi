import { useEffect, useState } from "react";
import "./App.css";
import { getMovieList, searchMovie } from "./api";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const search = (q) => {
    console.log({ q });
  };

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img
            className="Movie-image"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
          />
          <div className="Movie-date">{movie.release_date}</div>
          <div className="Movie-rate">{movie.vote_average}</div>
        </div>
      );
    });
  };

  console.log({ popularMovies: popularMovies });

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter> */}
      <div className="App">
        <header className="App-header">
          <h1>Movie List</h1>
          <input
            placeholder="What do you want to watch?"
            className="Movie-search"
            onChange={({ target }) => search(target.value)}
          />
          <div className="Movie-container">
            <PopularMovieList />
          </div>
        </header>
      </div>
    </>
  );
};

export default App;
