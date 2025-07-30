import { useEffect, useState } from "react";
import { useParams } from "react-router";

export function EditMovie() {
  // we need to know which movie to edit:
  const { id } = useParams();
  // const movie = movies[id];
  const [movie, setMovie] = useState({});
  // Code

  const [isLoading, setIsLoading] = useState(true);

  async function getMovieById(id) {
    setIsLoading(true); // Start the loader
    const response = await fetch(
      `https://68871b87071f195ca97f46b5.mockapi.io/movies/${id}`
    );
    const movie = await response.json();
    setIsLoading(false); // Stop the loader
    setMovie(movie);
  }

  useEffect(() => {
    getMovieById(id); // id from URL
  }, [id]);
  return (
    <div>
      <h1>
        Edit Movie {id} - {movie.name}{" "}
      </h1>
    </div>
  );
}
