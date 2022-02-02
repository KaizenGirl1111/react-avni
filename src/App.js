import React, { useState } from "react";
import "./styles.css";
var animals = {
  "🐷": "Pig",
  "🦓": "Zebra",
  "🦄": "Unicorn",
  "🐫": "Camel",
  "🐵": "Monkey",
  "🐶": "Dog"
};
var animalsKeys = Object.keys(animals);
export default function App() {
  const [userInputMeaning, emojiMeaning] = useState("");
  function emojiInput(e) {
    var Input = e.target.value;
    var meaning = animals[Input];
    if (meaning === undefined) {
      meaning = "not found in database";
    }
    emojiMeaning(meaning);
  }
  function emojiClickHandler(animal) {
    var meaning = animals[animal];
    emojiMeaning(meaning);
  }
  return (
    <div className="App">
      <input onChange={emojiInput} />
      <h2>{userInputMeaning}</h2>
      <h2>What we know</h2>
      {animalsKeys.map(function (keys) {
        return <span onClick={() => emojiClickHandler(keys)}>{keys}</span>;
      })}
    </div>
  );
}
