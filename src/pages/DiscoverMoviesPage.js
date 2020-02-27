import React, { useState } from "react";
import axios from "axios";
import NavigationBar from "../components/NavigationBar";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [movieData, set_movieData] = useState([]);
  const [status, set_status] = useState("Not searching yet");

  const search = async () => {
    console.log("TODO search movies for:", searchText);

    const queryParam = encodeURIComponent(searchText);

    set_status("Searching...");

    let data;

    try {
      data = await axios.get(
        // `http://www.omdbapi.com/?s=${queryParam}&apikey=10c58c`
        `http://www.omdbapi.com/?s=${queryParam}&apikey=10c58c87`
      );
      set_movieData(data.data.Search);
      set_status("Done");
    } catch (error) {
      set_status("Something went wrong", error);
    }

    console.log("Succes", data);
  };

  console.log("STATUS", status);
  console.log("DATAs", movieData);

  return (
    <div>
      <NavigationBar />
      <h3>{status}</h3>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={e => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      <div>
        {movieData.map(movie => {
          return <img src={movie.Poster} />;
        })}
      </div>
    </div>
  );
}

// {
//   movieData.map(movie => {
//     return <img src={movie.Poster} />;
//   });
// }

// {
//   movieData.map(movie => {
//     return <p>{movie.Title}</p>;
//   });
// }
