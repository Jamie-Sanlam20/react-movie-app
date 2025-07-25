import { Routes, Navigate, Route, Link } from "react-router";
import { ColorGame } from "./pages/ColorGame";
import { MsgList } from "./pages/MsgList";
import "./styles.css";
import { MovieList } from "./pages/MovieList";
import { UserList } from "./pages/UserList";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

// Component = UI + Logic
// Default Export
export default function App() {
  // Link - no refresh
  return (
    <div className="App">
      {/* <MsgList /> */}

      {/* <UserList /> */}

      {/* <ColorGame /> */}
      {/* <MovieList /> */}

      {/* <a href="/about">About with Anchor</a> |  */}

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
        <Route path="movies" element={<MovieList />} />
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

