import { createContext, useState } from "react";

const PlaylistContext = createContext();

function PlaylistProvider({ children }) {
  const [playlists, setPlaylists] = useState([
    { id: 1, name: "My First Playlist", songs: [] },
  ]);

  const addSongToPlaylist = (song, playlistId) => {
    console.log(
      "addSongToPlaylist called with song:",
      song,
      "and playlistId:",
      playlistId
    ); 

    if (playlists.length === 0) {
      setPlaylists([{ id: 1, name: "My Playlist", songs: [song] }]);
    } else {
      setPlaylists(
        playlists.map((playlist) =>
          playlist.id === playlistId
            ? { ...playlist, songs: [...playlist.songs, song] }
            : playlist
        )
      );
    }

    console.log("Updated playlists:", playlists); 
  };

  return (
    <PlaylistContext.Provider
      value={{ playlists, setPlaylists, addSongToPlaylist }}
    >
      {children}
    </PlaylistContext.Provider>
  );
}

export { PlaylistContext, PlaylistProvider };
