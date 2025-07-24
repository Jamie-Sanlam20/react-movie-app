import { useState } from "react";
// import { ColorGame } from "./ColorGame";
// import { MsgList } from "./MsgList";
import "./styles.css";
// import { UserList } from "./UserList";

// Component = UI + Logic
// Default Export
export default function App() {
  console.log("Hi");
  return (
    <div className="App">
      {/* <MsgList /> */}

      {/* <UserList /> */}

      {/* <ColorGame /> */}
      <MovieList />
    </div>
  );
}

const INITIAL_MOVIES = [{
      id: "99",
      name: "Vikram",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      rating: 8.4,
      summary:
        "Members of a black ops team must track and eliminate a gang of masked murderers.",
      trailer: "https://www.youtube.com/embed/OKBMCL-frPU",
    },
    {
      id: "100",
      name: "RRR",
      poster:
        "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/249/2023/05/01103204/rrr-scaled.jpg",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",
    },
    {
      id: "101",
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU",
    },
    {
      id: "102",
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      trailer: "https://www.youtube.com/embed/38A__WT3-o0",
    },
    {
      id: "103",
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
    },
    {
      id: "104",
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_.jpg",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
    },
    {
      id: "105",
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      id: "106",
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
    },
    {
      id: "107",
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
    },
    {
      name: "PS2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
      summary:
        "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
      rating: 8,
      trailer: "https://www.youtube.com/embed/KsH2LA8pCjo",
      id: "108",
    },
    {
      name: "Thor: Ragnarok",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
      rating: 8.8,
      trailer: "https://youtu.be/NgsQ8mVkN8w",
      id: "109",
    },]

// Smart Parent
function MovieList() {
  const [movies, setMovies] = useState(INITIAL_MOVIES);

   // input box - variable
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const addMovie = (event) => {
    event.preventDefault(); // Prevent Refresh Behaviour (disappears on Refresh)
    console.log("addMovie", name, poster); // Check

    const newMovie = {
      name: name,
      poster: poster,
      summary: summary,
      rating: rating,
    };

    // Copy the existing movies + New movie
    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      <form onSubmit={addMovie} className="movie-form-container">
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(event) => setPoster(event.target.value)}
          type="text"
          placeholder="Poster"
        />

        <input
          onChange={(event) => setRating(event.target.value)}
          type="text"
          placeholder="Rating"
        />

        <input
          onChange={(event) => setSummary(event.target.value)}
          type="text"
          placeholder="Summary"
        />

        {/* Task 1.2 Add Box to the List */}
        <button type="submit">➕ Add</button>
      </form>

      {/* <h1>
        {name} | {poster}|{rating}|{summary}
      </h1> */}

    <section className="movie-list-container">
      {movies.map((movie) => (
        <Movie {...movie} />
      ))}
    </section>
    </div>
  );
}

function Movie({ poster, name, rating, summary }) {
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
        {show ? <p class="movie-summary">{summary}</p> : ""}
      </div>
    </div>
  );
}

// function AddMovie(poster, name, rating, summary) {}
