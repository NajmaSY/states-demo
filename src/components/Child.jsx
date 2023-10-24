import flowers from "../assets/flowers.jpg";
import { useState } from "react";

// when we want to use useState, we have to import it with {}'s
export default function Child({ name }) {
  // useState is just a function
  // as an argument, it takes an initial value for a "state" variable
  //update how many likes does the image have
  // useState returns an array
  console.log(useState(0));
  const [likes, setLikes] = useState(0);
  function handleLikes() {
    setLikes(likes + 1);
  }
  return (
    <div>
      <p>{name} is the child</p>
      <img src={flowers} onClick={handleLikes} />
      <span>❤️ {likes}</span>
    </div>
  );
}
