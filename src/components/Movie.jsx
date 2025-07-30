// import { useState } from "react";

// // Presentation
// export function Movie({ movie:{ poster, name, rating, summary }}) {
//   // Inline styles
//   // Conditional Styling
//   const ratingStyles = {
//     color: rating >= 8.5 ? "green" : "red",
//   };

//   const [show, setShow] = useState(true);

//   // const summaryStyles = {
//   //   display: show ? "block" : "none",
//   // };
//   return (
//     <div className="movie-container">
//       <img src={poster} alt={name} className="movie-poster" />
//       <div className="movie-content-container">
//         <div className="movie-specs">
//           <h2 className="movie-name">{name}</h2>
//           <p style={ratingStyles} className="movie-rating">
//             ⭐ {rating}{" "}
//           </p>
//         </div>
//         <button onClick={() => setShow(!show)}>Toggle Summary</button>

//         {/* Conditional Styling - Hidden in DOM */}
//         {/* <p>{show + ""}</p> */}
//         {/* <p style={summaryStyles} className="movie-summary">{summary}</p> */}

//         {/* Conditional Rendering - Removes from DOM */}
//         {show ? <p className="movie-summary">{summary}</p> : ""}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Link, useNavigate } from "react-router";

// Presentation
export function Movie({ movie, deleteBtn, editBtn }) {
  const [show, setShow] = useState(true);
  const ratingStyles = {
    color: movie.rating >= 8.5 ? "green" : "red",
  };
  const navigate = useNavigate();

  return (
    <div className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <div className="movie-content-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p style={ratingStyles} className="movie-rating">
            ⭐ {movie.rating}
          </p>
        </div>
        {/* Task 1.1 */}
        <button onClick={() => navigate(`/movies/${movie.id}`)}>
          View Details
        </button>
        <button onClick={() => setShow(!show)}>Toggle Summary</button>
        {show ? <p className="movie-summary">{movie.summary}</p> : ""}
        {editBtn} {deleteBtn}
      </div>
    </div>
  );
}
