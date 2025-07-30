import { Link, Navigate, Route, Routes } from "react-router";
import { AddMovie } from "./pages/AddMovie";
import { ColorGame } from "./pages/ColorGame";
import { EditMovie } from "./pages/EditMovie";
import { Home } from "./pages/Home";
import { MovieDetails } from "./pages/MovieDetails";
import { MovieList } from "./pages/MovieList";
import { NotFound } from "./pages/NotFound";
import { UserList } from "./pages/UserList";
import "./styles.css";

// Component = UI + Logic
// Default Export
export default function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/movies">Movies </Link>
          </li>
          <li>
            <Link to="/movies/new">➕ Add Movies </Link>
          </li>
          <li>
            <Link to="/color-game">Color Game </Link>
          </li>
          <li>
            <Link to="/users">Users </Link>
          </li>
        </ul>
      </nav>

      {/* Routing Setup */}
      <Routes>
        {/* Task: /films -> /movies */}
        <Route path="films" element={<Navigate to="/movies" replace />} />
        <Route path="movies" element={<MovieList />} />
        {/* /movies/new - AddMovie */}
        <Route path="movies/new" element={<AddMovie />} />
        <Route path="movies/:id/edit" element={<EditMovie />} />
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="color-game" element={<ColorGame />} />
        <Route path="users" element={<UserList />} />

        {/* Redirect - /home -> /  */}
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />

        {/* Catch all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
