import { createStore as reduxCreateStore } from "redux";
import { AUDIO_SET_PLAYING, AUDIO_PLAY_FILE } from "./actions/actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case AUDIO_PLAY_FILE:
      return Object.assign({}, state, {
        audioUrl: action.payload.url,
        audioTitle: action.payload.title,
        audioArtist: action.payload.artist,
        isPlaying: true
      });
    case AUDIO_SET_PLAYING:
      return Object.assign({}, state, {
        isPlaying: action.payload
      });
    default:
      return state;
  }
};

const initialState = {
  isPlaying: false,
  audioUrl: null,
  audioTitle: null,
  audioArtist: null
};

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
