import { createStore as reduxCreateStore } from "redux";

const reducer = (state, action) => {
  switch (action.type) {
    case `AUDIO_PLAY_FILE`:
      return Object.assign({}, state, {
        audioUrl: action.payload,
        isPlaying: true
      });
    case `AUDIO_SET_PLAYING`:
      return Object.assign({}, state, {
        isPlaying: action.payload
      });
    default:
      return state;
  }
};

const initialState = { isPlaying: false, audioUrl: null, audioTitle: null };

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
