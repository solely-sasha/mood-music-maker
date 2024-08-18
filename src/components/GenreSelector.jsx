import React, { useState } from "react";

export default function GenreSelector({ selectedGenre, onGenreChange }) {
  const [genres, setGenres] = useState([
    "pop",
    "rock",
    "electronic",
    "hip hop",
    "jazz",
    "classical",
    "country",
    "acoustic",
    "love",
    "feel good",
    "running songs",
    "studying songs",
    "workout songs",
    "sleep songs",
    "relaxing songs",
    "dancing songs",
    "r&b",
    "happy",
    "fun",
    "creative",
    "inspirational",
    "motivational",
    "sad",
    "angry",
    "scared",
    "friendship",
    "love songs",
    "cheerful",
    "chill",
    "christmas songs",
    "halloween songs",
    "Taylor Swift",
  ]);

  const handleSelectChange = (e) => {
    onGenreChange(e.target.value);
  };
  return (
    <div>
      <select
        id="genreSelect"
        value={selectedGenre}
        onChange={handleSelectChange}
      >
        <option value=""> Select a genre </option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {" "}
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}
