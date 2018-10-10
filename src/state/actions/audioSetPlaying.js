import { AUDIO_SET_PLAYING } from "./actionTypes";

export default function audioSetPlaying(payload) {
  return {
    type: AUDIO_SET_PLAYING,
    payload
  };
}
