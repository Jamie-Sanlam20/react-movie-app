import { useEffect, useState } from "react";
import { Movie } from "../components/Movie";
import { useNavigate } from "react-router";

// Smart (Parent) - React to User action
// No props
export function MovieList() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  // Task: Get Movies from Mock API
  // Make sure there is no infinite call to API

  // JS Engine - Headups
  async function getMovies() {
    const response = await fetch(
      "https://68871b87071f195ca97f46b5.mockapi.io/movies",
      { method: "GET" }
    );
    const movies = await response.json();
    setMovies(movies);
  }

  useEffect(() => {
    getMovies();
  }, []); // [] -> Empty Dependency array

  const deleteMovie = async (id) => {
    console.log("Deleting....", id); // id of the movie
    const response = await fetch(
      `https://68871b87071f195ca97f46b5.mockapi.io/movies/${id}`,
      { method: "DELETE" }
    );
    const movie = await response.json();
    console.log("Deleted", movie); // Todo: Use Notification (Better UX)
    // Refresh Data
    getMovies();
  };

  return (
    <div>
      <section className="movie-list-container">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            deleteBtn={
              <button onClick={() => deleteMovie(movie.id)}>🗑️ Delete</button>
            }
            editBtn={
              <button onClick={() => navigate(`/movies/${movie.id}/edit`)}>
                Edit
              </button>
            }
          />
        ))}
      </section>
    </div>
  );
}
