import { useState } from "react";

// function Counter() {
//   const [like, setLike] = useState(10);
//   console.log("Re-rendered...");
//   // Task: Dislike button - Youtube
//   return (
//     <div>
//       <button aria-label="like button" onClick={() => setLike(like + 1)}>
//         👍 {like}
//       </button>
//     </div>
//   );
// }

export function Counter() {
  const [like, setLike] = useState(10);
  const [dislike, setDislike] = useState(10);

  // Task: Dislike button - Youtube
  return (
    <div className="counter-container">
      <button aria-label="like button" onClick={() => setLike(like + 1)}>
        👍 {like}
      </button>
      <button
        aria-label="dislike button"
        onClick={() => setDislike(dislike + 1)}
      >
        👎 {dislike}
      </button>
    </div>
  );
}
