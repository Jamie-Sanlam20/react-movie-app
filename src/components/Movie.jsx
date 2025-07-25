import { useState } from "react";

// Presentation 
export function Movie({ movie:{ poster, name, rating, summary }}) {
  // Inline styles
  // Conditional Styling
  const ratingStyles = {
    color: rating >= 8.5 ? "green" : "red",
  };

  const [show, setShow] = useState(true);

  // const summaryStyles = {
  //   display: show ? "block" : "none",
  // };
  return (
    <div className="movie-container">
      <img src={poster} alt={name} className="movie-poster" />
      <div className="movie-content-container">
        <div className="movie-specs">
          <h2 className="movie-name">{name}</h2>
          <p style={ratingStyles} className="movie-rating">
            ⭐ {rating}{" "}
          </p>
        </div>
        <button onClick={() => setShow(!show)}>Toggle Summary</button>

        {/* Conditional Styling - Hidden in DOM */}
        {/* <p>{show + ""}</p> */}
        {/* <p style={summaryStyles} className="movie-summary">{summary}</p> */}

        {/* Conditional Rendering - Removes from DOM */}
        {show ? <p className="movie-summary">{summary}</p> : ""}
      </div>
    </div>
  );
}
