import { Routes, Navigate, Route, Link } from "react-router";
import { ColorGame } from "./pages/ColorGame";
import { MsgList } from "./MsgList";
import "./styles.css";
import { MovieList } from "./pages/MovieList";
import { UserList } from "./pages/UserList";
import { Home } from "./pages/Home";

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
        <li><Link to="/movies">Movies </Link></li>
        <li><Link to="/color-game">Color Game</Link></li>
        <li><Link to="/users">Users </Link></li>
        <li><Link to="/">Home </Link></li>
        </ul>
      </nav>

      {/* Routing Setup */}
      <Routes>
        {/* Task: /films -> /movies */}
        <Route path="/films" element={<Navigate to="/movies" replace />} />
        <Route path="movies" element={<MovieList />} />
        <Route path="color-game" element={<ColorGame />} />
        <Route path="users" element={<UserList />} />

        {/* Redirect */}
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};