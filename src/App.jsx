import { ColorGame } from "./ColorGame";
import { MsgList } from "./MsgList";
import "./styles.css";
import { MovieList } from "./MovieList";
import { UserList } from "./UserList";
import { Routes, Route, Link } from "react-router";

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
        <Route path="movies" element={<MovieList />} />
        <Route path="color-game" element={<ColorGame />} />
        <Route path="users" element={<UserList />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

function Home() {
  return <h1> Welcome to Movies App </h1>;
}

// Task
// 1. /movies - MovieList
// 2. /color-game
// 3. /users
// 4. /home -> Welcome to movie app

