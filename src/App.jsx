import { Routes, Navigate, Route, Link, useParams } from "react-router";
import { ColorGame } from "./pages/ColorGame";
import "./styles.css";
import { MovieList } from "./pages/MovieList";
import { UserList } from "./pages/UserList";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { useState } from "react";
import { INITIAL_MOVIES } from "./components/INITIAL_MOVIES";

// Component = UI + Logic
// Default Export
export default function App() {
  const [movies, setMovies] = useState(INITIAL_MOVIES); // Lifting the state up - movies are stored here
  return (
    <div className="App">

      <nav>
        <ul>
          <li><Link to="/">Home </Link></li>
          <li><Link to="/movies">Movies </Link></li>
          <li><Link to="/color-game">Color Game</Link></li>
          <li><Link to="/users">Users </Link></li>
        </ul>
      </nav>

      {/* Routing Setup */}
      <Routes>
        {/* Task: /films -> /movies */}
        <Route path="/films" element={<Navigate to="/movies" replace />} />
        <Route path="movies" element={<MovieList movies={movies} setMovies={setMovies} />} />
        <Route path="movies/:id" element={<MovieDetails movies={movies} />} />

        <Route path="color-game" element={<ColorGame />} />
        <Route path="users" element={<UserList />} />

        {/* Redirect - /home -> / */}
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />

        {/* Catch all route - path doesn't match anything */}
        {/* * represents catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

// Extract the id from URL - useParams() - 'use' - hook
function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies[id];

  return (
    <div className="movie-detail-container">
      <iframe
        width="100%"
        height="650"
        src={movie.trailer}
        title="WAR 2 | Official Trailer | Hrithik Roshan | NTR | Kiara Advani | Ayan Mukerji | YRF Spy Universe"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="movie-details-content-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p className="movie-rating">⭐ {movie.rating}</p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
      </div>
    </div>
  );
}