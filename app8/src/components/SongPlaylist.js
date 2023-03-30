import { createRandomSong } from "../data";

// 4) Import the action creator function and 'useDispatch' from react-redux
import { addSong } from "../store";
import { removeSong } from "../store";
import { useDispatch } from "react-redux";
import { act } from "react-dom/test-utils";

import { useSelector } from "react-redux";


function SongPlaylist() {

  // this hook is going to make use of the context system to react up our component hierarchy and get access to the 
  // dispatch function from the redux store.
  const dispatch = useDispatch();

  // To Do:
  // Get list of songs
  const songPlaylist = useSelector((state)=>{  // pass selector function to useSelector
    // console.log(state);
    return state.songs;
  });

  const handleSongAdd = (song) => {
      dispatch(addSong(song));
  };
  const handleSongRemove = (song) => {
    // To Do:
    // Remove song from list of songs
    dispatch(removeSong(song));
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
